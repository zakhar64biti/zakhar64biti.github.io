// copy.js
document.addEventListener("DOMContentLoaded", () => {
  const copyables = document.querySelectorAll(".copyable");

  copyables.forEach((el) => {
    el.style.cursor = "pointer";

    el.addEventListener("click", async () => {
      try {
        const text = el.innerText.trim();
        await navigator.clipboard.writeText(text);

        // افکت ظریف بازخورد
        el.classList.add("copied");
        setTimeout(() => el.classList.remove("copied"), 800);
      } catch (err) {
        console.error("❌ خطا در کپی:", err);
      }
    });
  });
});
