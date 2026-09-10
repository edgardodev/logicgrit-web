const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
const navLinks = document.querySelectorAll('.primary-nav a');
const year = document.querySelector('#year');
const cursorGlow = document.querySelector('.cursor-glow');
const desktopViewport = window.matchMedia('(min-width: 761px)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (year) year.textContent = new Date().getFullYear();

const syncHeader = () => {
  header?.classList.toggle('scrolled', window.scrollY > 18);
};
syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

menuToggle?.addEventListener('click', () => {
  const open = !nav.classList.contains('open');
  nav.classList.toggle('open', open);
  menuToggle.classList.toggle('active', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
});

navLinks.forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.classList.remove('active');
  menuToggle?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}));

desktopViewport.addEventListener('change', event => {
  if (!event.matches) return;
  nav.classList.remove('open');
  menuToggle?.classList.remove('active');
  menuToggle?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
});

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape' || !nav?.classList.contains('open')) return;
  nav.classList.remove('open');
  menuToggle?.classList.remove('active');
  menuToggle?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
  menuToggle?.focus();
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const easeOutExpo = t => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

const animateCounter = (el) => {
  const target = Number(el.dataset.target || 0);
  const duration = 1450;
  const start = performance.now();

  const frame = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const current = Math.round(target * easeOutExpo(progress));
    el.textContent = current.toLocaleString('es-CO');
    if (progress < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.65 });

document.querySelectorAll('.counter').forEach(counter => counterObserver.observe(counter));

const industryData = {
  clinicas: {
    title: 'Clínicas y consultorios',
    desc: 'WhatsApp → identifica servicio → agenda → confirma → recuerda → seguimiento postconsulta → registro.',
    benefit: 'Menos coordinación manual y mejor continuidad para el paciente.'
  },
  inmobiliarias: {
    title: 'Inmobiliarias',
    desc: 'Lead → calificación → inmueble adecuado → agenda visita → seguimiento → propuesta → documentación.',
    benefit: 'Más disciplina comercial sin perseguir cada lead de forma manual.'
  },
  servicios: {
    title: 'Servicios profesionales',
    desc: 'Consulta → diagnóstico inicial → reunión → propuesta → aprobación → contrato → onboarding.',
    benefit: 'Un proceso comercial ordenado de punta a punta.'
  },
  retail: {
    title: 'E-commerce y retail',
    desc: 'Carrito o consulta → segmentación → seguimiento → pago → pedido → logística → postventa.',
    benefit: 'Recupera oportunidades y automatiza comunicaciones operativas.'
  },
  b2b: {
    title: 'Ventas B2B',
    desc: 'Formulario o prospección → enriquecimiento → CRM → secuencia → reunión → propuesta → seguimiento.',
    benefit: 'El equipo se enfoca en conversaciones y oportunidades de alto valor.'
  },
  operaciones: {
    title: 'Operaciones internas',
    desc: 'Solicitud → validación → aprobación → documento → tarea → vencimiento → reporte.',
    benefit: 'Menos correos, menos pasos perdidos y más trazabilidad.'
  }
};

const titleEl = document.querySelector('#industry-title');
const descEl = document.querySelector('#industry-desc');
const benefitEl = document.querySelector('#industry-benefit');
const panel = document.querySelector('#industry-panel');

document.querySelectorAll('.industry-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const data = industryData[tab.dataset.tab];
    if (!data) return;

    document.querySelectorAll('.industry-tab').forEach(t => {
      const active = t === tab;
      t.classList.toggle('active', active);
      t.setAttribute('aria-selected', String(active));
    });

    if (!reducedMotion.matches) {
      panel?.animate(
        [{ opacity: .45, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 320, easing: 'cubic-bezier(.22, 1, .36, 1)' }
      );
    }

    titleEl.textContent = data.title;
    descEl.textContent = data.desc;
    benefitEl.textContent = data.benefit;
  });
});

document.querySelectorAll('.faq-item button').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const shouldOpen = !item.classList.contains('open');

    document.querySelectorAll('.faq-item').forEach(other => {
      other.classList.remove('open');
      other.querySelector('button')?.setAttribute('aria-expanded', 'false');
    });

    if (shouldOpen) {
      item.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});

if (cursorGlow && window.matchMedia('(pointer:fine)').matches) {
  window.addEventListener('pointermove', event => {
    cursorGlow.style.setProperty('--mx', `${event.clientX}px`);
    cursorGlow.style.setProperty('--my', `${event.clientY}px`);
  }, { passive: true });
}
