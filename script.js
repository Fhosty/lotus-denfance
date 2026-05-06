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
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

function closeMenu() {
  navLinks.classList.remove('open');
  navToggle.classList.remove('open');
  document.body.style.overflow = '';
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
new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { animateCounter(e.target); counterObs.unobserve(e.target); }
  });
}, { threshold: 0.5 }).observe; // réassigné ci-dessous

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

// ===== FORMULAIRE CONTACT =====
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Envoi en cours…';
    btn.disabled = true;
    setTimeout(() => {
      formSuccess.style.display = 'block';
      contactForm.reset();
      btn.textContent = 'Envoyer le message';
      btn.disabled = false;
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 900);
  });
}
