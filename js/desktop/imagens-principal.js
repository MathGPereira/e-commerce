import { trocaImagem } from "./troca-imagem.js";

const bannerPrincipal = document.querySelector("[data-banner]");
const imagens = document.querySelectorAll("[data-imagem]");

imagens.forEach(imagem => {
    imagem.addEventListener("click", evento => trocaImagem(evento, bannerPrincipal));
});