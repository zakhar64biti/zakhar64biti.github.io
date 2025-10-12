<script>
  document.querySelectorAll('.copyable').forEach(el => {
    el.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(el.textContent.trim());
        el.classList.add('copied');
        setTimeout(() => el.classList.remove('copied'), 1000);
      } catch (err) {
        console.error('خطا در کپی:', err);
      }
    });
  });
</script>