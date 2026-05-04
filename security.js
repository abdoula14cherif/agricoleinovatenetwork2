// ============================================================
// AIN — SÉCURITÉ CÔTÉ CLIENT
// Inclure dans toutes les pages : <script src="security.js"></script>
// ============================================================

// ── 1. DÉSACTIVER LES OUTILS DE DÉVELOPPEMENT ────────────────
// Détection console ouverte
(function(){
  const threshold=160;
  function check(){
    if(window.outerWidth-window.innerWidth>threshold||window.outerHeight-window.innerHeight>threshold){
      // Console probablement ouverte — on peut logger mais pas bloquer (trop agressif)
      console.clear();
      console.log('%c⛔ AIN Security', 'color:red;font-size:20px;font-weight:bold;');
      console.log('%cCette interface est réservée aux développeurs autorisés.', 'color:red;font-size:14px;');
    }
  }
  setInterval(check, 1000);
})();

// ── 2. DÉSACTIVER CLIC DROIT ─────────────────────────────────
document.addEventListener('contextmenu', e => {
  e.preventDefault();
  return false;
});

// ── 3. DÉSACTIVER F12, Ctrl+U, Ctrl+Shift+I ─────────────────
document.addEventListener('keydown', function(e){
  // F12
  if(e.key==='F12'){e.preventDefault();return false;}
  // Ctrl+U (voir source)
  if(e.ctrlKey && e.key==='u'){e.preventDefault();return false;}
  // Ctrl+Shift+I (devtools)
  if(e.ctrlKey && e.shiftKey && e.key==='I'){e.preventDefault();return false;}
  // Ctrl+Shift+J (console)
  if(e.ctrlKey && e.shiftKey && e.key==='J'){e.preventDefault();return false;}
  // Ctrl+Shift+C (inspecteur)
  if(e.ctrlKey && e.shiftKey && e.key==='C'){e.preventDefault();return false;}
});

// ── 4. PROTÉGER LE COPIER-COLLER DU CODE ─────────────────────
document.addEventListener('copy', e => {
  // Permettre de copier texte normal mais pas de sélectionner des blocs entiers
  const sel = window.getSelection()?.toString() || '';
  if(sel.length > 500){
    e.clipboardData.setData('text/plain', 'Contenu protégé — AIN');
    e.preventDefault();
  }
});

// ── 5. PROTECTION XSS — Nettoyer les inputs ──────────────────
window.sanitize = function(str){
  if(!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// ── 6. VÉRIFIER SESSION EXPIRÉE ──────────────────────────────
window.checkSession = async function(sb, redirectUrl='index.html'){
  try{
    const {data:{session}}=await sb.auth.getSession();
    if(!session){
      window.location.href=redirectUrl;
      return null;
    }
    // Vérifier si le token expire bientôt (moins de 5 min)
    const expiresAt=session.expires_at*1000;
    if(Date.now()>expiresAt-300000){
      // Renouveler le token
      const {data}=await sb.auth.refreshSession();
      return data.session;
    }
    return session;
  }catch(e){
    window.location.href=redirectUrl;
    return null;
  }
};

// ── 7. MASQUER LA CLÉ SUPABASE dans les erreurs ───────────────
window.addEventListener('error', function(e){
  // Empêcher d'afficher les erreurs avec la clé dans la console
  if(e.message && e.message.includes('eyJ')){
    e.preventDefault();
  }
});

// ── 8. PROTECTION IFRAME ─────────────────────────────────────
if(window.top !== window.self){
  // Empêcher l'embedding dans des iframes (clickjacking)
  window.top.location.href = window.self.location.href;
}

console.log('%c🛡️ AIN — Système sécurisé', 'color:#10B981;font-weight:bold;');
