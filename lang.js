// AIN — Système Multi-Langue
// Configuré uniquement depuis Profil → s'applique sur toutes les pages

const AIN_LANGS = {
  fr: { name:'Français', flag:'🇫🇷', dir:'ltr',
    nav_home:'Accueil', nav_tasks:'Tâches', nav_reports:'Rapports', nav_account:'Mon Compte',
    dash_actions:'⚡ Actions rapides', dash_activity:'💳 Activité récente', dash_see_all:'Voir tout',
    dash_balance:'Solde', dash_earned:'Total gagné', dash_tasks_title:'🌾 Tâches du jour',
    action_recharge:'Recharge', action_retrait:'Retrait', action_fonds:'Fonds', action_taches:'Tâches',
    action_missions:'Missions', action_equipes:'Équipes', action_premium:'Premium', action_inviter:'Inviter',
    action_vip:'VIP', action_vip_premium:'VIP Premium', action_classement:'Classement', action_badges:'Badges',
    action_tournoi:'Tournoi', action_coffres:'Coffres', action_entreprise:'Notre Entreprise',
    action_historique:'Historique', action_calculateur:'Calculateur',
    loading:'Chargement...', btn_confirm:'Confirmer', btn_cancel:'Annuler',
  },
  en: { name:'English', flag:'🇬🇧', dir:'ltr',
    nav_home:'Home', nav_tasks:'Tasks', nav_reports:'Reports', nav_account:'My Account',
    dash_actions:'⚡ Quick Actions', dash_activity:'💳 Recent Activity', dash_see_all:'See all',
    dash_balance:'Balance', dash_earned:'Total earned', dash_tasks_title:'🌾 Today\'s Tasks',
    action_recharge:'Deposit', action_retrait:'Withdraw', action_fonds:'Funds', action_taches:'Tasks',
    action_missions:'Missions', action_equipes:'Teams', action_premium:'Premium', action_inviter:'Invite',
    action_vip:'VIP', action_vip_premium:'VIP Premium', action_classement:'Ranking', action_badges:'Badges',
    action_tournoi:'Tournament', action_coffres:'Chests', action_entreprise:'Our Company',
    action_historique:'History', action_calculateur:'Calculator',
    loading:'Loading...', btn_confirm:'Confirm', btn_cancel:'Cancel',
  },
  pt: { name:'Português', flag:'🇵🇹', dir:'ltr',
    nav_home:'Início', nav_tasks:'Tarefas', nav_reports:'Relatórios', nav_account:'Minha Conta',
    dash_actions:'⚡ Ações Rápidas', dash_activity:'💳 Atividade Recente', dash_see_all:'Ver tudo',
    dash_balance:'Saldo', dash_earned:'Total ganho', dash_tasks_title:'🌾 Tarefas do Dia',
    action_recharge:'Depósito', action_retrait:'Saque', action_fonds:'Fundos', action_taches:'Tarefas',
    action_missions:'Missões', action_equipes:'Equipes', action_premium:'Premium', action_inviter:'Convidar',
    action_vip:'VIP', action_vip_premium:'VIP Premium', action_classement:'Ranking', action_badges:'Emblemas',
    action_tournoi:'Torneio', action_coffres:'Baús', action_entreprise:'Nossa Empresa',
    action_historique:'Histórico', action_calculateur:'Calculadora',
    loading:'Carregando...', btn_confirm:'Confirmar', btn_cancel:'Cancelar',
  },
  ar: { name:'العربية', flag:'🇸🇦', dir:'rtl',
    nav_home:'الرئيسية', nav_tasks:'المهام', nav_reports:'التقارير', nav_account:'حسابي',
    dash_actions:'⚡ إجراءات سريعة', dash_activity:'💳 النشاط الأخير', dash_see_all:'عرض الكل',
    dash_balance:'الرصيد', dash_earned:'إجمالي المكاسب', dash_tasks_title:'🌾 مهام اليوم',
    action_recharge:'إيداع', action_retrait:'سحب', action_fonds:'صناديق', action_taches:'مهام',
    action_missions:'مهمات', action_equipes:'فرق', action_premium:'بريميوم', action_inviter:'دعوة',
    action_vip:'VIP', action_vip_premium:'VIP بريميوم', action_classement:'تصنيف', action_badges:'شارات',
    action_tournoi:'بطولة', action_coffres:'صناديق', action_entreprise:'شركتنا',
    action_historique:'السجل', action_calculateur:'الآلة الحاسبة',
    loading:'...جار التحميل', btn_confirm:'تأكيد', btn_cancel:'إلغاء',
  },
  es: { name:'Español', flag:'🇪🇸', dir:'ltr',
    nav_home:'Inicio', nav_tasks:'Tareas', nav_reports:'Reportes', nav_account:'Mi Cuenta',
    dash_actions:'⚡ Acciones Rápidas', dash_activity:'💳 Actividad Reciente', dash_see_all:'Ver todo',
    dash_balance:'Saldo', dash_earned:'Total ganado', dash_tasks_title:'🌾 Tareas del Día',
    action_recharge:'Depósito', action_retrait:'Retiro', action_fonds:'Fondos', action_taches:'Tareas',
    action_missions:'Misiones', action_equipes:'Equipos', action_premium:'Premium', action_inviter:'Invitar',
    action_vip:'VIP', action_vip_premium:'VIP Premium', action_classement:'Ranking', action_badges:'Insignias',
    action_tournoi:'Torneo', action_coffres:'Cofres', action_entreprise:'Nuestra Empresa',
    action_historique:'Historial', action_calculateur:'Calculadora',
    loading:'Cargando...', btn_confirm:'Confirmar', btn_cancel:'Cancelar',
  },
  zh: { name:'中文', flag:'🇨🇳', dir:'ltr',
    nav_home:'首页', nav_tasks:'任务', nav_reports:'报告', nav_account:'我的账户',
    dash_actions:'⚡ 快捷操作', dash_activity:'💳 最近活动', dash_see_all:'查看全部',
    dash_balance:'余额', dash_earned:'总收益', dash_tasks_title:'🌾 今日任务',
    action_recharge:'充值', action_retrait:'提现', action_fonds:'基金', action_taches:'任务',
    action_missions:'任务', action_equipes:'团队', action_premium:'高级版', action_inviter:'邀请',
    action_vip:'VIP', action_vip_premium:'VIP高级', action_classement:'排名', action_badges:'徽章',
    action_tournoi:'锦标赛', action_coffres:'宝箱', action_entreprise:'我们的公司',
    action_historique:'历史', action_calculateur:'计算器',
    loading:'加载中...', btn_confirm:'确认', btn_cancel:'取消',
  },
};

// Obtenir la langue sauvegardée (jamais auto depuis navigateur)
window.getCurrentLang = function() {
  const saved = localStorage.getItem('ain_lang');
  return (saved && AIN_LANGS[saved]) ? saved : 'fr';
};

// Appliquer la langue sur la page courante
window.applyLang = function(code) {
  const L = AIN_LANGS[code] || AIN_LANGS['fr'];
  localStorage.setItem('ain_lang', code);
  document.documentElement.dir = L.dir;
  document.documentElement.lang = code;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (L[key] !== undefined) el.textContent = L[key];
  });
};

// Modal de sélection langue (appelé depuis Profil)
window.showLangPicker = function() {
  const current = window.getCurrentLang();
  const modal = document.createElement('div');
  modal.setAttribute('data-lang-modal', '');
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(13,27,75,0.55);z-index:9999;display:flex;align-items:flex-end;justify-content:center;';
  modal.onclick = e => { if(e.target === modal) modal.remove(); };

  let inner = `<div style="background:var(--card,#fff);border-radius:24px 24px 0 0;width:100%;max-width:430px;padding:20px 16px 40px;max-height:80vh;overflow-y:auto;">
    <div style="width:40px;height:4px;background:#C7D2FE;border-radius:50px;margin:0 auto 16px;"></div>
    <div style="font-size:17px;font-weight:900;color:var(--text,#0D1B4B);margin-bottom:16px;text-align:center;">🌍 Choisir la langue</div>`;

  Object.entries(AIN_LANGS).forEach(([code, L]) => {
    const on = code === current;
    inner += `<div style="display:flex;align-items:center;gap:12px;padding:13px 16px;border-radius:13px;margin-bottom:8px;cursor:pointer;background:${on?'#EEF2FF':'#F8FAFF'};border:1.5px solid ${on?'#1a237e':'#C7D2FE'};"
      onclick="window.applyLang('${code}');document.querySelector('[data-lang-modal]').remove();window.updatePrefDisplay&&window.updatePrefDisplay();">
      <span style="font-size:24px;">${L.flag}</span>
      <div style="flex:1;font-size:14px;font-weight:900;color:#0D1B4B;">${L.name}</div>
      ${on?'<span style="color:#1a237e;font-size:18px;">✓</span>':''}
    </div>`;
  });

  inner += `</div>`;
  modal.innerHTML = inner;
  document.body.appendChild(modal);
};

// Appliquer au chargement si déjà configuré
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('ain_lang');
  if (saved && AIN_LANGS[saved]) window.applyLang(saved);
});
