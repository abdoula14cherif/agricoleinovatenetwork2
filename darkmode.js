// AIN — Mode Sombre
// Appliqué sur toutes les pages via localStorage
// Configuré uniquement depuis Profil

(function() {
  const KEY = 'ain_dark_mode';

  // Appliquer immédiatement AVANT le rendu pour éviter le flash
  if (localStorage.getItem(KEY) === '1') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  window.isDarkMode = function() {
    return localStorage.getItem(KEY) === '1';
  };

  window.setDarkMode = function(dark) {
    localStorage.setItem(KEY, dark ? '1' : '0');
    if (dark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    // Mettre à jour le switch dans Profil si présent
    const sw = document.getElementById('dark-switch');
    const kn = document.getElementById('dark-knob');
    const sub = document.getElementById('pref-dark-sub');
    const ico = document.getElementById('dark-ico');
    if (sw) sw.style.background = dark ? '#1a237e' : '#E5E7EB';
    if (kn) kn.style.left = dark ? '20px' : '2px';
    if (sub) sub.textContent = dark ? 'Mode sombre' : 'Mode clair';
    if (ico) ico.textContent = dark ? '🌙' : '☀️';
  };

  window.toggleDarkMode = function() {
    window.setDarkMode(!window.isDarkMode());
  };
})();