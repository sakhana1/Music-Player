const tracks = [
  { title: "Soft Light", artist: "Castle Echo", src: "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav", duration: "0:30" },
  { title: "Pink Sky", artist: "Lo-fi Hall", src: "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars3.wav", duration: "0:21" },
  { title: "Golden Hallway", artist: "Soft Keys", src: "https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch60.wav", duration: "0:30" },
  { title: "Castle Steps", artist: "Dream Waves", src: "https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther60.wav", duration: "0:30" },
  { title: "Cloud Garden", artist: "Night Bloom", src: "https://www2.cs.uic.edu/~i101/SoundFiles/Front_Center.wav", duration: "0:10" },
  { title: "Moon Window", artist: "Soft Echoes", src: "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav", duration: "0:32" },
  { title: "Quiet Towers", artist: "Golden Dust", src: "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav", duration: "0:30" },
  { title: "Velvet Night", artist: "Piano Glow", src: "https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav", duration: "0:08" },
  { title: "Calm Courtyard", artist: "Soft Breeze", src: "https://www2.cs.uic.edu/~i101/SoundFiles/harp.wav", duration: "0:08" },
  { title: "Gold Morning", artist: "Sunrise Lo-fi", src: "https://www2.cs.uic.edu/~i101/SoundFiles/violoncello.wav", duration: "0:08" }
]; // public demo wav files often used in tutorials [web:32][web:45]

const trackList = document.getElementById("trackList");
const audio = document.getElementById("audio");
const npTitle = document.getElementById("npTitle");
const npArtist = document.getElementById("npArtist");
const playBtn = document.getElementById("playBtn");
const mainPlay = document.getElementById("mainPlay");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressArea = document.getElementById("progressArea");
const progressFill = document.getElementById("progressFill");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const volumeSlider = document.getElementById("volume");

let currentIndex = 0;
let isPlaying = false;

function buildList() {
  trackList.innerHTML = "";
  tracks.forEach((t, i) => {
    const row = document.createElement("div");
    row.className = "track-row";
    row.dataset.index = i;
    row.innerHTML = `
      <span>${i + 1}</span>
      <span>${t.title}</span>
      <span>${t.artist}</span>
      <span>${t.duration}</span>
    `;
    row.addEventListener("click", () => {
      loadTrack(i);
      playTrack();
    });
    trackList.appendChild(row);
  });
}

function loadTrack(i) {
  currentIndex = i;
  const t = tracks[i];
  audio.src = t.src;
  npTitle.textContent = t.title;
  npArtist.textContent = t.artist;
  highlightRow();
}

function highlightRow() {
  document.querySelectorAll(".track-row").forEach((r) => {
    r.classList.toggle("active", parseInt(r.dataset.index) === currentIndex);
  });
}

function playTrack() {
  audio.play();
  isPlaying = true;
  playBtn.querySelector("i").className = "fa-solid fa-pause";
  mainPlay.querySelector("i").className = "fa-solid fa-pause";
}

function pauseTrack() {
  audio.pause();
  isPlaying = false;
  playBtn.querySelector("i").className = "fa-solid fa-play";
  mainPlay.querySelector("i").className = "fa-solid fa-play";
}

playBtn.addEventListener("click", () => {
  if (!audio.src) loadTrack(currentIndex);
  isPlaying ? pauseTrack() : playTrack();
});
mainPlay.addEventListener("click", () => {
  if (!audio.src) loadTrack(currentIndex);
  isPlaying ? pauseTrack() : playTrack();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
  loadTrack(currentIndex);
  playTrack();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % tracks.length;
  loadTrack(currentIndex);
  playTrack();
});

audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  const percent = audio.currentTime / audio.duration;
  progressFill.style.width = `${percent * 100}%`;
  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationEl.textContent = formatTime(audio.duration);
});

progressArea.addEventListener("click", (e) => {
  const rect = progressArea.getBoundingClientRect();
  const offset = e.clientX - rect.left;
  const percent = offset / rect.width;
  if (audio.duration) {
    audio.currentTime = percent * audio.duration;
  }
});

volumeSlider.addEventListener("input", () => {
  audio.volume = parseFloat(volumeSlider.value);
});

audio.addEventListener("ended", () => {
  currentIndex = (currentIndex + 1) % tracks.length;
  loadTrack(currentIndex);
  playTrack();
});

function formatTime(sec) {
  if (!isFinite(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

buildList();
loadTrack(currentIndex);
audio.volume = parseFloat(volumeSlider.value);
