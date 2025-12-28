document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.querySelector(".play-btn");
  const icon = playBtn.querySelector("i");
  let playing = false;

  playBtn.addEventListener("click", () => {
    playing = !playing;
    icon.className = playing ? "fa-solid fa-pause" : "fa-solid fa-play";
  });
});
