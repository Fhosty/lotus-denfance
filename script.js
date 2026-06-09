// ===== ÉLÉMENTS =====
const header      = document.getElementById('header');
const navToggle   = document.getElementById('navToggle');
const navLinks    = document.getElementById('navLinks');
const fabDon      = document.querySelector('.fab-don');
const allNavLinks = document.querySelectorAll('.nav-links [data-section]');

// ===== NAV SCROLL =====
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
  if (fabDon) fabDon.classList.toggle('visible', window.scrollY > 500);
  updateActiveNav();
}, { passive: true });

// ===== SCROLLSPY — section active =====
function updateActiveNav() {
  const scrollY = window.scrollY + 100;
  const sections = ['qui-sommes-nous','nos-actions','agenda','soutenir','boutique','remerciements','don','contact'];

  let current = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollY) current = id;
  });

  allNavLinks.forEach(a => {
    a.classList.toggle('active', a.dataset.section === current);
  });
}

// ===== MENU HAMBURGER =====
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
});

function closeMenu() {
  navLinks.classList.remove('open');
  navToggle.classList.remove('open');
}

// Fermer sur clic lien
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', closeMenu);
});

// Fermer sur clic hors menu
document.addEventListener('click', e => {
  if (navLinks.classList.contains('open') && !e.target.closest('nav')) closeMenu();
});

// ===== DROPDOWN "AGIR" =====
document.querySelectorAll('.nav-has-dropdown').forEach(item => {
  const toggle = item.querySelector('.nav-dropdown-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = item.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
});

// Fermer dropdown au clic ailleurs
document.addEventListener('click', () => {
  document.querySelectorAll('.nav-has-dropdown.open').forEach(item => {
    item.classList.remove('open');
    item.querySelector('.nav-dropdown-toggle')?.setAttribute('aria-expanded', 'false');
  });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 78, behavior: 'smooth' });
  });
});

// ===== COMPTEURS =====
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const step   = target / (1800 / 16);
  let cur = 0;
  const t = setInterval(() => {
    cur += step;
    if (cur >= target) { cur = target; clearInterval(t); }
    el.textContent = Math.floor(cur);
  }, 16);
}
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { animateCounter(e.target); counterObs.unobserve(e.target); }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-number').forEach(el => counterObs.observe(el));

// ===== FADE-IN =====
const fadeObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      fadeObs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(
  '.action-card, .stat-card, .value-item, .step, .event-card, .contact-item, .product-card, .soutenir-card'
).forEach(el => { el.classList.add('fade-in'); fadeObs.observe(el); });

// ===== FORMULAIRE CONTACT (Web3Forms — envoi réel) =====
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const formError   = document.getElementById('formError');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const tr  = (typeof window.t === 'function') ? window.t : (k => k);
    const btn = contactForm.querySelector('button[type="submit"]');
    const btnLabel = btn.textContent;

    // Sujet lisible pour l'e-mail reçu par l'association
    const name = document.getElementById('name').value.trim();
    const cat  = document.getElementById('subject').value;
    const subjectKeys = {
      don: 'c.subj.don', benevole: 'c.subj.benevole', partenariat: 'c.subj.partenariat',
      info: 'c.subj.info', autre: 'c.subj.autre'
    };
    const subjectText = subjectKeys[cat] ? tr(subjectKeys[cat]) : tr('c.subj.default');
    const w3fSubject = document.getElementById('w3f-subject');
    if (w3fSubject) w3fSubject.value = tr('c.subject.prefix') + subjectText + (name ? ' — ' + name : '');

    if (formSuccess) formSuccess.style.display = 'none';
    if (formError)   formError.style.display   = 'none';
    btn.disabled = true;
    btn.textContent = tr('c.sending');

    try {
      const res  = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(contactForm)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        formSuccess.style.display = 'block';
        contactForm.reset();
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        throw new Error(data.message || 'submit failed');
      }
    } catch (err) {
      if (formError) {
        formError.style.display = 'block';
        formError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } finally {
      btn.disabled = false;
      btn.textContent = btnLabel;
    }
  });
}
