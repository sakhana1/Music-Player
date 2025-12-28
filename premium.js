document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".plan.featured .btn-primary");
  if (!btn) return;
  btn.addEventListener("click", () => {
    alert("This is a demo. No real payment, just pretty UI!");
  });
});
