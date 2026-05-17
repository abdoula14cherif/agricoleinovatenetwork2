// AIN — Google Translate intégration
// Ce script gère la traduction automatique de toute la page

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'fr',
    includedLanguages: 'en,fr,pt,ar,es,zh-CN,sw,ha,yo,ig,am',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false,
  }, 'google_translate_element');

  // Appliquer la langue sauvegardée automatiquement
  const savedLang = localStorage.getItem('ain_google_lang');
  if (savedLang && savedLang !== 'fr') {
    setTimeout(() => {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = savedLang;
        select.dispatchEvent(new Event('change'));
      }
    }, 800);
  }
}

// Sauvegarder le choix de langue quand l'utilisateur change
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.addEventListener('change', function() {
        localStorage.setItem('ain_google_lang', this.value);
      });
    }
  }, 1000);
});
