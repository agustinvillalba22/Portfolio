// Colapse único abierto
function openOnly(section) {
    document.querySelectorAll('.colapse-content').forEach(content => {
        content.style.display = 'none';
    });
    document.querySelectorAll('.arrow-colapse').forEach(arrow => {
        arrow.style.transform = 'rotate(-90deg)';
    });
    const content = document.getElementById('content-' + section);
    const arrow = document.getElementById('arrow-' + section);
    if (content && arrow) {
        content.style.display = 'block';
        arrow.style.transform = 'rotate(0deg)';
    }
}

// Menú superior: scroll y despliegue único
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('data-target');
        openOnly(target);
        const sectionDiv = document.getElementById(target);
        if (sectionDiv) {
            sectionDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Títulos de colapse: despliegue único
document.querySelectorAll('.colapse-title').forEach(title => {
    title.addEventListener('click', function() {
        const parent = this.parentElement;
        const section = parent.id;
        openOnly(section);
        parent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Inicia todos colapsados
document.querySelectorAll('.colapse-content').forEach(el => el.style.display = 'none');
document.querySelectorAll('.arrow-colapse').forEach(arrow => arrow.style.transform = 'rotate(-90deg)');

// Popup funciones
function abrirPopup() {
    document.getElementById("overlay").style.display = "block";
}
function cerrarPopup() {
    document.getElementById("overlay").style.display = "none";
}

// Popup sección única
function showPopSection(sectionClass, btn) {
    document.querySelectorAll('.info-pop, .design-system, .carrusel-wireframes').forEach(div => {
        div.style.display = 'none';
    });
    const section = document.querySelector('.' + sectionClass);
    if (section) section.style.display = 'block';
    document.querySelectorAll('.group-btn-item').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}
// Mostrar info-pop por defecto al abrir el popup
document.querySelectorAll('.info-pop').forEach(div => div.style.display = 'block');
document.querySelectorAll('.design-system, .carrusel-wireframes').forEach(div => div.style.display = 'none');

// Carrusel funcionalidad
let carruselIndex = 0;
const carruselTrack = document.getElementById('carrusel-track');
const carruselImgs = carruselTrack ? carruselTrack.querySelectorAll('img') : [];

function updateCarrusel() {
    const offset = carruselIndex * 401; // 400px img + 1px margin
    if (carruselTrack) {
        carruselTrack.style.transform = `translateX(-${offset}px)`;
    }
}

function moveCarrusel(dir) {
    carruselIndex += dir;
    if (carruselIndex < 0) carruselIndex = 0;
    if (carruselIndex > carruselImgs.length - 1) carruselIndex = carruselImgs.length - 1;
    updateCarrusel();
}

// Inicializa el carrusel en la primera imagen
updateCarrusel();

// VISUALS POPUP
function abrirVisualsPopup(src) {
    document.getElementById('visuals-popup-img').src = src;
    document.getElementById('visuals-popup').style.display = 'block';
}
function cerrarVisualsPopup() {
    document.getElementById('visuals-popup').style.display = 'none';
    document.getElementById('visuals-popup-img').src = '';
}


function autoScrollCards(selector, speed = 0.5) {
    const containers = document.querySelectorAll(selector);
    containers.forEach(container => {
        let intervalId = null;

        function startScroll() {
            if (intervalId) return;
            intervalId = setInterval(() => {
                if (container.scrollWidth - container.clientWidth <= 0) return;
                // Si llegó al final, vuelve al inicio instantáneamente (loop infinito)
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
                    container.scrollLeft = 0;
                } else {
                    container.scrollLeft += speed;
                }
            }, 20);
        }

        function stopScroll() {
            clearInterval(intervalId);
            intervalId = null;
        }

        // Inicia el autoscroll
        startScroll();

        // Pausa al hacer hover
        container.addEventListener('mouseenter', stopScroll);
        container.addEventListener('mouseleave', startScroll);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    autoScrollCards('.projects-cards', 1);
});


function enableParallaxOnPopupImage() {
    const popup = document.querySelector('#overlay .popup');
    if (!popup) return;
    popup.addEventListener('mousemove', function(e) {
        const infoPop = popup.querySelector('.info-pop');
        const img = popup.querySelector('.image-description');
        if (!img || !infoPop || infoPop.style.display === 'none') return;

        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const moveX = ((x / rect.width) - 0.5) * 20; // rango -10px a 10px
        const moveY = ((y / rect.height) - 0.5) * 20;

        img.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.04)`;
    });
    popup.addEventListener('mouseleave', function() {
        const img = popup.querySelector('.image-description');
        if (img) img.style.transform = 'translate(0,0) scale(1)';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    autoScrollCards('.projects-cards', 0.2);
    enableParallaxOnPopupImage();
});


document.addEventListener('DOMContentLoaded', function() {
    autoScrollCards('.projects-cards', 0.2);
    autoScrollCards('.carrusel-track', 0.2); // <-- Agrega esta línea para wireframes
    enableParallaxOnPopupImage();
});



document.addEventListener('DOMContentLoaded', function() {
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', this)
        .then(function() {
            document.getElementById('form-status').textContent = '¡Mensaje enviado!';
            form.reset();
        }, function(error) {
            document.getElementById('form-status').textContent = 'Error al enviar. Intenta de nuevo.';
        });
    });
    }
});


// Menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-btn');
    const navBar = document.querySelector('.nav-bar');
    if (hamburger && navBar) {
        hamburger.addEventListener('click', function() {
            navBar.classList.toggle('active');
        });
        // Opcional: cerrar menú al hacer click en un link
        navBar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navBar.classList.remove('active'));
        });
    }
});



