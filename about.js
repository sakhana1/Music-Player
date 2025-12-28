document.addEventListener("DOMContentLoaded", () => {
  const highlight = document.getElementById("aboutHighlight");
  const items = document.querySelectorAll(".about-item");

  if (!highlight || !items.length) return;

  const defaultText = highlight.textContent;

  items.forEach((item) => {
    const title = item.querySelector("h3")?.textContent || "";

    item.addEventListener("mouseenter", () => {
      highlight.textContent = `Highlight: ${title}`;
    });

    item.addEventListener("mouseleave", () => {
      highlight.textContent = defaultText;
    });
  });
});
