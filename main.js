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