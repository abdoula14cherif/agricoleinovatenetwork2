// ============================================================
// AIN — Système Multi-Langue
// Langues : FR, EN, PT, AR, ES, ZH
// ============================================================

const AIN_LANGS = {

  fr: {
    name: 'Français', flag: '🇫🇷', dir: 'ltr',
    // Dashboard
    dash_tasks_title: '🌾 Tâches du jour',
    dash_tasks_done: 'complétées',
    dash_tasks_rem: 'restante(s)',
    dash_tasks_all_done: '✅ Toutes complétées !',
    dash_tasks_gain: 'gains potentiels restants',
    dash_tasks_start: 'Commencer →',
    dash_actions: '⚡ Actions rapides',
    dash_activity: '💳 Activité récente',
    dash_see_all: 'Voir tout',
    dash_fonds: '📈 Investissements actifs',
    dash_no_tx: 'Aucune transaction',
    dash_balance: 'Solde',
    dash_earned: 'Total gagné',
    dash_today: 'Aujourd\'hui',
    // Nav
    nav_home: 'Accueil',
    nav_tasks: 'Tâches',
    nav_reports: 'Rapports',
    nav_account: 'Mon Compte',
    // Actions
    action_recharge: 'Recharge',
    action_retrait: 'Retrait',
    action_fonds: 'Fonds',
    action_taches: 'Tâches',
    action_missions: 'Missions',
    action_equipes: 'Équipes',
    action_premium: 'Premium',
    action_inviter: 'Inviter',
    action_vip: 'VIP',
    action_vip_premium: 'VIP Premium',
    action_classement: 'Classement',
    action_badges: 'Badges',
    action_tournoi: 'Tournoi',
    action_coffres: 'Coffres',
    action_entreprise: 'Notre Entreprise',
    // Commun
    loading: 'Chargement...',
    error_network: 'Erreur de connexion',
    btn_confirm: 'Confirmer',
    btn_cancel: 'Annuler',
    // VIP
    vip_none: 'Aucun',
  },

  en: {
    name: 'English', flag: '🇬🇧', dir: 'ltr',
    dash_tasks_title: '🌾 Today\'s Tasks',
    dash_tasks_done: 'completed',
    dash_tasks_rem: 'remaining',
    dash_tasks_all_done: '✅ All completed!',
    dash_tasks_gain: 'remaining potential earnings',
    dash_tasks_start: 'Start →',
    dash_actions: '⚡ Quick Actions',
    dash_activity: '💳 Recent Activity',
    dash_see_all: 'See all',
    dash_fonds: '📈 Active Investments',
    dash_no_tx: 'No transactions',
    dash_balance: 'Balance',
    dash_earned: 'Total earned',
    dash_today: 'Today',
    nav_home: 'Home',
    nav_tasks: 'Tasks',
    nav_reports: 'Reports',
    nav_account: 'My Account',
    action_recharge: 'Deposit',
    action_retrait: 'Withdraw',
    action_fonds: 'Funds',
    action_taches: 'Tasks',
    action_missions: 'Missions',
    action_equipes: 'Teams',
    action_premium: 'Premium',
    action_inviter: 'Invite',
    action_vip: 'VIP',
    action_vip_premium: 'VIP Premium',
    action_classement: 'Ranking',
    action_badges: 'Badges',
    action_tournoi: 'Tournament',
    action_coffres: 'Chests',
    action_entreprise: 'Our Company',
    loading: 'Loading...',
    error_network: 'Connection error',
    btn_confirm: 'Confirm',
    btn_cancel: 'Cancel',
    vip_none: 'None',
  },

  pt: {
    name: 'Português', flag: '🇵🇹', dir: 'ltr',
    dash_tasks_title: '🌾 Tarefas do Dia',
    dash_tasks_done: 'concluídas',
    dash_tasks_rem: 'restante(s)',
    dash_tasks_all_done: '✅ Todas concluídas!',
    dash_tasks_gain: 'ganhos potenciais restantes',
    dash_tasks_start: 'Começar →',
    dash_actions: '⚡ Ações Rápidas',
    dash_activity: '💳 Atividade Recente',
    dash_see_all: 'Ver tudo',
    dash_fonds: '📈 Investimentos Ativos',
    dash_no_tx: 'Sem transações',
    dash_balance: 'Saldo',
    dash_earned: 'Total ganho',
    dash_today: 'Hoje',
    nav_home: 'Início',
    nav_tasks: 'Tarefas',
    nav_reports: 'Relatórios',
    nav_account: 'Minha Conta',
    action_recharge: 'Depósito',
    action_retrait: 'Saque',
    action_fonds: 'Fundos',
    action_taches: 'Tarefas',
    action_missions: 'Missões',
    action_equipes: 'Equipes',
    action_premium: 'Premium',
    action_inviter: 'Convidar',
    action_vip: 'VIP',
    action_vip_premium: 'VIP Premium',
    action_classement: 'Ranking',
    action_badges: 'Emblemas',
    action_tournoi: 'Torneio',
    action_coffres: 'Baús',
    action_entreprise: 'Nossa Empresa',
    loading: 'Carregando...',
    error_network: 'Erro de conexão',
    btn_confirm: 'Confirmar',
    btn_cancel: 'Cancelar',
    vip_none: 'Nenhum',
  },

  ar: {
    name: 'العربية', flag: '🇸🇦', dir: 'rtl',
    dash_tasks_title: '🌾 مهام اليوم',
    dash_tasks_done: 'مكتملة',
    dash_tasks_rem: 'متبقية',
    dash_tasks_all_done: '✅ جميع المهام مكتملة!',
    dash_tasks_gain: 'الأرباح المحتملة المتبقية',
    dash_tasks_start: 'ابدأ ←',
    dash_actions: '⚡ إجراءات سريعة',
    dash_activity: '💳 النشاط الأخير',
    dash_see_all: 'عرض الكل',
    dash_fonds: '📈 الاستثمارات النشطة',
    dash_no_tx: 'لا توجد معاملات',
    dash_balance: 'الرصيد',
    dash_earned: 'إجمالي المكاسب',
    dash_today: 'اليوم',
    nav_home: 'الرئيسية',
    nav_tasks: 'المهام',
    nav_reports: 'التقارير',
    nav_account: 'حسابي',
    action_recharge: 'إيداع',
    action_retrait: 'سحب',
    action_fonds: 'صناديق',
    action_taches: 'مهام',
    action_missions: 'مهمات',
    action_equipes: 'فرق',
    action_premium: 'بريميوم',
    action_inviter: 'دعوة',
    action_vip: 'VIP',
    action_vip_premium: 'VIP بريميوم',
    action_classement: 'تصنيف',
    action_badges: 'شارات',
    action_tournoi: 'بطولة',
    action_coffres: 'صناديق',
    action_entreprise: 'شركتنا',
    loading: '...جار التحميل',
    error_network: 'خطأ في الاتصال',
    btn_confirm: 'تأكيد',
    btn_cancel: 'إلغاء',
    vip_none: 'لا شيء',
  },

  es: {
    name: 'Español', flag: '🇪🇸', dir: 'ltr',
    dash_tasks_title: '🌾 Tareas del Día',
    dash_tasks_done: 'completadas',
    dash_tasks_rem: 'restante(s)',
    dash_tasks_all_done: '✅ ¡Todas completadas!',
    dash_tasks_gain: 'ganancias potenciales restantes',
    dash_tasks_start: 'Comenzar →',
    dash_actions: '⚡ Acciones Rápidas',
    dash_activity: '💳 Actividad Reciente',
    dash_see_all: 'Ver todo',
    dash_fonds: '📈 Inversiones Activas',
    dash_no_tx: 'Sin transacciones',
    dash_balance: 'Saldo',
    dash_earned: 'Total ganado',
    dash_today: 'Hoy',
    nav_home: 'Inicio',
    nav_tasks: 'Tareas',
    nav_reports: 'Reportes',
    nav_account: 'Mi Cuenta',
    action_recharge: 'Depósito',
    action_retrait: 'Retiro',
    action_fonds: 'Fondos',
    action_taches: 'Tareas',
    action_missions: 'Misiones',
    action_equipes: 'Equipos',
    action_premium: 'Premium',
    action_inviter: 'Invitar',
    action_vip: 'VIP',
    action_vip_premium: 'VIP Premium',
    action_classement: 'Ranking',
    action_badges: 'Insignias',
    action_tournoi: 'Torneo',
    action_coffres: 'Cofres',
    action_entreprise: 'Nuestra Empresa',
    loading: 'Cargando...',
    error_network: 'Error de conexión',
    btn_confirm: 'Confirmar',
    btn_cancel: 'Cancelar',
    vip_none: 'Ninguno',
  },

  zh: {
    name: '中文', flag: '🇨🇳', dir: 'ltr',
    dash_tasks_title: '🌾 今日任务',
    dash_tasks_done: '已完成',
    dash_tasks_rem: '剩余',
    dash_tasks_all_done: '✅ 全部完成！',
    dash_tasks_gain: '剩余潜在收益',
    dash_tasks_start: '开始 →',
    dash_actions: '⚡ 快捷操作',
    dash_activity: '💳 最近活动',
    dash_see_all: '查看全部',
    dash_fonds: '📈 活跃投资',
    dash_no_tx: '暂无交易',
    dash_balance: '余额',
    dash_earned: '总收益',
    dash_today: '今天',
    nav_home: '首页',
    nav_tasks: '任务',
    nav_reports: '报告',
    nav_account: '我的账户',
    action_recharge: '充值',
    action_retrait: '提现',
    action_fonds: '基金',
    action_taches: '任务',
    action_missions: '任务',
    action_equipes: '团队',
    action_premium: '高级版',
    action_inviter: '邀请',
    action_vip: 'VIP',
    action_vip_premium: 'VIP高级',
    action_classement: '排名',
    action_badges: '徽章',
    action_tournoi: '锦标赛',
    action_coffres: '宝箱',
    action_entreprise: '我们的公司',
    loading: '加载中...',
    error_network: '连接错误',
    btn_confirm: '确认',
    btn_cancel: '取消',
    vip_none: '无',
  }
};

// ── Détection automatique de la langue ───────────────────────
function detectLang() {
  // 1. Langue sauvegardée
  try { const saved = localStorage.getItem('ain_lang'); if (saved && AIN_LANGS[saved]) return saved; } catch(e) {}
  // 2. Langue du navigateur
  const bl = (navigator.language || navigator.userLanguage || 'fr').slice(0, 2).toLowerCase();
  const map = { fr:'fr', en:'en', pt:'pt', ar:'ar', es:'es', zh:'zh', cn:'zh' };
  return map[bl] || 'fr';
}

// ── Appliquer la langue ───────────────────────────────────────
function applyLang(code) {
  const L = AIN_LANGS[code] || AIN_LANGS['fr'];
  try { localStorage.setItem('ain_lang', code); } catch(e) {}
  // Direction RTL/LTR
  document.documentElement.dir = L.dir;
  document.documentElement.lang = code;
  // Appliquer tous les éléments data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (L[key]) el.textContent = L[key];
  });
  // Appliquer placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (L[key]) el.placeholder = L[key];
  });
  return L;
}

// ── Obtenir traduction ────────────────────────────────────────
function t(key) {
  const code = detectLang();
  const L = AIN_LANGS[code] || AIN_LANGS['fr'];
  return L[key] || AIN_LANGS['fr'][key] || key;
}

// ── Sélecteur de langue (modal) ───────────────────────────────
function showLangPicker() {
  const current = detectLang();
  let html = `<div style="position:fixed;inset:0;background:rgba(13,27,75,0.55);z-index:9999;display:flex;align-items:flex-end;justify-content:center;" onclick="if(event.target===this)this.remove()">
    <div style="background:#fff;border-radius:24px 24px 0 0;width:100%;max-width:430px;padding:20px 16px 40px;">
      <div style="width:40px;height:4px;background:#C7D2FE;border-radius:50px;margin:0 auto 16px;"></div>
      <div style="font-size:17px;font-weight:900;color:#0D1B4B;margin-bottom:16px;text-align:center;">🌍 Choisir la langue</div>`;
  Object.entries(AIN_LANGS).forEach(([code, L]) => {
    const isActive = code === current;
    html += `<div onclick="applyLang('${code}');document.querySelector('[data-lang-modal]').remove();location.reload();" style="display:flex;align-items:center;gap:12px;padding:13px 16px;border-radius:13px;margin-bottom:8px;cursor:pointer;background:${isActive?'#EEF2FF':'#F8FAFF'};border:1.5px solid ${isActive?'#1a237e':'#C7D2FE'};">
      <span style="font-size:24px;">${L.flag}</span>
      <div style="flex:1;">
        <div style="font-size:14px;font-weight:900;color:#0D1B4B;">${L.name}</div>
      </div>
      ${isActive?'<span style="color:#1a237e;font-size:18px;">✓</span>':''}
    </div>`;
  });
  html += `</div></div>`;
  const modal = document.createElement('div');
  modal.setAttribute('data-lang-modal','');
  modal.innerHTML = html;
  document.body.appendChild(modal);
}

// ── Init automatique ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyLang(detectLang());
});
