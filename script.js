const albums = [
    [  // Casa 1
        "assets/projetos/casa1_1.jpg",
        "assets/projetos/casa1_2.jpg",
        "assets/projetos/casa1_3.jpg",
    ],
    [  // Casa 2
        "assets/projetos/casa2_1.jpg",
        "assets/projetos/casa2_2.jpg",
        "assets/projetos/casa2_3.jpg",
    ],
    [  // Casa 3
        "assets/projetos/casa3_1.jpg",
        "assets/projetos/casa3_2.jpg",
    ],
];

let indiceAtual = 0;
let indiceAlbumAtual = 0;

function abrirLightbox(indiceAlbum, indiceImagem) {
    indiceAlbumAtual = indiceAlbum;
    indiceAtual = indiceImagem;

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-imagem");

    
    lightboxImage.src = albums[indiceAlbumAtual][indiceAtual];

    
    lightbox.style.display = "flex";
}

function fecharLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}


function navegarImagens(direcao, event) {

    event.stopPropagation();

    indiceAtual += direcao;
    
    if (indiceAtual < 0) {
        indiceAtual = albums[indiceAlbumAtual].length - 1; 
    } else if (indiceAtual >= albums[indiceAlbumAtual].length) {
        indiceAtual = 0; 
    }
  
    const lightboxImage = document.getElementById("lightbox-imagem");
    lightboxImage.src = albums[indiceAlbumAtual][indiceAtual];
}