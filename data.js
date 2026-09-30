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
 */
window.XRSTAND = {
  events: [
    {
      id: "ismar2026",
      short: "ISMAR 2026",
      title: "XRStand 2026: XR Standards and Open Science Practices",
      format: "Tutorial",
      venue: "IEEE ISMAR 2026",
      date: "2026-10-05",
      url: "https://xrstand-standardization-committee.github.io/ISMAR-26-Tutorial/",
      committee: "https://www.ieeeismar.net/2026/committee/standardization/",
      summary:
        "System-level standard APIs such as OpenXR, study reproduction methodologies in XR research, and experiment and data-sharing infrastructure.",
      people: "Organizers: Takeshi Kurata, Jen-Shuo Liu",
    },
    {
      id: "ieeevr2026",
      short: "IEEE VR 2026",
      title: "Standardization in XR/VR: Challenges and Priorities Beyond Terminology",
      format: "Panel",
      venue: "IEEE VR 2026",
      date: "2026-03-25",
      url: "https://ieeevr.org/2026/program/panels/",
      committee: "https://ieeevr.org/2026/committees/XR%E2%81%84VR%20Standardization%20Committee/",
      summary:
        "Reproducibility gaps in VR research, open standards such as OpenXR versus proprietary ecosystems, and whether standardization should mandate benchmarks.",
      people:
        "Moderator: Jen-Shuo Liu · Panelists: Neil Trevett, Tim Weissker, J. Edward Swan II, Richard Skarbez",
    },
    {
      id: "ismar2025",
      short: "ISMAR 2025",
      title: "XRStand 2025: 1st International Workshop on Standardization in XR",
      format: "Workshop",
      venue: "IEEE ISMAR 2025",
      date: "2025-10-08",
      url: "https://xrstand-standardization-committee.github.io/ISMAR2025--XRStand2025_Workshop/",
      committee: "https://www.ieeeismar.net/2025/committee/standardization/",
      summary:
        "Keynote on virtual worlds interoperability, 10 accepted papers (lightning talks and posters), and invited talks on the Reality–Virtuality Continuum and metaverse platforms.",
      people: "General Chairs: Yahya (Yohan) Hmaiti, Ryosuke Ichikari, Seonji Kim",
    },
  ],

  resources: [
    // ---- Recordings ----
    {
      type: "recording",
      event: "ismar2025",
      title: "XRStand 2025 Workshop — full recording",
      url: "https://youtu.be/6TGDVTBICNc",
    },

    // ---- Talks & panels ----
    {
      type: "talk",
      event: "ismar2026",
      title: "Towards Unified Standards for Replicable and Generalizable User Studies in Extended Reality",
      authors: "Tim Weissker",
    },
    {
      type: "talk",
      event: "ismar2026",
      title: "API Standards for Immersive Displays",
      authors: "William R. Sherman",
    },
    {
      type: "talk",
      event: "ismar2026",
      title: "Toward Reproducible and Interoperable XR Research: Perspectives from VERA",
      authors: "Greg Welch, Ali Haskins, Corey Clements",
    },
    {
      type: "talk",
      event: "ieeevr2026",
      title: "Panel: Standardization in XR/VR: Challenges and Priorities Beyond Terminology",
      authors: "Jen-Shuo Liu (moderator), Neil Trevett, Tim Weissker, J. Edward Swan II, Richard Skarbez",
      url: "https://ieeevr.org/2026/program/panels/",
    },
    {
      type: "talk",
      event: "ismar2025",
      title: "Keynote: Progress in Virtual Worlds Interoperability Standards and Metaverse Standardization Forum",
      authors: "Christine Perey",
    },
    {
      type: "talk",
      event: "ismar2025",
      title: "Revisiting Milgram & Kishino's Reality–Virtuality Continuum",
      authors: "Missie Smith",
    },
    {
      type: "talk",
      event: "ismar2025",
      title: "Latest Trends of Large-scale Metaverse Platforms and Perspectives on Standardization",
      authors: "Takefumi Hiraki",
    },

    // ---- Papers (XRStand 2025) — add `url` when PDFs / DOIs are available ----
    { type: "paper", event: "ismar2025", title: "Designing xDR Challenge 2025 to Evaluate Localization Performance of Smartphone with Navigation Robot for People with Visual Impairment", authors: "Ogiso, Ichikari, Sato, Sato, Miura, Kourogi, Okuma, Tanabe, Kurata" },
    { type: "paper", event: "ismar2025", title: "VRM: Concept and Implementation of an Application-Interoperable Avatar Format", authors: "Iwaki, Kurata" },
    { type: "paper", event: "ismar2025", title: "Standardization for Social VR: Balancing Expressive Diversity, Interoperability, and Creator Participation", authors: "Kunitake, Song" },
    { type: "paper", event: "ismar2025", title: "A Proposal for a Common Platform and Methodology for Evaluating xR Experiences", authors: "Ohyama" },
    { type: "paper", event: "ismar2025", title: "Hand/Finger Gesture Standardization for FCI (Finger-Computer-Interface) in XR", authors: "Kim, Yoo, Chai" },
    { type: "paper", event: "ismar2025", title: "Spatio-Temporal Mixed and Augmented Reality Experience Description for Interactive Playback", authors: "Kim, Woo" },
    { type: "paper", event: "ismar2025", title: "Human-to-Avatar Face Representation of Extended Reality Glasses Wearers for Communication", authors: "Kang, Yang, Woo" },
    { type: "paper", event: "ismar2025", title: "Toward a Human-Centered Framework for Standardization in eXtended Reality: Development, Measurement, and Evaluation", authors: "Gkoumas, Triantafyllidis, Rouchitsas" },
    { type: "paper", event: "ismar2025", title: "Mutual Space Representation Standardization for Mixed and Augmented Reality Remote Collaboration", authors: "Kim, Woo" },
    { type: "paper", event: "ismar2025", title: "No Terminology, No Standards, No Future: Semantic Interoperability for Bridging Stakeholders in XR", authors: "Kurata" },
  ],

  links: {
    contact: "M-ismar-standard-ml@aist.go.jp",
  },
};
