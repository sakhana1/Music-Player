document.addEventListener("DOMContentLoaded", () => {
  // Mood chips text change
  const moodChips = document.querySelectorAll(".mood-chip");
  const moodText = document.getElementById("moodText");

  const moodDescriptions = {
    Chill: "CastleTunes will suggest soft lo-fi and warm beats.",
    Focus: "CastleTunes will suggest long instrumental and study mixes.",
    Happy: "CastleTunes will suggest bright pop and upbeat tracks.",
    Sleep: "CastleTunes will suggest slow piano and calm night sounds."
  }; // typical mood categories in music apps [web:131][web:133]

  moodChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      moodChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const mood = chip.dataset.mood;
      moodText.textContent = moodDescriptions[mood] || "";
    });
  });

  // Edit name (simple prompt)
  const editBtn = document.getElementById("editNameBtn");
  const nameEl = document.querySelector(".profile-text h1");

  if (editBtn && nameEl) {
    editBtn.addEventListener("click", () => {
      const current = nameEl.textContent.trim();
      const next = prompt("Enter your display name:", current);
      if (next && next.trim().length > 0) {
        nameEl.textContent = next.trim();
      }
    });
  }

  // Go premium button -> premium page
  const goPremiumBtn = document.getElementById("goPremiumBtn");
  if (goPremiumBtn) {
    goPremiumBtn.addEventListener("click", () => {
      window.location.href = "premium.html";
    });
  }
});
