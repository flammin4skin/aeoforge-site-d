export type ArticleSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  directAnswer: string;
  updated: string;
  pillar?: boolean;
  sections: ArticleSection[];
  faqs: { question: string; answer: string }[];
  sources: { label: string; url: string }[];
};

const EPA_IAQ = "https://www.epa.gov/indoor-air-quality-iaq";
const EPA_VOC = "https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality";
const EPA_IMPROVE = "https://www.epa.gov/indoor-air-quality-iaq/improving-indoor-air-quality";
const EPA_CLEANERS = "https://www.epa.gov/indoor-air-quality-iaq/air-cleaners-and-air-filters-home";
const ASHRAE = "https://www.ashrae.org";
const WHO = "https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health";
const NIST = "https://www.nist.gov";

export const articles: Article[] = [
  {
    slug: "indoor-air-quality-apartments",
    title: "Indoor Air Quality in Apartments — Complete Guide",
    description:
      "What safe indoor air means in small apartments: CO₂, VOCs, ventilation, and monitors — with practical thresholds from EPA and ASHRAE guidance.",
    directAnswer:
      "Indoor air quality (IAQ) in apartments depends on ventilation, indoor sources (cooking, cleaning, furniture), and outdoor air that enters through leaks or open windows. For occupied spaces, [ASHRAE ventilation guidance](https://www.ashrae.org) commonly targets roughly 1,000 ppm CO₂ or lower as a ventilation adequacy signal; [EPA IAQ guidance](https://www.epa.gov/indoor-air-quality-iaq) focuses on reducing VOCs, PM₂.₅, and other pollutants through source control and filtered fresh air.",
    updated: "2026-06-18",
    pillar: true,
    sections: [
      {
        id: "what-is-iaq",
        heading: "What is indoor air quality?",
        paragraphs: [
          "Indoor air quality (IAQ) describes the condition of air inside a building — including temperature, humidity, and concentrations of pollutants such as carbon dioxide (CO₂), volatile organic compounds (VOCs), particulate matter, and carbon monoxide — because these factors determine what you breathe for hours each day.",
          "Apartments often have less control over whole-building ventilation than single-family homes. Renters rely on operable windows, bathroom and kitchen exhaust fans, portable air cleaners, and whatever central system the building provides ([EPA improving IAQ](https://www.epa.gov/indoor-air-quality-iaq/improving-indoor-air-quality)).",
        ],
      },
      {
        id: "what-to-measure",
        heading: "What should apartment dwellers measure?",
        paragraphs: [
          "CO₂ is a useful proxy for whether enough fresh air is reaching a room when people are present — readings above about 1,000 ppm often mean ventilation is lagging behind occupancy, which leads to stuffiness even though CO₂ itself is not toxic at typical indoor levels.",
          "Total VOC (TVOC) sensors and PM₂.₅ monitors help spot pollution spikes from cooking, wildfire smoke, or off-gassing from new materials. A single consumer monitor may not measure every pollutant; match the device to your main concern ([EPA air cleaners overview](https://www.epa.gov/indoor-air-quality-iaq/air-cleaners-and-air-filters-home)).",
        ],
        bullets: [
          "CO₂ — ventilation adequacy when occupied (often compared to ~1,000 ppm benchmarks)",
          "PM₂.₅ — smoke, dust, and fine particles",
          "TVOC — aggregate signal for many organic chemicals (sensor quality varies)",
          "Humidity — comfort and mold risk (many guides target roughly 30–50% RH indoors)",
        ],
      },
      {
        id: "quick-wins",
        heading: "What practical improvements work without renovation?",
        paragraphs: [
          "Run kitchen and bath exhaust fans during and after cooking or showering, because exhaust airflow removes moisture and combustion byproducts before they spread to bedrooms.",
          "Open windows when outdoor air is clean — even 10–15 minutes can lower CO₂ and stale-air feel. In summer or wildfire season, prefer short flush ventilation when outdoor AQI is good ([EPA ventilation tips](https://www.epa.gov/indoor-air-quality-iaq/improving-indoor-air-quality)).",
          "Choose cleaning products with lower VOC emissions and avoid burning candles or incense in small, closed rooms — source control reduces exposure more reliably than masking odors.",
          "Place a portable air cleaner with a HEPA filter in the room where you spend the most time if outdoor or wildfire smoke is a recurring issue ([WHO household air pollution facts](https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health)).",
        ],
      },
    ],
    faqs: [
      {
        question: "Is 1,000 ppm CO₂ dangerous?",
        answer:
          "At around 1,000 ppm, many people notice stuffiness or mild fatigue; it is a ventilation signal, not an acute poisoning threshold. Outdoor air is often near 400–450 ppm. ASHRAE ventilation guidance often uses roughly 1,000 ppm indoors as a design reference for acceptable dilution in many occupied spaces.",
      },
      {
        question: "Do plants meaningfully clean apartment air?",
        answer:
          "Houseplants can remove small amounts of some pollutants in controlled lab studies, but typical apartment plant counts do not replace ventilation or filtration. Source control and fresh air matter more than decorative greenery alone.",
      },
      {
        question: "Can my landlord be responsible for poor IAQ?",
        answer:
          "Rules vary by jurisdiction. Landlords are often required to address mold, pest infestations, and broken ventilation equipment, but general stuffiness from inadequate fresh air may not have a simple legal fix. Document issues and ask about exhaust fan maintenance and filter schedules.",
      },
    ],
    sources: [
      { label: "EPA — Indoor Air Quality", url: EPA_IAQ },
      { label: "ASHRAE — Ventilation for acceptable indoor air quality", url: ASHRAE },
      { label: "WHO — Household fuel combustion and health", url: WHO },
    ],
  },
  {
    slug: "what-is-co2-ppm-indoors",
    title: "Indoor CO₂ ppm: Safe Levels",
    description:
      "CO₂ is measured in parts per million (ppm). Learn typical outdoor and indoor ranges, what 1,000 ppm means, and when to ventilate a small apartment.",
    directAnswer:
      "CO₂ ppm counts how many parts per million of indoor air are carbon dioxide. Outdoor air is typically about 400–450 ppm. Indoors, readings under about 1,000 ppm are widely used as a ventilation comfort benchmark ([ASHRAE](https://www.ashrae.org)); above roughly 1,500–2,000 ppm, more occupants report stuffiness and reduced concentration.",
    updated: "2026-06-18",
    sections: [
      {
        id: "definition",
        heading: "What does ppm mean for CO₂?",
        paragraphs: [
          "Parts per million (ppm) expresses concentration: 1,000 ppm CO₂ means 0.1% of the air volume is carbon dioxide. People exhale CO₂, so levels rise in closed rooms with several occupants and limited fresh air — which is why a bedroom with two people can exceed 1,500 ppm overnight without ventilation.",
        ],
      },
      {
        id: "ranges",
        heading: "What are typical CO₂ ranges indoors?",
        paragraphs: [
          "Outdoor background is often 400–450 ppm in urban areas (varies seasonally), while a well-ventilated room with people present commonly reads 600–900 ppm because fresh air dilutes exhaled CO₂.",
        ],
        bullets: [
          "~400–450 ppm — typical outdoor baseline",
          "~800–1,000 ppm — common target band for acceptable occupied ventilation",
          "1,000–1,500 ppm — stuffy meeting or bedroom without adequate air exchange",
          "2,000+ ppm — strong cue to open windows or increase exhaust airflow",
        ],
      },
      {
        id: "actions",
        heading: "What should you do when CO₂ is high?",
        paragraphs: [
          "Short-term: open a window for 5–15 minutes, run exhaust fans, or move to a better-ventilated area — flush ventilation exchanges air quickly without leaving windows cracked all day.",
          "Long-term: sleep with the door cracked if safe, ensure bath/kitchen fans work, and ask building management about makeup air or HVAC maintenance if levels stay high with windows closed ([NIST ventilation research](https://www.nist.gov)).",
        ],
      },
      {
        id: "takeaways",
        heading: "Key takeaways",
        paragraphs: [
          "CO₂ ppm is a concentration unit — 1,000 ppm means 0.1% of indoor air is carbon dioxide, which rises when people exhale in closed rooms.",
        ],
        bullets: [
          "Outdoor CO₂ is typically 400–450 ppm; indoors above ~1,000 ppm signals ventilation may be inadequate.",
          "Readings of 1,500–2,000 ppm often feel stuffy — open windows or run exhaust for 5–15 minutes.",
          "A CO₂ monitor measures ventilation; it does not detect smoke particles (use PM₂.₅ for that).",
          "Bedrooms with two occupants can exceed 1,500 ppm overnight without airflow ([EPA IAQ basics](https://www.epa.gov/indoor-air-quality-iaq)).",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a CO₂ monitor the same as an air quality monitor?",
        answer:
          "Not always. Some devices measure only CO₂. Others add PM₂.₅, TVOC, humidity, or temperature. Pick based on whether you care most about ventilation (CO₂) or particles/smoke (PM₂.₅).",
      },
      {
        question: "Should I worry about CO₂ while sleeping?",
        answer:
          "Bedrooms with closed doors and two occupants can exceed 1,500 ppm overnight. A small gap under the door, a working exhaust path, or brief pre-sleep ventilation often helps.",
      },
    ],
    sources: [
      { label: "EPA — Indoor Air Quality", url: EPA_IAQ },
      { label: "NIST — Indoor air quality and ventilation", url: NIST },
    ],
  },
  {
    slug: "what-are-vocs-home-air",
    title: "What Are VOCs in Home Air?",
    description:
      "Volatile organic compounds (VOCs) are chemicals that evaporate into indoor air from products and activities. Learn common sources and how to reduce exposure in apartments.",
    directAnswer:
      "Volatile organic compounds (VOCs) are organic chemicals that easily become vapors at room temperature. Indoors, they come from paints, cleaners, adhesives, furniture, cooking, and personal care products. [EPA VOC guidance](https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality) advises reducing VOC exposure through source selection, ventilation, and following product label directions.",
    updated: "2026-06-18",
    sections: [
      {
        id: "definition",
        heading: "What are VOCs?",
        paragraphs: [
          "VOC stands for volatile organic compound — a large group of carbon-based chemicals that off-gas into air. Not every VOC is equally harmful, but elevated indoor levels can irritate eyes and airways and contribute to long-term health concerns at high exposures ([EPA VOC overview](https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality)).",
        ],
      },
      {
        id: "sources",
        heading: "What are common VOC sources in apartments?",
        paragraphs: [
          "New furniture, flooring, or flat-pack assemblies can off-gas formaldehyde and other aldehydes for weeks, which causes TVOC spikes in small bedrooms.",
          "Aerosol cleaners, air fresheners, and bleach-containing products release VOCs during use — ventilation during cleaning reduces peak exposure by 50% or more in many tests.",
          "Cooking on gas stoves produces combustion byproducts; use hood ventilation when available ([WHO household air pollution](https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health)).",
        ],
      },
      {
        id: "reduce",
        heading: "How can you lower VOC levels without remodeling?",
        paragraphs: [
          "Ventilate during and after painting or cleaning, because opening windows when outdoor air quality is good removes vapors faster than filtration alone.",
          "Choose low-VOC or Green Seal certified products when replacements are due — source control prevents emissions rather than chasing sensor readings.",
          "Store solvents and paints in sealed containers outside living space when possible, and let new furniture air out near open windows before placing in a small bedroom ([EPA improving IAQ](https://www.epa.gov/indoor-air-quality-iaq/improving-indoor-air-quality)).",
        ],
      },
    ],
    faqs: [
      {
        question: "Do air purifiers remove VOCs?",
        answer:
          "HEPA filters target particles, not most gases. Some purifiers include activated carbon that can reduce certain VOCs for a limited time before the carbon saturates. Ventilation and source control remain primary.",
      },
    ],
    sources: [
      { label: "EPA — Volatile Organic Compounds' Impact on Indoor Air Quality", url: EPA_VOC },
    ],
  },
  {
    slug: "ventilate-apartment-without-losing-heat",
    title: "How to Ventilate an Apartment Without Losing Heat or AC",
    description:
      "Short flush ventilation, fan timing, and night cooling tricks for renters who need fresh air without wasting energy.",
    directAnswer:
      "Use short flush ventilation: open windows wide for 5–15 minutes to exchange air, then close them rather than leaving windows cracked all day. Run kitchen and bath exhaust fans during cooking and showering, and ventilate when outdoor air is coolest or cleanest — often early morning — to recover comfort faster after airing out ([EPA improving IAQ](https://www.epa.gov/indoor-air-quality-iaq/improving-indoor-air-quality)).",
    updated: "2026-06-18",
    sections: [
      {
        id: "flush",
        heading: "What is flush ventilation vs. trickle ventilation?",
        paragraphs: [
          "Flush ventilation moves a large volume of air in 5–15 minutes, then seals the envelope again — this often lowers CO₂ faster than a window cracked for hours because it exchanges air in one batch rather than bleeding heat continuously.",
          "Trickle ventilation (a window cracked for hours) bleeds heating or cooling continuously, which can increase energy use noticeably in small apartments during winter or summer peaks ([ASHRAE ventilation standards](https://www.ashrae.org)).",
        ],
      },
      {
        id: "when",
        heading: "When should you air out an apartment?",
        paragraphs: [
          "Check outdoor AQI before opening windows during wildfire season, because bringing smoke indoors can spike PM₂.₅ above 100 µg/m³ within minutes.",
          "In winter, a brief flush before leaving for work can reset overnight CO₂ from 1,500 ppm toward 800 ppm without leaving windows open all day.",
          "Pair flush ventilation with exhaust fans to pull stale air out while fresh air enters through windows on the opposite side ([EPA ventilation guidance](https://www.epa.gov/indoor-air-quality-iaq/improving-indoor-air-quality)).",
        ],
      },
      {
        id: "energy",
        heading: "How much energy does flush ventilation save?",
        paragraphs: [
          "A 10-minute flush twice daily typically costs less heating or cooling loss than one window cracked 8 hours, because the HVAC system runs less overall when the envelope stays sealed between flushes.",
          "Flush ventilation is the practice of exchanging indoor air in one short burst rather than trickle leaking — it is often 40–60% more energy-efficient than all-day window cracks for the same CO₂ reduction in small apartments.",
        ],
        bullets: [
          "1. Open windows fully on opposite sides if safe for 5–15 minutes",
          "2. Run kitchen or bath exhaust on high during the flush",
          "3. Close windows and doors; allow 10–20 minutes for temperature recovery",
          "4. Repeat when CO₂ rises above ~1,000 ppm or air feels stale",
        ],
      },
      {
        id: "trigger",
        heading: "What CO₂ level should trigger a flush?",
        paragraphs: [
          "A CO₂ reading above 1,000 ppm while people are present is a common trigger to flush, because ASHRAE-style ventilation targets use that band as an occupied-space comfort benchmark.",
          "If your monitor shows 1,500 ppm or higher for more than 30 minutes, run a 10-minute flush and re-check — levels above 2,000 ppm mean ventilation is clearly lagging behind occupancy ([WHO indoor air guidance](https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health)).",
        ],
      },
      {
        id: "takeaways",
        heading: "Key takeaways",
        paragraphs: [
          "Short flush ventilation (5–15 minutes) lowers CO₂ faster than a cracked window left open all day while wasting less heat or AC.",
        ],
        bullets: [
          "Open windows wide for 5–15 minutes when CO₂ exceeds ~1,000 ppm or air feels stale.",
          "Run kitchen and bath exhaust during cooking and showering to remove moisture and combustion byproducts.",
          "Air out when outdoor AQI is good — especially early morning in summer — to recover indoor comfort faster.",
          "Pair exhaust fans with a controlled window opening so makeup air enters predictably in tight apartments.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does cracking a window waste AC?",
        answer:
          "A small crack for hours can increase cooling load noticeably. Short, intentional flush periods usually exchange more air per unit of energy lost.",
      },
      {
        question: "Can exhaust fans alone ventilate without opening windows?",
        answer:
          "Exhaust fans remove air but require makeup air from somewhere — often gaps around doors or windows. In tight apartments, pairing exhaust with a controlled window opening works better than fans alone.",
      },
    ],
    sources: [
      { label: "EPA — Improving Indoor Air Quality", url: EPA_IMPROVE },
      { label: "ASHRAE — Ventilation guidance", url: ASHRAE },
    ],
  },
  {
    slug: "co2-monitor-vs-air-quality-monitor",
    title: "CO₂ Monitor vs Air Quality Monitor — What’s the Difference?",
    description:
      "Compare CO₂-only sensors, PM₂.₅ monitors, and multi-sensor IAQ devices so you buy for your actual apartment problem.",
    directAnswer:
      "A CO₂ monitor measures carbon dioxide concentration — best for judging ventilation when people are in the room. A broader air quality monitor may add PM₂.₅ (smoke and dust), TVOC (mixed gases), humidity, and temperature. Choose CO₂ if stuffiness is the issue; choose PM₂.₅ or multi-sensor if wildfire smoke or particles are the main concern ([EPA air cleaners guidance](https://www.epa.gov/indoor-air-quality-iaq/air-cleaners-and-air-filters-home)).",
    updated: "2026-06-18",
    sections: [
      {
        id: "co2",
        heading: "When is a CO₂ monitor enough?",
        paragraphs: [
          "A CO₂-only sensor answers ventilation questions in a home office with 2–3 people, a bedroom with overnight stuffiness above 1,000 ppm, or when checking whether building HVAC delivers enough fresh air — because CO₂ rises predictably with occupancy.",
        ],
      },
      {
        id: "multi",
        heading: "When do you need more sensors?",
        paragraphs: [
          "Wildfire smoke, urban dust, or allergy seasons require PM₂.₅ measurement and often a HEPA purifier, because particles are not visible on a CO₂-only display.",
          "New renovation smell may show TVOC spikes, but source removal and ventilation matter more than the absolute number on screen ([EPA VOC guidance](https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality)).",
        ],
      },
      {
        id: "choose",
        heading: "How should you choose between models?",
        paragraphs: [
          "Match the sensor to the pollutant you need to control: CO₂ for fresh air, PM₂.₅ for smoke, and TVOC only as a trend indicator because cross-brand TVOC readings are rarely comparable ([NIST sensor research](https://www.nist.gov)).",
          "A CO₂ monitor is a device that measures ventilation adequacy; an air quality monitor is a multi-sensor unit that may add PM₂.₅, TVOC, humidity, and temperature in one housing.",
        ],
      },
      {
        id: "takeaways",
        heading: "Key takeaways",
        paragraphs: [
          "Pick CO₂-only when stuffiness is the problem; add PM₂.₅ when wildfire smoke or urban dust is the main concern.",
        ],
        bullets: [
          "CO₂ monitors answer whether enough fresh air reaches occupied rooms (target often ~1,000 ppm or lower).",
          "PM₂.₅ sensors matter when smoke, dust, or allergens dominate — pair with a HEPA purifier, not ventilation alone.",
          "TVOC readings are best used as trend lines, not cross-brand absolute numbers.",
          "Place any monitor in the breathing zone (3–6 ft high) away from windows and stovetops ([EPA air cleaners guidance](https://www.epa.gov/indoor-air-quality-iaq/air-cleaners-and-air-filters-home)).",
        ],
      },
    ],
    faqs: [
      {
        question: "Are consumer TVOC readings comparable across brands?",
        answer:
          "Often no — TVOC is a catch-all and sensor technology varies. Use trends (higher vs lower than your baseline) more than absolute cross-brand numbers.",
      },
    ],
    sources: [
      { label: "EPA — Air Cleaners and Air Filters in the Home", url: EPA_CLEANERS },
    ],
  },
  {
    slug: "where-place-air-quality-monitor-apartment",
    title: "Where to Place an Air Quality Monitor in a Small Apartment",
    description:
      "Breathing-zone height, distance from windows, and why one sensor cannot represent every room.",
    directAnswer:
      "Place a monitor about 3–6 feet (1–1.5 m) high in the room where you spend the most time — desk level in a home office, nightstand height in a bedroom — away from direct window drafts, doors, and HVAC vents so readings reflect the air you actually breathe. One monitor cannot represent the whole apartment; move it or add a second sensor if kitchen smoke is the main issue.",
    updated: "2026-06-18",
    sections: [
      {
        id: "height",
        heading: "What height and distance work best?",
        paragraphs: [
          "Place the device about 3–6 feet (1–1.5 m) high in the breathing zone, because CO₂ and PM₂.₅ concentrations differ near the floor versus where you sit or sleep — desk height in an office, nightstand height in a bedroom.",
          "Avoid placing right next to a window that is often open — outdoor air at 400–450 ppm CO₂ will dominate readings and hide indoor buildup above 1,000 ppm.",
          "Keep away from stovetops and cleaning product storage; localized PM₂.₅ spikes above 200 µg/m³ during frying are real but do not represent whole-room conditions ([EPA IAQ basics](https://www.epa.gov/indoor-air-quality-iaq)).",
        ],
      },
      {
        id: "multi-room",
        heading: "Why does one apartment have multiple microclimates?",
        paragraphs: [
          "Kitchen PM₂.₅ can spike above 200 µg/m³ during frying while the bedroom reads under 20 µg/m³, because cooking emissions stay localized without strong exhaust.",
          "If cooking is your main concern, a monitor in the kitchen for one week tells you more than a single living-room average ([WHO household air pollution](https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health)).",
        ],
      },
      {
        id: "calibrate",
        heading: "How often should you move or calibrate a monitor?",
        paragraphs: [
          "Move the sensor seasonally — winter stuffiness and summer smoke create different priorities — and calibrate NDIR CO₂ sensors outdoors monthly if the manufacturer recommends it, because sensor drift of 50–100 ppm per year is common without fresh-air baseline checks ([NIST sensor research](https://www.nist.gov)).",
        ],
      },
      {
        id: "takeaways",
        heading: "Key takeaways",
        paragraphs: [
          "An air quality monitor belongs in the breathing zone (3–6 ft high) in the room you occupy most, not beside an open window or stovetop.",
        ],
        bullets: [
          "CO₂ monitors answer ventilation — target roughly 1,000 ppm or lower when occupied.",
          "PM₂.₅ sensors matter for smoke and frying; place one in the kitchen for a week if cooking dominates.",
          "NDIR CO₂ sensors need occasional outdoor calibration; follow the manufacturer interval.",
          "One device cannot map the whole apartment — move it or add a second sensor for high-variance rooms.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I calibrate my CO₂ monitor?",
        answer:
          "Many consumer NDIR CO₂ sensors drift slowly. Occasional fresh-air calibration (device outdoors or at an open window on a calm day) improves accuracy — follow manufacturer instructions.",
      },
      {
        question: "Can I mount a monitor on the ceiling?",
        answer:
          "Ceiling mounting often reads stale stratified air in winter. Breathing-zone height (3–6 ft) matches where you inhale for 8+ hours in bedrooms and home offices.",
      },
    ],
    sources: [
      { label: "EPA — Indoor Air Quality", url: EPA_IAQ },
      { label: "NIST — Indoor air and sensor research", url: NIST },
      { label: "WHO — Household air pollution", url: WHO },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getPillar(): Article {
  return articles.find((a) => a.pillar) ?? articles[0];
}
