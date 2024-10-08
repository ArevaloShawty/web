const imagenes = document.querySelector('.imagenes');
const totalImagenes = imagenes.children.length;
let index = 0;

function mostrarImagen() {
    index = (index + 1) % totalImagenes;
    const desplazamiento = -index * 100;
    imagenes.style.transform = `translateX(${desplazamiento}%)`;
}

setInterval(mostrarImagen, 3000); // Cambiar cada 3 segundos
