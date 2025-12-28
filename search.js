document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const tiles = document.querySelectorAll(".tile");

  input.addEventListener("input", () => {
    const q = input.value.toLowerCase().trim();
    tiles.forEach((tile) => {
      const name = tile.dataset.name || "";
      tile.style.display = name.includes(q) ? "block" : "none";
    });
  });
});
