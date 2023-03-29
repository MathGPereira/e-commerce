function alteraImagemDoCarroussel(valorSeta) {
    if(valorSeta === "+" && numeroDaImagem < 4) {
        numeroDaImagem += 1;
    }else if(valorSeta === "-" && numeroDaImagem > 1) {
        numeroDaImagem -= 1;
    }

    banner.src = `./images/image-product-${numeroDaImagem}-thumbnail.jpg`
}


var numeroDaImagem = -1;
const banner = document.querySelector("[data-banner]");
const setas = document.querySelectorAll("[data-seta]");

setas.forEach(seta => {
    seta.addEventListener("click", (evento) => alteraImagemDoCarroussel(evento.target.dataset.seta));
    numeroDaImagem += 1;
});