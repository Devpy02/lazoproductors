/* ========================================
   SCROLL.JS - Efectos de scroll y parallax
   ======================================== */

/**
 * Detectar si elemento está en el viewport
 * @param {HTMLElement} element
 * @returns {boolean}
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

/**
 * Animar elementos cuando entran en vista
 */
function animateOnScroll() {
  const elements = document.querySelectorAll('[class*="animate-"]');
  
  elements.forEach(element => {
    if (isInViewport(element) && !element.classList.contains('animated')) {
      element.classList.add('animated');
    }
  });
}

/**
 * Efecto parallax en hero
 */
function heroParallax() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  
  const scrollTop = window.scrollY;
  const offset = scrollTop * 0.5; // Velocidad 0.5
  
  hero.style.backgroundPosition = `center ${offset}px`;
}

/**
 * Cambiar header en scroll
 */
function headerOnScroll() {
  const header = document.getElementById('header');
  if (!header) return;
  
  const scrollTop = window.scrollY;
  
  if (scrollTop > 100) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

/**
 * Inicializar animaciones de scroll
 */
function initScrollAnimations() {
  // Animar elementos al cargar
  animateOnScroll();
  
  // Listener para scroll
  window.addEventListener('scroll', () => {
    animateOnScroll();
    heroParallax();
    headerOnScroll();
  }, { passive: true });
}

// Inicializar cuando el documento esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
  initScrollAnimations();
}
