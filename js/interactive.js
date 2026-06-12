/* ========================================
   INTERACTIVE.JS - Interactividad y carrusel
   ======================================== */

// ========================================
// CARRUSEL DE TESTIMONIOS
// ========================================

let currentTestimonialIndex = 0;

/**
 * Mostrar testimonial específico
 * @param {number} index
 */
function showTestimonial(index) {
  const track = document.getElementById('testimonialTrack');
  if (!track) return;
  
  const cards = track.querySelectorAll('.testimonial-card');
  if (cards.length === 0) return;
  
  // Ajustar índice
  if (index >= cards.length) {
    currentTestimonialIndex = 0;
  } else if (index < 0) {
    currentTestimonialIndex = cards.length - 1;
  } else {
    currentTestimonialIndex = index;
  }
  
  // Calcular posición: mostrar 3 tarjetas simultáneamente
  const cardWidth = cards[0].offsetWidth + 20; // 20px gap
  const offset = -currentTestimonialIndex * cardWidth;
  
  track.style.transform = `translateX(${offset}px)`;
  track.style.transition = 'transform 0.3s ease-in-out';
}

/**
 * Siguiente testimonial
 */
function nextTestimonial() {
  showTestimonial(currentTestimonialIndex + 1);
}

/**
 * Anterior testimonial
 */
function prevTestimonial() {
  showTestimonial(currentTestimonialIndex - 1);
}

/**
 * Inicializar carrusel
 */
function initCarousel() {
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  
  if (nextBtn) {
    nextBtn.addEventListener('click', nextTestimonial);
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', prevTestimonial);
  }
  
  // Mostrar primer testimonial
  showTestimonial(0);
}

// ========================================
// MENÚ MÓVIL
// ========================================

/**
 * Cerrar menú móvil cuando se hace click en un link
 */
function initMobileMenu() {
  const navMenu = document.getElementById('navMenu');
  const menuToggle = document.getElementById('menuToggle');
  
  if (!navMenu) return;
  
  // Cerrar menú al hacer click en un link
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
  
  // Cerrar menú al hacer click fuera
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle?.contains(e.target)) {
      navMenu.classList.remove('active');
    }
  });
}

// ========================================
// EFECTOS DE TARJETAS
// ========================================

/**
 * Agregar efecto hover a tarjetas
 */
function initCardEffects() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = 'var(--shadow-lg)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = 'var(--shadow-md)';
    });
  });
}

// ========================================
// SMOOTH SCROLL PARA LINKS
// ========================================

/**
 * Smooth scroll en navegación
 */
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        
        const target = document.querySelector(href);
        const offsetTop = target.offsetTop - 100; // Espacio para header
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ========================================
// GALERÍA CON EFECTOS
// ========================================

/**
 * Agregar efectos a galería
 */
function initGalleryEffects() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
    });
  });
}

// ========================================
// INICIALIZACIÓN GENERAL
// ========================================

/**
 * Inicializar todo
 */
function initializeInteractive() {
  console.log('✓ Interactividad inicializada');
  
  initCarousel();
  initMobileMenu();
  initCardEffects();
  initSmoothScroll();
  initGalleryEffects();
}

// Ejecutar cuando DOM está listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeInteractive);
} else {
  initializeInteractive();
}
