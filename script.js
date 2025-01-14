const images = document.querySelectorAll('.galeria img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('img');
const prevBtn = document.querySelector('.lightbox-prev');
const nextBtn = document.querySelector('.lightbox-next');

let currentIndex = 0;

// Abre a imagem ampliada
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = 'flex';
    });
});

// Exibe a imagem na lightbox
function showImage() {
    lightboxImg.src = images[currentIndex].src;
}

// Navega para a imagem anterior
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
});

// Navega para a próxima imagem
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
});

// Fecha a lightbox ao clicar fora da imagem
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});


document.getElementById('logo').addEventListener('click', function (e) {
     // Impede o comportamento padrão do link
    location.reload(); // Recarrega a página
});

