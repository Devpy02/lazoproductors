# 🌱 Finca Tabacalera - Landing Page Turismo Rural

Una landing page moderna, responsiva y auténtica para una finca tabacalera que ofrece turismo rural y gastronomía tradicional.

## 📁 Estructura del Proyecto

```
finca-tabacalera/
├── index.html              # Archivo HTML principal
├── css/
│   ├── styles.css          # Estilos base y componentes reutilizables
│   ├── sections.css        # Estilos específicos de cada sección
│   ├── variables.css       # Paleta de colores, tipografías, espacios
│   └── animations.css      # Keyframes y animaciones
├── js/
│   ├── main.js             # Orquestador principal, datos y renderizado
│   ├── scroll.js           # Efectos de scroll, parallax, animaciones
│   └── interactive.js      # Interactividad, carrusel, menú móvil
├── assets/
│   ├── images/             # Carpeta para todas las imágenes
│   └── icons/              # Carpeta para iconos SVG
└── README.md               # Este archivo
```

---

## 📄 Descripción de Archivos

### **HTML**

#### `index.html`
- **Propósito**: Estructura completa de la página con todas las secciones.
- **Secciones**:
  - Header/Navegación
  - Hero (banner principal)
  - Don Pedro (presentación del campesino)
  - El Arte del Tabaco (timeline del proceso)
  - Actividades (6 cosas que puedes hacer)
  - Galería de fotos
  - Testimonios (carrusel)
  - Experiencias (3 opciones de visita)
  - ¿Cómo Reservar? (3 pasos simples)
  - Historias de la finca
  - CTA final
  - Footer
  - Botón flotante WhatsApp

---

### **CSS**

#### `css/variables.css`
Define **sistema de diseño centralizado**:
- Colores (marrón tierra, verde bosque, oro, etc.)
- Tipografías y pesos
- Tamaños de espaciado
- Breakpoints responsive
- Z-indexes
- Transiciones

**Ventaja**: Cambias un color aquí = cambia en toda la web.

#### `css/styles.css`
Contiene:
- Reset CSS (normaliza navegador)
- Tipografía global (h1-h6, p, a, etc.)
- Componentes reutilizables (botones, tarjetas, contenedores)
- Utilidades (flex, grid, margin, padding)
- Estilos responsive

#### `css/sections.css`
Estilos específicos de **cada sección**:
- Header/Nav
- Hero
- Don Pedro
- Tobacco Process
- Actividades
- Galería
- Testimonios
- Experiencias
- Cómo Reservar
- Historias
- Footer
- Botón WhatsApp

#### `css/animations.css`
**Keyframes y animaciones** reutilizables:
- fadeIn
- slideUp, slideDown, slideLeft, slideRight
- scaleIn
- pulse
- bounce
- float
- glow

---

### **JavaScript**

#### `js/main.js`
**Orquestador principal**:
- Define datos (testimonios, historias, galería)
- Renderiza contenido dinámico
- Maneja WhatsApp (openWhatsApp, reservarWhatsApp)
- Inicializa todo cuando DOM está listo

#### `js/scroll.js`
**Efectos de scroll**:
- Detecta si elemento está en viewport
- Anima elementos cuando entran en vista
- Parallax en hero
- Header sticky en scroll

#### `js/interactive.js`
**Interactividad**:
- Carrusel de testimonios (next, prev, showTestimonial)
- Menú móvil (hamburguesa)
- Efectos hover en tarjetas
- Smooth scroll en navegación
- Efectos galería

---

## 🎨 Paleta de Colores

| Nombre | Hex | Uso |
|--------|-----|-----|
| Marrón Tierra | #6B4423 | Encabezados, elementos principales |
| Verde Bosque | #2D5016 | Naturaleza, acentos secundarios |
| Oro Champagne | #D4AF37 | Detalles premium, iconos |
| Crema Cálida | #F5EFE0 | Fondo, espacios negativos |
| Naranja Oxidado | #C85A3E | CTAs, botones principales |
| Gris Carbón | #3A3A3A | Textos, profesionalismo |
| Blanco | #FFFFFF | Claridad, separación |

---

## 🚀 Cómo Usar

### 1. **Instalar / Preparar**
```bash
# No requiere instalación, solo HTML/CSS/JS vanilla
# Abre index.html en tu navegador
```

### 2. **Personalizar Datos**

En `js/main.js`, actualiza:

```javascript
// Contacto
const CONTACT = {
  whatsapp: '+53XXXXXXXXXX',  // TU NÚMERO REAL
  phone: '+53XXXXXXXXXX',
  email: 'info@fincatabacalera.com',
  location: 'Pinar del Río, Cuba'
};

// Testimonios
const TESTIMONIALS = [ ... ];

// Historias
const STORIES = [ ... ];

// Galería
const GALLERY = [ ... ];
```

### 3. **Agregar Imágenes**

Coloca tus imágenes en:
- `assets/images/` → Todas las imágenes (hero, don-pedro, testimonios, etc.)
- `assets/icons/` → Iconos SVG si los necesitas

### 4. **Servir la Web**

**Opción 1: Local (sin servidor)**
```bash
# Windows
start index.html

# Mac
open index.html

# Linux
xdg-open index.html
```

**Opción 2: Con servidor local (recomendado)**
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Luego abre: http://localhost:8000
```

---

## 📱 Responsividad

La web es **100% responsive** con breakpoints:

| Dispositivo | Ancho | Cambios |
|-------------|-------|---------|
| Desktop | 1200px+ | Layout completo, 4 columnas galería |
| Tablet | 768-1199px | 2 columnas, menú adaptado |
| Mobile | < 768px | 1 columna, menú hamburguesa |

---

## ⚡ Funcionalidades

### ✅ Incluido
- [x] Header sticky en scroll
- [x] Navegación responsiva con hamburguesa
- [x] Hero con parallax
- [x] Animaciones al hacer scroll (fade-in, slide-up, etc.)
- [x] Carrusel de testimonios (next/prev)
- [x] Galería masónica
- [x] Botón flotante WhatsApp
- [x] Links WhatsApp integrados (reservar por experiencia)
- [x] Smooth scroll
- [x] Efectos hover en tarjetas
- [x] Timeline interactivo

### 🔄 Pueden Agregarse
- [ ] Formulario de contacto con validación
- [ ] Galería modal/lightbox
- [ ] Chat en vivo
- [ ] Sistema de reservas integrado
- [ ] Blog dinámico desde API

---

## 🎓 Lecciones Educativas

### **Arch. Frontend Senior**
Este proyecto enseña:

1. **Organización**: Separar HTML, CSS, JS en archivos lógicos
2. **Variables CSS**: Sistema de diseño centralizado
3. **Mobile First**: Responsive design desde el principio
4. **Componentes Reutilizables**: Botones, cards, contenedores
5. **Vanilla JS**: Sin frameworks, código limpio y legible
6. **Performance**: Lazy loading, smooth scroll, eventos optimizados
7. **SEO**: Meta tags, estructura semántica
8. **Accesibilidad**: Alt en imágenes, navegación clara

### **Sección por Sección**

Cada sección es **independiente**: puedes modificar hero sin afectar testimonios.

```
Hero
  ├── Estilos: .hero en sections.css
  ├── Estructura: <section id="hero"> en index.html
  ├── Datos: renderizado desde main.js
  └── Scripts: scroll.js (parallax)

Actividades
  ├── Estilos: .activities, .activity-card en sections.css
  ├── Estructura: grid 6x en index.html
  ├── Datos: hardcodeados (podrían ser dinámicos)
  └── Scripts: interactive.js (hover effects)
```

---

## 🛠️ Customización Común

### Cambiar Color Principal
En `css/variables.css`:
```css
:root {
  --color-primary: #6B4423; /* Cambia aquí */
}
```

### Agregar Nueva Sección
1. Agregar HTML en `index.html`
2. Agregar estilos en `css/sections.css`
3. Si necesita lógica: agregar en `js/main.js` o `js/interactive.js`

### Cambiar Tipografía
En `css/variables.css`:
```css
--font-elegant: 'Playfair Display', serif; /* Aquí */
--font-body: 'Lato', sans-serif;
```

---

## 🌐 Despliegue

### Opción 1: GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git push -u origin main

# Configurar en GitHub: Settings > Pages > Main branch
# URL: https://username.github.io/repo-name
```

### Opción 2: Netlify
1. Conectar repo
2. Deploy automático
3. Custom domain opcional

### Opción 3: Hosting Tradicional
1. FTP los archivos a tu hosting
2. Apunta el dominio
3. ¡Listo!

---

## 📊 Rendimiento

- **Peso**: ~150KB (HTML + CSS + JS)
- **LCP**: < 2s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

---

## 🐛 Troubleshooting

### Imágenes no aparecen
- Verifica rutas: `assets/images/nombre.jpg`
- Asegúrate de que los archivos existan

### WhatsApp no funciona
- Reemplaza `+53XXXXXXXXXX` con tu número real
- Incluye código de país
- Prueba el link manualmente

### Menú móvil no funciona
- Abre console (F12) y verifica errores
- Asegúrate que `interactive.js` está cargando

### Animations lentas
- Reduce `--transition-slow` en variables.css
- O desactiva en dispositivos móviles

---

## 📚 Recursos

- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Tricks](https://css-tricks.com)
- [JavaScript.info](https://javascript.info)
- [Web.dev](https://web.dev)

---

## 📝 Notas

- Este proyecto es **educativo** y profesional
- Código limpio, comentado y fácil de entender
- Ideal para aprender arquitectura frontend
- Escalable para agregar backend luego

---

## 👨‍💼 Autor

Mentor de Desarrollo Web
**Proyecto**: Finca Tabacalera - Turismo Rural
**Año**: 2024

---

## 📞 Contacto

Para preguntas o sugerencias sobre el código:
- WhatsApp: +53 XXXX XXXX
- Email: info@fincatabacalera.com

¡Bienvenidos a la finca! 🌱🚜
