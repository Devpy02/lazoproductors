/* ========================================
   MAIN.JS - Punto de entrada y orquestador
   ======================================== */

// ========================================
// DATOS
// ========================================

// Contacto
const CONTACT = {
  whatsapp: '+53XXXXXXXXXX', // Reemplazar con número real
  phone: '+53XXXXXXXXXX',
  email: 'info@fincatabacalera.com',
  location: 'Pinar del Río, Cuba'
};

// Testimonios
const TESTIMONIALS = [
  {
    name: 'María García',
    origin: 'España',
    rating: 5,
    text: 'Una experiencia increíble. Don Pedro es una persona extraordinaria y la comida fue deliciosa. Volveremos seguro.',
    image: 'assets/images/testimonial-1.jpg'
  },
  {
    name: 'Juan López',
    origin: 'México',
    rating: 5,
    text: 'Conocer el proceso del tabaco de principio a fin fue fascinante. Muy auténtico, muy real. Recomendado 100%.',
    image: 'assets/images/testimonial-2.jpg'
  },
  {
    name: 'Sophie Dubois',
    origin: 'Francia',
    rating: 5,
    text: 'No es un resort, es una verdadera casa de campo. Eso es exactamente lo que buscábamos. Merci Don Pedro!',
    image: 'assets/images/testimonial-3.jpg'
  }
];

// Historias
const STORIES = [
  {
    title: 'El Primer Tabaco de Don Pedro',
    excerpt: 'Cómo comenzó todo hace 30 años con tan solo una pequeña parcela...',
    image: 'assets/images/story-1.jpg',
    category: 'Historia'
  },
  {
    title: 'La Cosecha de 2024',
    excerpt: 'Un año especial con lluvia en el momento perfecto y una cosecha abundante...',
    image: 'assets/images/story-2.jpg',
    category: 'Cosecha'
  },
  {
    title: 'Receta: Ropa Vieja Campesina',
    excerpt: 'La receta que prepara la familia desde hace generaciones...',
    image: 'assets/images/story-3.jpg',
    category: 'Cocina'
  },
  {
    title: 'Visitantes Especiales',
    excerpt: 'Cuando llegó un grupo de fotógrafos profesionales y pasó algo mágico...',
    image: 'assets/images/story-4.jpg',
    category: 'Visitantes'
  }
];

// Galería
const GALLERY = [
  { image: '../assets/images/campo.jpg', alt: 'Campo' },
  { image: '../assets/images/atardecer.jpg', alt: 'Atardecer en la finca' },
  { image: '../assets/images/trabajando.jpg', alt: 'Don Pedro trabajando' },
  { image: '../assets/images/tradicional.jpg', alt: 'Comida tradicional' },
  { image: '../assets/images/manos.png', alt: 'Manos en el tabaco' },
  { image: '../assets/images/secadero.jpg', alt: 'Secadero tradicional' },
  { image: '../assets/images/visitantes.jpg', alt: 'Grupo de visitantes' },
  { image: '../assets/images/proyecto_social.jpg', alt: 'Proyecto social' }
];

// ========================================
// FUNCIONES UTILITARIAS
// ========================================

/**
 * Crear elemento HTML
 * @param {string} tag - Etiqueta HTML (div, p, etc)
 * @param {string} className - Clases CSS
 * @param {string} content - Contenido del elemento
 * @returns {HTMLElement}
 */
function createElement(tag, className, content = '') {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content) element.innerHTML = content;
  return element;
}

/**
 * Renderizar testimonios
 */
function renderTestimonials() {
  const track = document.getElementById('testimonialTrack');
  track.innerHTML = ''; // Limpiar
  
  TESTIMONIALS.forEach((testimonial) => {
    const card = createElement('div', 'testimonial-card card');
    
    const stars = '⭐'.repeat(testimonial.rating);
    
    const html = `
      <div class="testimonial-stars">${stars}</div>
      <p class="testimonial-text">"${testimonial.text}"</p>
      <div class="testimonial-author">
        <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-avatar">
        <div>
          <p class="text-primary font-bold">${testimonial.name}</p>
          <p class="text-small text-muted">${testimonial.origin}</p>
        </div>
      </div>
    `;
    
    card.innerHTML = html;
    track.appendChild(card);
  });
}

/**
 * Renderizar galería
 */
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = ''; // Limpiar
  grid.className = 'gallery-grid';
  
  GALLERY.forEach((item) => {
    const img = createElement('div', 'gallery-item');
    img.innerHTML = `<img src="${item.image}" alt="${item.alt}" class="img-rounded">`;
    grid.appendChild(img);
  });
}

/**
 * Renderizar historias
 */
function renderStories() {
  const grid = document.getElementById('storiesGrid');
  grid.innerHTML = ''; // Limpiar
  
  STORIES.forEach((story) => {
    const card = createElement('div', 'story-card card');
    
    const html = `
      <img src="${story.image}" alt="${story.title}" class="img-rounded" style="width: 100%; height: 200px; object-fit: cover; margin-bottom: var(--space-md);">
      <span class="text-accent text-small">${story.category}</span>
      <h3>${story.title}</h3>
      <p>${story.excerpt}</p>
      <a href="#" class="text-accent">Leer más →</a>
    `;
    
    card.innerHTML = html;
    grid.appendChild(card);
  });
}

// ========================================
// WHATSAPP
// ========================================

/**
 * Abrir WhatsApp
 */
function openWhatsApp() {
  const message = encodeURIComponent('Hola, me gustaría hacer una reserva en la finca tabacalera.');
  window.open(`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
}

/**
 * Reservar por WhatsApp con tipo de experiencia
 */
function reservarWhatsApp(experiencia) {
  const message = encodeURIComponent(`Hola, me gustaría reservar la experiencia "${experiencia}". ¿Cuál es la disponibilidad?`);
  window.open(`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
}

// ========================================
// EVENTOS
// ========================================

/**
 * Inicializar eventos
 */
function initializeEvents() {
  // Botones CTA en hero
  const ctaHero = document.getElementById('ctaHero');
  if (ctaHero) {
    ctaHero.addEventListener('click', openWhatsApp);
  }
  
  // Botón WhatsApp flotante
  const whatsappBtn = document.getElementById('whatsappBtn');
  if (whatsappBtn) {
    whatsappBtn.href = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`;
  }
  
  // Menú hamburguesa (mobile)
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
}

// ========================================
// INICIALIZACIÓN
// ========================================

/**
 * Iniciar todo cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('✓ Finca Tabacalera - Aplicación iniciada');
  
  // Renderizar contenido dinámico
  renderTestimonials();
  renderGallery();
  renderStories();
  
  // Inicializar eventos
  initializeEvents();
  
  // Inicializar otras funcionalidades
  if (typeof initScrollAnimations === 'function') {
    initScrollAnimations();
  }
  
  if (typeof initCarousel === 'function') {
    initCarousel();
  }
});
