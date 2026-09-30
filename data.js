/*
 * XRStand site content — edit this file to update the website.
 * No build step: commit & push, GitHub Pages redeploys automatically.
 *
 * events:    one entry per year (newest first is not required; sorted automatically)
 * resources: papers / standards / recordings / slides
 *   type:  "paper" | "standard" | "recording" | "slides" | "talk"
 *   year:  optional, links the resource to an event year
 */
window.XRSTAND = {
  events: [
    {
      year: 2026,
      title: "XRStand 2026: XR Standards and Open Science Practices",
      format: "Tutorial",
      venue: "IEEE ISMAR 2026",
      date: "2026-10-05",
      url: "https://xrstand-standardization-committee.github.io/ISMAR-26-Tutorial/",
      summary:
        "System-level standard APIs such as OpenXR, study reproduction methodologies in XR research, and experiment and data-sharing infrastructure.",
      people: "Takeshi Kurata, Jen-Shuo Liu",
    },
    {
      year: 2025,
      title: "XRStand 2025: 1st International Workshop on Standardization in XR",
      format: "Workshop",
      venue: "IEEE ISMAR 2025",
      date: "2025-10-08",
      url: "https://xrstand-standardization-committee.github.io/ISMAR2025--XRStand2025_Workshop/",
      summary:
        "Keynote on virtual worlds interoperability, 10 accepted papers (lightning talks and posters), and invited talks on the Reality–Virtuality Continuum and metaverse platforms.",
      people: "Yahya (Yohan) Hmaiti, Ryosuke Ichikari, Seonji Kim",
    },
  ],

  resources: [
    // ---- Recordings ----
    {
      type: "recording",
      year: 2025,
      title: "XRStand 2025 Workshop — full recording",
      url: "https://youtu.be/6TGDVTBICNc",
    },

    // ---- Talks ----
    {
      type: "talk",
      year: 2026,
      title: "Towards Unified Standards for Replicable and Generalizable User Studies in Extended Reality",
      authors: "Tim Weissker",
    },
    {
      type: "talk",
      year: 2026,
      title: "API Standards for Immersive Displays",
      authors: "William R. Sherman",
    },
    {
      type: "talk",
      year: 2026,
      title: "Toward Reproducible and Interoperable XR Research: Perspectives from VERA",
      authors: "Greg Welch, Ali Haskins, Corey Clements",
    },
    {
      type: "talk",
      year: 2025,
      title: "Keynote: Progress in Virtual Worlds Interoperability Standards and Metaverse Standardization Forum",
      authors: "Christine Perey",
    },
    {
      type: "talk",
      year: 2025,
      title: "Revisiting Milgram & Kishino's Reality–Virtuality Continuum",
      authors: "Missie Smith",
    },
    {
      type: "talk",
      year: 2025,
      title: "Latest Trends of Large-scale Metaverse Platforms and Perspectives on Standardization",
      authors: "Takefumi Hiraki",
    },

    // ---- Papers (XRStand 2025) — add `url` when PDFs / DOIs are available ----
    { type: "paper", year: 2025, title: "Designing xDR Challenge 2025 to Evaluate Localization Performance of Smartphone with Navigation Robot for People with Visual Impairment", authors: "Ogiso, Ichikari, Sato, Sato, Miura, Kourogi, Okuma, Tanabe, Kurata" },
    { type: "paper", year: 2025, title: "VRM: Concept and Implementation of an Application-Interoperable Avatar Format", authors: "Iwaki, Kurata" },
    { type: "paper", year: 2025, title: "Standardization for Social VR: Balancing Expressive Diversity, Interoperability, and Creator Participation", authors: "Kunitake, Song" },
    { type: "paper", year: 2025, title: "A Proposal for a Common Platform and Methodology for Evaluating xR Experiences", authors: "Ohyama" },
    { type: "paper", year: 2025, title: "Hand/Finger Gesture Standardization for FCI (Finger-Computer-Interface) in XR", authors: "Kim, Yoo, Chai" },
    { type: "paper", year: 2025, title: "Spatio-Temporal Mixed and Augmented Reality Experience Description for Interactive Playback", authors: "Kim, Woo" },
    { type: "paper", year: 2025, title: "Human-to-Avatar Face Representation of Extended Reality Glasses Wearers for Communication", authors: "Kang, Yang, Woo" },
    { type: "paper", year: 2025, title: "Toward a Human-Centered Framework for Standardization in eXtended Reality: Development, Measurement, and Evaluation", authors: "Gkoumas, Triantafyllidis, Rouchitsas" },
    { type: "paper", year: 2025, title: "Mutual Space Representation Standardization for Mixed and Augmented Reality Remote Collaboration", authors: "Kim, Woo" },
    { type: "paper", year: 2025, title: "No Terminology, No Standards, No Future: Semantic Interoperability for Bridging Stakeholders in XR", authors: "Kurata" },

    // ---- Standards ----
    { type: "standard", title: "OpenXR", authors: "Khronos Group", url: "https://www.khronos.org/openxr/" },
    { type: "standard", title: "WebXR Device API", authors: "W3C", url: "https://www.w3.org/TR/webxr/" },
    { type: "standard", title: "VRM (avatar file format)", authors: "VRM Consortium", url: "https://vrm.dev/en/" },
    { type: "standard", title: "Metaverse Standards Forum", authors: "Industry forum", url: "https://metaverse-standards.org/" },
  ],

  links: {
    committee: "https://www.ieeeismar.net/2026/committee/standardization/",
    contact: "M-ismar-standard-ml@aist.go.jp",
  },
};
