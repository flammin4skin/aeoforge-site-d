/** Run audit remediation workflow: emit activity notes + transition action items. */
const TOKEN = process.env.AEO_HANDOFF_TOKEN;
const API = process.env.AEO_API ?? "https://aeoforged.com/api/v1";
const SNAPSHOT = process.env.AEO_SNAPSHOT_ID ?? "bec677a2-35b2-43fa-8115-df8176cf9ad5";

if (!TOKEN) {
  console.error("Set AEO_HANDOFF_TOKEN");
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
};

async function emit(kind, content, actionItemId) {
  const body = { kind, content, ...(actionItemId ? { action_item_id: actionItemId } : {}) };
  const r = await fetch(`${API}/handoff/events`, { method: "POST", headers, body: JSON.stringify(body) });
  const d = await r.json();
  if (!r.ok) throw new Error(`emit ${kind}: ${JSON.stringify(d)}`);
  return d;
}

async function patchAction(id, status, extra = {}) {
  const r = await fetch(`${API}/action-items/${id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({ status, ...extra }),
  });
  const d = await r.json();
  if (!r.ok) throw new Error(`patch ${id}: ${JSON.stringify(d)}`);
  return d;
}

async function documentFix(id, problem, fix) {
  const r = await fetch(`${API}/action-items/${id}/document-fix`, {
    method: "POST",
    headers,
    body: JSON.stringify({ problem, fix }),
  });
  const d = await r.json();
  if (!r.ok) throw new Error(`document ${id}: ${JSON.stringify(d)}`);
  return d;
}

async function verifyPage(url) {
  const r = await fetch(`${API}/verify-page`, {
    method: "POST",
    headers,
    body: JSON.stringify({ url, snapshot_id: SNAPSHOT }),
  });
  return { status: r.status, body: await r.json() };
}

const TASKS = JSON.parse(process.env.AEO_TASKS ?? "[]");

for (const task of TASKS) {
  console.log("Task:", task.title);
  await emit("note", `▶ Starting: ${task.title} — ${task.note}`, task.id);
  if (task.claim !== false) {
    await patchAction(task.id, "in_progress");
  }
}

if (process.env.AEO_DONE) {
  const done = JSON.parse(process.env.AEO_DONE);
  for (const task of done) {
    await emit("edit", task.editNote, task.id);
    await patchAction(task.id, "done");
    await documentFix(task.id, task.problem, task.fix);
    await emit("note", `✓ Done: ${task.title}. ${task.doneNote}`, task.id);
  }
  const urls = [...new Set(done.map((t) => t.url).filter(Boolean))];
  for (const url of urls) {
    const v = await verifyPage(url);
    await emit("status", `Verify-page ${url}: HTTP ${v.status} — ${JSON.stringify(v.body?.data?.summary ?? v.body?.data ?? v.body).slice(0, 400)}`);
  }
  await emit("status", `Completed ${done.length} command-center priorities. Check Command Center queue for verified ticks.`);
}
