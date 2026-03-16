// Función para scroll suave a la sección de proyectos
function irProyectos() {
    const seccion = document.getElementById("proyectos");
    seccion.scrollIntoView({ behavior: "smooth" });
}

// Función para simular el contacto
function contacto() {
    alert("📧 yeseniabuitrago3@gmail.com \n📱 +57 3132696614");
}

// Función para cambiar la imagen principal de la galería
function cambiarImagen(miniatura) {
    // Obtener la imagen principal
    const imagenPrincipal = document.getElementById('imagen-principal');
    
    // Cambiar la fuente de la imagen principal
    imagenPrincipal.src = miniatura.src;
    
    // Remover la clase 'active' de todas las miniaturas
    const miniaturas = document.querySelectorAll('.miniatura');
    miniaturas.forEach(img => {
        img.classList.remove('active');
    });
    
    // Añadir la clase 'active' a la miniatura clickeada
    miniatura.classList.add('active');
    
    // Animación adicional
    imagenPrincipal.style.animation = 'zoomOut 0.3s ease';
    setTimeout(() => {
        imagenPrincipal.style.animation = '';
    }, 300);
}

// Efecto de header que se encoge al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.padding = '10px 10%';
        header.style.background = 'rgba(10, 12, 15, 0.95)';
    } else {
        header.style.padding = '15px 10%';
        header.style.background = 'rgba(10, 12, 15, 0.8)';
    }
});

// Navegación con teclado para la galería (flechas izquierda/derecha)
document.addEventListener('keydown', function(e) {
    // Solo si estamos en la sección de proyectos
    if (window.location.hash === '#proyectos' || document.getElementById('proyectos').getBoundingClientRect().top < window.innerHeight) {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const miniaturas = Array.from(document.querySelectorAll('.miniatura'));
            const activeIndex = miniaturas.findIndex(img => img.classList.contains('active'));
            
            if (activeIndex !== -1) {
                let newIndex;
                if (e.key === 'ArrowLeft') {
                    newIndex = (activeIndex - 1 + miniaturas.length) % miniaturas.length;
                } else {
                    newIndex = (activeIndex + 1) % miniaturas.length;
                }
                cambiarImagen(miniaturas[newIndex]);
            }
        }
    }
});

// Animación suave para los enlaces del menú
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Efecto de aparición al hacer scroll (opcional, ya lo tenemos con CSS)
window.addEventListener('load', function() {
    // Pequeña animación inicial
    console.log('Portafolio cargado con éxito 🚀');
});