/*
 * XRStand site content — edit this file to update the website.
 * No build step: commit & push, GitHub Pages redeploys automatically.
 *
 * events:    one entry per event (sorted by date automatically)
 *   id:         short unique key, referenced by resources
 *   short:      short label, e.g. "ISMAR 2025"
 *   committee:  link to that conference's standardization committee page
 *               (membership differs each time)
 * resources: papers / standards / recordings / slides / talks
 *   type:   "paper" | "talk" | "recording" | "slides" | "standard"
 *   event:  optional event id this resource belongs to
 *   themes: ids from `themes` below (used by the theme map)
 *   video:  YouTube/recording link (shown as a "▶ Video" link; talks with a
 *           video also show up under the Recordings filter)
 */
window.XRSTAND = {
  events: [
    {
      id: "ismar2026",
      short: "ISMAR 2026",
      title: "XRStand 2026: XR Standards and Open Science Practices",
      themes: ["interoperability", "reproducibility"],
      format: "Tutorial",
      venue: "IEEE ISMAR 2026",
      date: "2026-10-05",
      url: "ismar2026/",
      committee: "https://www.ieeeismar.net/2026/committee/standardization/",
      summary:
        "System-level standard APIs such as OpenXR, study reproduction methodologies in XR research, and experiment and data-sharing infrastructure.",
      people: "Organized by the IEEE ISMAR 2026 Standardization Committee",
    },
    {
      id: "ieeevr2026",
      short: "IEEE VR 2026",
      title: "Standardization in XR/VR: Challenges and Priorities Beyond Terminology",
      themes: ["lifecycle", "interoperability", "reproducibility", "emerging", "terminology"],
      format: "Panel",
      venue: "IEEE VR 2026",
      date: "2026-03-25",
      url: "ieeevr2026/",
      committee: "https://ieeevr.org/2026/committees/XR%E2%81%84VR%20Standardization%20Committee/",
      summary:
        "Reproducibility gaps in VR research, open standards such as OpenXR versus proprietary ecosystems, and whether standardization should mandate benchmarks.",
      people:
        "Organized by the IEEE VR 2026 XR/VR Standardization Committee · Moderator: Jen-Shuo Liu · Panelists: Neil Trevett, Tim Weissker, J. Edward Swan II, Richard Skarbez",
    },
    {
      id: "ismar2025",
      short: "ISMAR 2025",
      title: "XRStand 2025: 1st International Workshop on Standardization in XR",
      themes: ["interoperability", "reproducibility", "emerging", "terminology"],
      format: "Workshop",
      venue: "IEEE ISMAR 2025",
      date: "2025-10-08",
      url: "ismar2025/",
      committee: "https://www.ieeeismar.net/2025/committee/standardization/",
      summary:
        "Keynote on virtual worlds interoperability, 10 accepted papers (lightning talks and posters), and invited talks on the Reality–Virtuality Continuum and metaverse platforms.",
      people: "Organized by the IEEE ISMAR 2025 Standardization Committee · General Chairs: Yahya (Yohan) Hmaiti, Ryosuke Ichikari, Seonji Kim",
    },
  ],

  resources: [
    // ---- Recordings ----
    {
      type: "recording",
      event: "ismar2025",
      title: "XRStand 2025 Workshop — full recording",
      video: "https://youtu.be/6TGDVTBICNc",
    },
    {
      type: "recording",
      event: "ismar2026",
      title: "XRStand 2026 Tutorial — Opening and Tutorial Overview",
      themes: ["interoperability", "reproducibility"],
      authors: "Takeshi Kurata, Jen-Shuo Liu",
      video: "https://youtu.be/5fh9PxWzvXA",
    },

    // ---- Talks & panels ----
    {
      type: "talk",
      event: "ismar2026",
      title: "Towards Unified Standards for Replicable and Generalizable User Studies in Extended Reality",
      themes: ["reproducibility"],
      authors: "Tim Weissker",
      video: "https://youtu.be/Aafobti21Sg",
    },
    {
      type: "talk",
      event: "ismar2026",
      title: "API Standards for Immersive Displays",
      themes: ["interoperability"],
      authors: "William R. Sherman",
      video: "https://youtu.be/c7wUml1yrCw",
    },
    {
      type: "talk",
      event: "ismar2026",
      title: "Toward Reproducible and Interoperable XR Research: Perspectives from VERA",
      themes: ["reproducibility", "interoperability"],
      authors: "Greg Welch, Ali Haskins, Corey Clements",
      video: "https://youtu.be/aEd23rIAF0o",
    },
    {
      type: "talk",
      event: "ieeevr2026",
      title: "Panel: Standardization in XR/VR: Challenges and Priorities Beyond Terminology",
      themes: ["lifecycle", "interoperability", "reproducibility", "emerging", "terminology"],
      authors: "Jen-Shuo Liu (moderator), Neil Trevett, Tim Weissker, J. Edward Swan II, Richard Skarbez",
      url: "https://ieeevr.org/2026/program/panels/",
    },
    {
      type: "talk",
      event: "ismar2025",
      title: "Keynote: Progress in Virtual Worlds Interoperability Standards and Metaverse Standardization Forum",
      themes: ["interoperability"],
      authors: "Christine Perey",
    },
    {
      type: "talk",
      event: "ismar2025",
      title: "Revisiting Milgram & Kishino's Reality–Virtuality Continuum",
      themes: ["terminology"],
      authors: "Missie Smith",
    },
    {
      type: "talk",
      event: "ismar2025",
      title: "Latest Trends of Large-scale Metaverse Platforms and Perspectives on Standardization",
      themes: ["lifecycle", "interoperability"],
      authors: "Takefumi Hiraki",
    },

    // ---- Papers (XRStand 2025) — add `url` when PDFs / DOIs are available ----
    { type: "paper", event: "ismar2025", title: "Designing xDR Challenge 2025 to Evaluate Localization Performance of Smartphone with Navigation Robot for People with Visual Impairment", authors: "Ogiso, Ichikari, Sato, Sato, Miura, Kourogi, Okuma, Tanabe, Kurata", themes: ["reproducibility", "emerging"] },
    { type: "paper", event: "ismar2025", title: "VRM: Concept and Implementation of an Application-Interoperable Avatar Format", authors: "Iwaki, Kurata", themes: ["interoperability"] },
    { type: "paper", event: "ismar2025", title: "Standardization for Social VR: Balancing Expressive Diversity, Interoperability, and Creator Participation", authors: "Kunitake, Song", themes: ["interoperability", "emerging"] },
    { type: "paper", event: "ismar2025", title: "A Proposal for a Common Platform and Methodology for Evaluating xR Experiences", authors: "Ohyama", themes: ["reproducibility"] },
    { type: "paper", event: "ismar2025", title: "Hand/Finger Gesture Standardization for FCI (Finger-Computer-Interface) in XR", authors: "Kim, Yoo, Chai", themes: ["interoperability", "emerging"] },
    { type: "paper", event: "ismar2025", title: "Spatio-Temporal Mixed and Augmented Reality Experience Description for Interactive Playback", authors: "Kim, Woo", themes: ["interoperability"] },
    { type: "paper", event: "ismar2025", title: "Human-to-Avatar Face Representation of Extended Reality Glasses Wearers for Communication", authors: "Kang, Yang, Woo", themes: ["interoperability", "emerging"] },
    { type: "paper", event: "ismar2025", title: "Toward a Human-Centered Framework for Standardization in eXtended Reality: Development, Measurement, and Evaluation", authors: "Gkoumas, Triantafyllidis, Rouchitsas", themes: ["lifecycle"] },
    { type: "paper", event: "ismar2025", title: "Mutual Space Representation Standardization for Mixed and Augmented Reality Remote Collaboration", authors: "Kim, Woo", themes: ["interoperability"] },
    { type: "paper", event: "ismar2025", title: "No Terminology, No Standards, No Future: Semantic Interoperability for Bridging Stakeholders in XR", authors: "Kurata", themes: ["terminology"] },
  ],

  // Themes from the IEEE VR 2026 panel summary (ISMAR 2026 poster).
  // panelists / community: highlights shown on the theme map.
  themes: [
    {
      id: "lifecycle",
      title: "Technology Lifecycle",
      panelists: [
        "Standards after convergence of technology",
        "Right timing for standardization",
        "Stronger communication between academia and standardization bodies",
        "Standards: not for doing research, but for enabling broad adoption",
      ],
      community: [
        "Adoption: key success metric for any standard and reproducibility framework",
        "Stronger leadership and collaboration across stakeholders",
        "Portal site regarding standardization in IEEE VR & ISMAR communities",
      ],
    },
    {
      id: "interoperability",
      title: "Interoperability",
      panelists: [
        "Open standards for reducing vendor lock-in",
        "Interoperability for ecosystem growth and innovation",
        "Hardware and software longevity",
        "Early communication to address problems before they become barriers",
      ],
      community: [
        "Hardware transparency: expose sensor timing, sampling rates, and low-level information",
        "Benchmark tools & metrics inspired by 3DMark",
        "Portability across platforms",
      ],
    },
    {
      id: "reproducibility",
      title: "Reproducibility",
      panelists: [
        "Reporting guidelines for XR experiments",
        "Benchmarks and datasets for objective evaluation",
        "Incentives and venues to recognize replication as a valuable contribution (e.g., ACM VRST Reproducibility challenges)",
      ],
      community: [
        "Virtual observers & datasets: models of human perception and behavior to partially replace or complement user studies",
        "Run reproducibility challenge on a few target papers for learning together",
      ],
    },
    {
      id: "emerging",
      title: "Emerging Topics",
      panelists: [
        "Privacy, security, and ethics",
        "AI-enabled spatial computing: embodied AI, object semantics, affordances, action possibilities",
        "Standards + legislation + regulation",
      ],
      community: [
        "Accessibility to ensure inclusive XR experiences",
        "Standard measures and prevention strategies for cybersickness",
        "Clothing standards for avatars are still at an early stage",
      ],
    },
    {
      id: "terminology",
      title: "Terminology",
      panelists: [
        "\"X\" in OpenXR is an algebraic placeholder",
        "\"XR\" is a neutral umbrella term",
        "Need for broad consensus across communities",
        "Terminology matters, but not the only issue",
      ],
      community: ["Continued interest in terminology"],
    },
  ],

  links: {
    contact: "contact@xrstandards.org",
  },
};
