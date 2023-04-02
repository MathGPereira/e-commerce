export function trocaImagem(evento, banner) {
    banner.src = evento.target.src;
}

export function auxTrocaImagem() {
    const bannerDialog = document.querySelector("[data-banner-dialog]");
    const imagensDialog = document.querySelectorAll("[data-imagem-dialog]");
    
    imagensDialog.forEach(imagem => {
        imagem.addEventListener("click", (evento) => {
            trocaImagem(evento, bannerDialog)
        });
    })
}
