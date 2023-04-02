import {alteraImagemDoCarroussel} from "../main/troca-imagem.js";

var numeroDaImagem = -1;
const banner = document.querySelector("[data-banner]");
const setas = document.querySelectorAll("[data-seta]");

setas.forEach(seta => {
    seta.addEventListener("click", (evento) => alteraImagemDoCarroussel(evento.target.dataset.seta, numeroDaImagem, banner));
    numeroDaImagem += 1;
});