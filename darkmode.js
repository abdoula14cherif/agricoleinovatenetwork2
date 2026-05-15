// ============================================================
// AIN — Mode Sombre
// Inclure dans toutes les pages : <script src="darkmode.js"></script>
// ============================================================

(function() {
  const KEY = 'ain_dark_mode';

  // ── Appliquer le thème ───────────────────────────────────────
  function applyTheme(dark) {
    if (dark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try { localStorage.setItem(KEY, dark ? '1' : '0'); } catch(e) {}
  }

  // ── Détecter préférence ──────────────────────────────────────
  function isDark() {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved !== null) return saved === '1';
    } catch(e) {}
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // ── Toggle ───────────────────────────────────────────────────
  window.toggleDarkMode = function() {
    const dark = !isDark();
    applyTheme(dark);
    updateToggleBtn();
  };

  function updateToggleBtn() {
    const btn = document.getElementById('dark-toggle');
    if (btn) btn.textContent = isDark() ? '☀️' : '🌙';
  }

  // ── Init immédiat (avant render) ─────────────────────────────
  applyTheme(isDark());

  document.addEventListener('DOMContentLoaded', () => {
    updateToggleBtn();
    // Écouter changement système
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const saved = localStorage.getItem(KEY);
        if (saved === null) applyTheme(e.matches);
      });
    }
  });
})();
