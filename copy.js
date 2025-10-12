// copy.js
document.addEventListener("DOMContentLoaded", () => {
  const codeBlocks = document.querySelectorAll(".copyable");

  codeBlocks.forEach((codeEl) => {
    // ایجاد آیکون کپی کنار هر بلوک
    const copyBtn = document.createElement("button");
    copyBtn.textContent = "📋";
    copyBtn.className = "copy-btn";
    copyBtn.title = "Copy to clipboard";
    codeEl.parentElement.style.position = "relative";
    codeEl.parentElement.appendChild(copyBtn);

    copyBtn.addEventListener("click", async (e) => {
      e.stopPropagation();
      try {
        const text = codeEl.innerText.trim();
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = "✅";
        setTimeout(() => (copyBtn.textContent = "📋"), 1000);
      } catch (err) {
        console.error("خطا در کپی:", err);
        copyBtn.textContent = "❌";
        setTimeout(() => (copyBtn.textContent = "📋"), 1000);
      }
    });
  });
});
