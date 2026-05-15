// ============================================================
// AIN — Mode Sombre
// S'applique sur toutes les pages via localStorage
// L'utilisateur configure depuis Profil uniquement
// ============================================================

(function() {
  const KEY = 'ain_dark_mode';

  function isDark() {
    try { return localStorage.getItem(KEY) === '1'; } catch(e) { return false; }
  }

  function applyTheme(dark) {
    if (dark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try { localStorage.setItem(KEY, dark ? '1' : '0'); } catch(e) {}
  }

  // Toggle appelé depuis Profil
  window.toggleDarkMode = function() {
    applyTheme(!isDark());
  };

  // Applique immédiatement si l'utilisateur a déjà choisi le mode sombre
  const saved = localStorage.getItem(KEY);
  if (saved === '1') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  // Si rien de sauvegardé → mode clair par défaut, jamais automatique
})();
