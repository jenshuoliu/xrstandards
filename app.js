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
      if (state.type !== "all" && r.type !== state.type) return false;
      if (state.event === "none" && r.event) return false;
      if (state.event !== "all" && state.event !== "none" && r.event !== state.event) return false;
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
          <div class="muted small">${[r.authors, byId[r.event] ? byId[r.event].short : ""].filter(Boolean).map(esc).join(" · ")}</div>
        </div>
      </li>`
      )
      .join("");
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

  // ---- About / footer ----
  const L = D.links || {};
  $("about-links").innerHTML = [
    L.contact && `<a href="mailto:${esc(L.contact)}">${esc(L.contact)}</a>`,
  ]
    .filter(Boolean)
    .join(" · ");
  $("year").textContent = new Date().getFullYear();
})();
