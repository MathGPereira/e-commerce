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

export function alteraImagemDoCarroussel(valorSeta, numeroDaImagem, banner) {
    if(valorSeta === "+" && numeroDaImagem < 4) {
        numeroDaImagem += 1;
    }else if(valorSeta === "-" && numeroDaImagem > 1) {
        numeroDaImagem -= 1;
    }

    banner.src = `./images/image-product-${numeroDaImagem}-thumbnail.jpg`
}
