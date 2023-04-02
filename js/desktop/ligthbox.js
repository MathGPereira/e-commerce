const bannerPrincipal = document.querySelector("[data-banner]");
const imagens = document.querySelectorAll("[data-imagem]");

imagens.forEach(imagem => {
    imagem.addEventListener("click", (evento) => {
        bannerPrincipal.src = evento.target.src;
    });
});
