(function () {
  const D = window.XRSTAND;
  const $ = (id) => document.getElementById(id);
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const TYPES = {
    paper: "Papers",
    talk: "Talks",
    recording: "Recordings",
    slides: "Slides",
    standard: "Standards",
  };

  const fmtDate = (iso) =>
    new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  // ---- Events ----
  const events = [...D.events].sort((a, b) => b.date.localeCompare(a.date));
  const byId = Object.fromEntries(events.map((e) => [e.id, e]));
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = events.filter((e) => e.date >= today).sort((a, b) => a.date.localeCompare(b.date))[0];

  if (upcoming) {
    $("next-event").innerHTML = `
      <span class="badge">Upcoming</span>
      <a href="${esc(upcoming.url)}">${esc(upcoming.title)}</a>
      <span class="muted">${fmtDate(upcoming.date)} · ${esc(upcoming.venue)}</span>`;
  } else {
    $("next-event").remove();
  }

  const countFor = (id) => D.resources.filter((r) => r.event === id).length;

  $("event-list").innerHTML = events
    .map(
      (e) => `
    <article class="event">
      <div class="event-year">${e.date.slice(0, 4)}<span>${esc(e.short.replace(/\s*\d{4}$/, ""))}</span></div>
      <div class="event-body">
        <p class="event-meta">${esc(e.format)} · ${esc(e.venue)} · ${fmtDate(e.date)}</p>
        <h3><a href="${esc(e.url)}">${esc(e.title)}</a></h3>
        <p>${esc(e.summary)}</p>
        ${e.people ? `<p class="muted small">${esc(e.people)}</p>` : ""}
        <div class="event-actions">
          <a class="btn" href="${esc(e.url)}">Event page →</a>
          ${e.committee ? `<a class="btn ghost" href="${esc(e.committee)}">Committee</a>` : ""}
          ${countFor(e.id) ? `<button class="btn ghost" data-event="${esc(e.id)}">${countFor(e.id)} resource${countFor(e.id) === 1 ? "" : "s"}</button>` : ""}
        </div>
      </div>
    </article>`
    )
    .join("");

  // ---- Resources ----
  const resourceItem = (r) => `
      <li class="resource">
        <span class="tag tag-${esc(r.type)}">${esc(TYPES[r.type] ? TYPES[r.type].replace(/s$/, "") : r.type)}</span>
        <div>
          <div class="r-title">${r.url ? `<a href="${esc(r.url)}">${esc(r.title)}</a>` : esc(r.title)}${r.video ? ` <a class="watch" href="${esc(r.video)}">▶ Video</a>` : ""}</div>
          <div class="muted small">${[r.authors, byId[r.event] ? byId[r.event].short : ""].filter(Boolean).map(esc).join(" · ")}</div>
        </div>
      </li>`;

  const state = { type: "all", event: "all", q: "" };

  const usedTypes = Object.keys(TYPES).filter((t) => D.resources.some((r) => r.type === t));
  $("type-filters").innerHTML = ["all", ...usedTypes]
    .map((t) => `<button class="chip" data-type="${t}" aria-pressed="${t === "all"}">${t === "all" ? "All" : TYPES[t]}</button>`)
    .join("");

  $("event-filter").innerHTML =
    `<option value="all">All events</option>` +
    events.filter((e) => countFor(e.id)).map((e) => `<option value="${esc(e.id)}">${esc(e.short)}</option>`).join("") +
    (D.resources.some((r) => !r.event) ? `<option value="none">General</option>` : "");

  function render() {
    const q = state.q.toLowerCase();
    const items = D.resources.filter((r) => {
      if (state.type === "recording" && (r.type === "recording" || r.video)) {
        // talks with a video also count as recordings
      } else if (state.type !== "all" && r.type !== state.type) return false;
      if (state.event === "none" && r.event) return false;
      if (state.event !== "all" && state.event !== "none" && r.event !== state.event) return false;
      if (q && !`${r.title} ${r.authors || ""}`.toLowerCase().includes(q)) return false;
      return true;
    });
    $("resource-list").innerHTML = items.map(resourceItem).join("");
    $("empty").hidden = items.length > 0;
    document.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", c.dataset.type === state.type));
    $("event-filter").value = state.event;
  }

  $("type-filters").addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    state.type = b.dataset.type;
    render();
  });
  $("event-filter").addEventListener("change", (e) => {
    state.event = e.target.value;
    render();
  });
  $("search").addEventListener("input", (e) => {
    state.q = e.target.value;
    render();
  });
  $("event-list").addEventListener("click", (e) => {
    const b = e.target.closest("[data-event]");
    if (!b) return;
    state.event = b.dataset.event;
    state.type = "all";
    render();
    $("resources").scrollIntoView({ behavior: "smooth" });
  });

  render();

  // ---- Theme map ----
  const ICONS = {
    lifecycle: '<path d="M20 12a8 8 0 0 1-13.7 5.7M4 12a8 8 0 0 1 13.7-5.7"/><path d="M18 3v4h-4M6 21v-4h4"/>',
    interoperability: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    reproducibility: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>',
    emerging: '<path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
    terminology: '<path d="M4 5h16v11H9l-5 4z"/><path d="M9 9l3 4M12 9l-3 4M14 9v4h2"/>',
  };
  const themes = D.themes || [];
  const tagged = (list, id) => list.filter((x) => (x.themes || []).includes(id));
  const plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;
  let activeTheme = null;

  $("theme-grid").innerHTML = themes
    .map((t) => {
      const res = tagged(D.resources, t.id);
      const n = (f) => res.filter(f).length;
      const counts = [
        n((r) => r.type === "talk") && plural(n((r) => r.type === "talk"), "talk"),
        n((r) => r.type === "paper") && plural(n((r) => r.type === "paper"), "paper"),
        n((r) => r.video) && plural(n((r) => r.video), "video"),
      ].filter(Boolean);
      return `
      <button class="theme-card theme-${esc(t.id)}" role="tab" aria-selected="false" data-theme="${esc(t.id)}">
        <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">${ICONS[t.id] || ""}</svg>
        <span class="theme-title">${esc(t.title)}</span>
        <span class="theme-count">${counts.join(" · ")}</span>
      </button>`;
    })
    .join("");

  function showTheme(id, fromLink) {
    activeTheme = activeTheme === id && !fromLink ? null : id;
    document.querySelectorAll(".theme-card").forEach((c) => c.setAttribute("aria-selected", c.dataset.theme === activeTheme));
    const panel = $("theme-panel");
    const t = themes.find((x) => x.id === activeTheme);
    if (!t) {
      panel.hidden = true;
      return;
    }
    const res = tagged(D.resources, t.id);
    const evs = tagged(events, t.id);
    const bullets = (list) => `<ul>${list.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>`;
    panel.className = `theme-panel theme-${t.id}`;
    panel.innerHTML = `
      <h3>${esc(t.title)}</h3>
      <div class="theme-voices">
        <div><p class="voice-label">From panelists · <a href="ieeevr2026/">IEEE VR 2026 panel</a></p>${bullets(t.panelists || [])}</div>
        <div><p class="voice-label">From community</p>${bullets(t.community || [])}</div>
      </div>
      ${evs.length ? `<p class="voice-label">Events</p><p class="theme-events">${evs.map((e) => `<a href="${esc(e.url)}">${esc(e.short)} ${esc(e.format)}</a>`).join("")}</p>` : ""}
      <p class="voice-label">Talks, papers &amp; recordings</p>
      <ul class="resource-list">${res.map(resourceItem).join("")}</ul>`;
    panel.hidden = false;
    if (fromLink || window.innerWidth < 860) panel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  $("theme-grid").addEventListener("click", (e) => {
    const b = e.target.closest(".theme-card");
    if (b) showTheme(b.dataset.theme, false);
  });

  // ---- About / footer ----
  const L = D.links || {};
  $("about-links").innerHTML = [
    L.contact && `<a href="mailto:${esc(L.contact)}">${esc(L.contact)}</a>`,
  ]
    .filter(Boolean)
    .join(" · ");
  $("about-contact").hidden = !$("about-links").innerHTML;
  $("year").textContent = new Date().getFullYear();
})();
