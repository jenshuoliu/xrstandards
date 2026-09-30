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
  const events = [...D.events].sort((a, b) => b.year - a.year);
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

  const countFor = (year) => D.resources.filter((r) => r.year === year).length;

  $("event-list").innerHTML = events
    .map(
      (e) => `
    <article class="event">
      <div class="event-year">${e.year}</div>
      <div class="event-body">
        <p class="event-meta">${esc(e.format)} · ${esc(e.venue)} · ${fmtDate(e.date)}</p>
        <h3><a href="${esc(e.url)}">${esc(e.title)}</a></h3>
        <p>${esc(e.summary)}</p>
        ${e.people ? `<p class="muted small">Organizers: ${esc(e.people)}</p>` : ""}
        <div class="event-actions">
          <a class="btn" href="${esc(e.url)}">Event page →</a>
          ${countFor(e.year) ? `<button class="btn ghost" data-year="${e.year}">${countFor(e.year)} resources</button>` : ""}
        </div>
      </div>
    </article>`
    )
    .join("");

  // ---- Resources ----
  const state = { type: "all", year: "all", q: "" };

  const usedTypes = Object.keys(TYPES).filter((t) => D.resources.some((r) => r.type === t));
  $("type-filters").innerHTML = ["all", ...usedTypes]
    .map((t) => `<button class="chip" data-type="${t}" aria-pressed="${t === "all"}">${t === "all" ? "All" : TYPES[t]}</button>`)
    .join("");

  const years = [...new Set(D.resources.map((r) => r.year).filter(Boolean))].sort((a, b) => b - a);
  $("year-filter").innerHTML =
    `<option value="all">All years</option>` +
    years.map((y) => `<option value="${y}">${y}</option>`).join("") +
    `<option value="none">General (no year)</option>`;

  function render() {
    const q = state.q.toLowerCase();
    const items = D.resources.filter((r) => {
      if (state.type !== "all" && r.type !== state.type) return false;
      if (state.year === "none" && r.year) return false;
      if (state.year !== "all" && state.year !== "none" && String(r.year) !== state.year) return false;
      if (q && !`${r.title} ${r.authors || ""}`.toLowerCase().includes(q)) return false;
      return true;
    });
    $("resource-list").innerHTML = items
      .map(
        (r) => `
      <li class="resource">
        <span class="tag tag-${esc(r.type)}">${esc(TYPES[r.type] ? TYPES[r.type].replace(/s$/, "") : r.type)}</span>
        <div>
          <div class="r-title">${r.url ? `<a href="${esc(r.url)}">${esc(r.title)}</a>` : esc(r.title)}</div>
          <div class="muted small">${[r.authors, r.year ? `XRStand ${r.year}` : ""].filter(Boolean).map(esc).join(" · ")}</div>
        </div>
      </li>`
      )
      .join("");
    $("empty").hidden = items.length > 0;
    document.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", c.dataset.type === state.type));
    $("year-filter").value = state.year;
  }

  $("type-filters").addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    state.type = b.dataset.type;
    render();
  });
  $("year-filter").addEventListener("change", (e) => {
    state.year = e.target.value;
    render();
  });
  $("search").addEventListener("input", (e) => {
    state.q = e.target.value;
    render();
  });
  $("event-list").addEventListener("click", (e) => {
    const b = e.target.closest("[data-year]");
    if (!b) return;
    state.year = b.dataset.year;
    state.type = "all";
    render();
    $("resources").scrollIntoView({ behavior: "smooth" });
  });

  render();

  // ---- About / footer ----
  const L = D.links || {};
  $("about-links").innerHTML = [
    L.committee && `<a href="${esc(L.committee)}">ISMAR Standardization Committee</a>`,
    L.contact && `<a href="mailto:${esc(L.contact)}">${esc(L.contact)}</a>`,
  ]
    .filter(Boolean)
    .join(" · ");
  $("year").textContent = new Date().getFullYear();
})();
