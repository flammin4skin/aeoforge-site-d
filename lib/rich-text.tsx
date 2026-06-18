/** Render paragraph text with optional [label](url) markdown links. */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const match = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        if (match) {
          return (
            <a
              key={i}
              href={match[2]}
              className="text-sky-700 underline-offset-2 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              {match[1]}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
