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

export const articles: Article[] = [
  {
    slug: "indoor-air-quality-apartments",
    title: "Indoor Air Quality in Apartments — Complete Guide",
    description:
      "What safe indoor air means in small apartments: CO₂, VOCs, ventilation, and monitors — with practical thresholds from EPA and ASHRAE guidance.",
    directAnswer:
      "Indoor air quality (IAQ) in apartments depends on ventilation, indoor sources (cooking, cleaning, furniture), and outdoor air that enters through leaks or open windows. For occupied spaces, ASHRAE commonly targets roughly 1,000 ppm CO₂ or lower as a ventilation adequacy signal; EPA focuses on reducing VOCs, PM₂.₅, and other pollutants through source control and filtered fresh air.",
    updated: "2026-06-18",
    pillar: true,
    sections: [
      {
        id: "what-is-iaq",
        heading: "What is indoor air quality?",
        paragraphs: [
          "Indoor air quality (IAQ) describes the condition of air inside a building — including temperature, humidity, and concentrations of pollutants such as carbon dioxide (CO₂), volatile organic compounds (VOCs), particulate matter, and carbon monoxide.",
          "Apartments often have less control over whole-building ventilation than single-family homes. Renters rely on operable windows, bathroom and kitchen exhaust fans, portable air cleaners, and whatever central system the building provides.",
        ],
      },
      {
        id: "what-to-measure",
        heading: "What should apartment dwellers measure?",
        paragraphs: [
          "CO₂ is a useful proxy for whether enough fresh air is reaching a room when people are present. It is not itself a toxic gas at typical indoor levels, but rising CO₂ often means ventilation is lagging behind occupancy.",
          "Total VOC (TVOC) sensors and PM₂.₅ monitors help spot pollution spikes from cooking, wildfire smoke, or off-gassing from new materials. A single consumer monitor may not measure every pollutant; match the device to your main concern.",
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
        heading: "Practical improvements that do not require renovation",
        paragraphs: [
          "Run kitchen and bath exhaust fans during and after cooking or showering. Use the highest setting that is tolerable for noise.",
          "Open windows when outdoor air is clean — even 10–15 minutes can lower CO₂ and stale-air feel. In summer or wildfire season, prefer short flush ventilation when outdoor AQI is good.",
          "Choose cleaning products with lower VOC emissions and avoid burning candles or incense in small, closed rooms.",
          "Place a portable air cleaner with a HEPA filter in the room where you spend the most time if outdoor or wildfire smoke is a recurring issue.",
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
      { label: "EPA — Indoor Air Quality", url: "https://www.epa.gov/indoor-air-quality-iaq" },
      { label: "ASHRAE — Ventilation for acceptable indoor air quality", url: "https://www.ashrae.org" },
      { label: "WHO — Household fuel combustion and health", url: "https://www.who.int" },
    ],
  },
  {
    slug: "what-is-co2-ppm-indoors",
    title: "What Is CO₂ ppm Indoors — and What Levels Are Safe?",
    description:
      "CO₂ is measured in parts per million (ppm). Learn typical outdoor and indoor ranges, what 1,000 ppm means, and when to ventilate a small apartment.",
    directAnswer:
      "CO₂ ppm counts how many parts per million of indoor air are carbon dioxide. Outdoor air is typically about 400–450 ppm. Indoors, readings under about 1,000 ppm are widely used as a ventilation comfort benchmark; above roughly 1,500–2,000 ppm, more occupants report stuffiness and reduced concentration.",
    updated: "2026-06-18",
    sections: [
      {
        id: "definition",
        heading: "What does ppm mean for CO₂?",
        paragraphs: [
          "Parts per million (ppm) expresses concentration: 1,000 ppm CO₂ means 0.1% of the air volume is carbon dioxide. People exhale CO₂, so levels rise in closed rooms with several occupants and limited fresh air.",
        ],
      },
      {
        id: "ranges",
        heading: "Typical CO₂ ranges indoors",
        paragraphs: [
          "Outdoor background: often 400–450 ppm in urban areas (varies seasonally).",
          "Well-ventilated room: often 600–900 ppm with people present.",
          "Stuffy meeting or bedroom: 1,000–1,500 ppm is common without adequate air exchange.",
          "Poorly ventilated space: 2,000+ ppm can occur; ventilation should be improved.",
        ],
        bullets: [
          "~400–450 ppm — typical outdoor baseline",
          "~800–1,000 ppm — common target band for acceptable occupied ventilation",
          "1,500+ ppm — strong cue to open windows or increase exhaust airflow",
        ],
      },
      {
        id: "actions",
        heading: "What to do when CO₂ is high",
        paragraphs: [
          "Short-term: open a window, run exhaust fans, or move to a better-ventilated area.",
          "Long-term: sleep with the door cracked if safe, ensure bath/kitchen fans work, and ask building management about makeup air or HVAC maintenance if levels stay high with windows closed.",
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
      { label: "EPA — Indoor Air Quality", url: "https://www.epa.gov/indoor-air-quality-iaq" },
      { label: "NIST — Indoor air quality and ventilation", url: "https://www.nist.gov" },
    ],
  },
  {
    slug: "what-are-vocs-home-air",
    title: "What Are VOCs in Home Air?",
    description:
      "Volatile organic compounds (VOCs) are chemicals that evaporate into indoor air from products and activities. Learn common sources and how to reduce exposure in apartments.",
    directAnswer:
      "Volatile organic compounds (VOCs) are organic chemicals that easily become vapors at room temperature. Indoors, they come from paints, cleaners, adhesives, furniture, cooking, and personal care products. EPA advises reducing VOC exposure through source selection, ventilation, and following product label directions.",
    updated: "2026-06-18",
    sections: [
      {
        id: "definition",
        heading: "What are VOCs?",
        paragraphs: [
          "VOC stands for volatile organic compound — a large group of carbon-based chemicals that off-gas into air. Not every VOC is equally harmful, but elevated indoor levels can irritate eyes and airways and contribute to long-term health concerns at high exposures.",
        ],
      },
      {
        id: "sources",
        heading: "Common VOC sources in apartments",
        paragraphs: [
          "New furniture, flooring, or flat-pack assemblies can off-gas formaldehyde and other aldehydes for weeks.",
          "Aerosol cleaners, air fresheners, and bleach-containing products release VOCs during use.",
          "Cooking on gas stoves produces combustion byproducts; use hood ventilation when available.",
        ],
      },
      {
        id: "reduce",
        heading: "How to lower VOC levels without remodeling",
        paragraphs: [
          "Ventilate during and after painting or cleaning. Open windows when outdoor air quality is good.",
          "Choose low-VOC or Green Seal / similar certified products when replacements are due.",
          "Store solvents and paints in sealed containers outside living space when possible.",
          "Let new furniture air out near open windows before placing in a small bedroom.",
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
      { label: "EPA — Volatile Organic Compounds' Impact on Indoor Air Quality", url: "https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality" },
    ],
  },
  {
    slug: "ventilate-apartment-without-losing-heat",
    title: "How to Ventilate an Apartment Without Losing Heat or AC",
    description:
      "Short flush ventilation, fan timing, and night cooling tricks for renters who need fresh air without wasting energy.",
    directAnswer:
      "Use short flush ventilation: open windows wide for 5–15 minutes to exchange air, then close them rather than leaving windows cracked all day. Run kitchen and bath exhaust fans during cooking and showering, and ventilate when outdoor air is coolest or cleanest — often early morning — to recover comfort faster after airing out.",
    updated: "2026-06-18",
    sections: [
      {
        id: "flush",
        heading: "Flush ventilation vs. trickle ventilation",
        paragraphs: [
          "Trickle ventilation (a window cracked for hours) bleeds heating or cooling continuously. Flush ventilation moves a large volume quickly, then seals the envelope again — often more energy-efficient for CO₂ control.",
        ],
      },
      {
        id: "when",
        heading: "When to air out",
        paragraphs: [
          "Check outdoor AQI before opening windows during wildfire season.",
          "In winter, a brief flush before leaving for work can reset overnight CO₂ without leaving windows open all day.",
          "Pair flush ventilation with exhaust fans to pull stale air out while fresh air enters.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does cracking a window waste AC?",
        answer:
          "A small crack for hours can increase cooling load noticeably. Short, intentional flush periods usually exchange more air per unit of energy lost.",
      },
    ],
    sources: [
      { label: "EPA — Improving Indoor Air Quality", url: "https://www.epa.gov/indoor-air-quality-iaq/improving-indoor-air-quality" },
    ],
  },
  {
    slug: "co2-monitor-vs-air-quality-monitor",
    title: "CO₂ Monitor vs Air Quality Monitor — What’s the Difference?",
    description:
      "Compare CO₂-only sensors, PM₂.₅ monitors, and multi-sensor IAQ devices so you buy for your actual apartment problem.",
    directAnswer:
      "A CO₂ monitor measures carbon dioxide concentration — best for judging ventilation when people are in the room. A broader air quality monitor may add PM₂.₅ (smoke and dust), TVOC (mixed gases), humidity, and temperature. Choose CO₂ if stuffiness is the issue; choose PM₂.₅ or multi-sensor if wildfire smoke or particles are the main concern.",
    updated: "2026-06-18",
    sections: [
      {
        id: "co2",
        heading: "When a CO₂ monitor is enough",
        paragraphs: [
          "Home office with 2–3 people, bedroom overnight stuffiness, or checking whether building HVAC delivers enough fresh air — CO₂ alone answers the ventilation question.",
        ],
      },
      {
        id: "multi",
        heading: "When you need more sensors",
        paragraphs: [
          "Wildfire smoke, urban dust, or allergy seasons: prioritize PM₂.₅ and a HEPA purifier, not CO₂ alone.",
          "New renovation smell: TVOC sensors may show spikes, but source removal and ventilation matter more than the number on screen.",
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
      { label: "EPA — Air Cleaners and Air Filters in the Home", url: "https://www.epa.gov/indoor-air-quality-iaq/air-cleaners-and-air-filters-home" },
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
        heading: "Height and distance",
        paragraphs: [
          "Avoid mounting right next to a window that is often open — outdoor air will dominate.",
          "Keep away from stovetops and cleaning product storage; localized spikes are real but not whole-room conditions.",
        ],
      },
      {
        id: "multi-room",
        heading: "One apartment, multiple microclimates",
        paragraphs: [
          "Kitchen PM₂.₅ can spike during frying while the bedroom looks fine. If cooking is your main concern, a monitor in the kitchen for a week tells you more than a single living-room average.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I calibrate my CO₂ monitor?",
        answer:
          "Many consumer NDIR CO₂ sensors drift slowly. Occasional fresh-air calibration (device outdoors or at an open window on a calm day) improves accuracy — follow manufacturer instructions.",
      },
    ],
    sources: [
      { label: "EPA — Indoor Air Quality", url: "https://www.epa.gov/indoor-air-quality-iaq" },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getPillar(): Article {
  return articles.find((a) => a.pillar) ?? articles[0];
}
