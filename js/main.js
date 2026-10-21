(function () {
  const grid = document.querySelector(".grid");
  const filtersEl = document.querySelector(".filters");
  const lb = document.querySelector(".lightbox");
  const lbImg = lb.querySelector("img");
  const lbCap = lb.querySelector("figcaption");
  let visible = PHOTOS.slice();
  let current = 0;

  // Filters
  const cats = ["All", ...new Set(PHOTOS.map(p => p.category))];
  cats.forEach((c, i) => {
    const b = document.createElement("button");
    b.textContent = c;
    b.className = "chip";
    b.setAttribute("aria-pressed", i === 0 ? "true" : "false");
    b.addEventListener("click", () => {
      filtersEl.querySelectorAll(".chip").forEach(x => x.setAttribute("aria-pressed", "false"));
      b.setAttribute("aria-pressed", "true");
      visible = c === "All" ? PHOTOS.slice() : PHOTOS.filter(p => p.category === c);
      render();
    });
    filtersEl.appendChild(b);
  });

  // Grid
  function render() {
    grid.innerHTML = "";
    visible.forEach((p, i) => {
      const item = document.createElement("button");
      item.className = "tile";
      item.setAttribute("aria-label", "Open " + p.title);
      item.innerHTML =
        '<img src="' + p.src + '" alt="' + (p.alt || p.title) + '" loading="lazy">' +
        '<span class="tile-meta"><span>' + p.title + "</span><small>" + p.category + "</small></span>";
      item.addEventListener("click", () => open(i));
      grid.appendChild(item);
    });
  }

  // Lightbox
  function show(i) {
    current = (i + visible.length) % visible.length;
    const p = visible[current];
    lbImg.src = p.src;
    lbImg.alt = p.alt || p.title;
    lbCap.textContent = p.title + " · " + p.category;
  }
  function open(i) { show(i); lb.showModal(); }
  lb.querySelector(".lb-close").addEventListener("click", () => lb.close());
  lb.querySelector(".lb-prev").addEventListener("click", () => show(current - 1));
  lb.querySelector(".lb-next").addEventListener("click", () => show(current + 1));
  lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
  document.addEventListener("keydown", e => {
    if (!lb.open) return;
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
  let touchX = null;
  lb.addEventListener("touchstart", e => { touchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) show(current + (dx < 0 ? 1 : -1));
    touchX = null;
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  render();
})();
