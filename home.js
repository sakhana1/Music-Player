document.addEventListener("DOMContentLoaded", () => {
  const miniPlay = document.querySelector(".mini-play");
  if (!miniPlay) return;
  const icon = miniPlay.querySelector("i");
  let playing = false;

  miniPlay.addEventListener("click", () => {
    playing = !playing;
    icon.className = playing ? "fa-solid fa-pause" : "fa-solid fa-play";
  });
});
