function criaDialog() {
    const dialog = `
        <dialog class="dialog__desktop" data-imagem-backdrop>
            <i aria-label="Fechar menu lateral" class="dialog__sair" data-dialog-sair>
                <svg width="20" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#FFFFFF" fill-rule="evenodd"/>
                </svg>
            </i>
            <i>
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" class="produto__seta seta-esquerda" data-seta="-">
                    <path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/>
                </svg>
            </i>
            <img src="./images/image-product-1-thumbnail.jpg" alt="Produto exibido no carroussel de produtos" class="produto__imagem dialog__imagem" data-banner data-imagem="0">
            <i>
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg" class="produto__seta seta-direita" data-seta="+">
                    <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/>
                </svg>
            </i>
            <ul class="principal__imagens-ligthbox">
                <li class="ligthbox__item" data-imagem="1">
                    <img src="./images/image-product-1-thumbnail.jpg" alt class="imagens-ligthbox__imagem">
                </li>
                <li class="ligthbox__item" data-imagem="2">
                    <img src="./images/image-product-2-thumbnail.jpg" alt class="imagens-ligthbox__imagem">
                </li>
                <li class="ligthbox__item" data-imagem="3">
                    <img src="./images/image-product-3-thumbnail.jpg" alt class="imagens-ligthbox__imagem">
                </li>
                <li class="ligthbox__item" data-imagem="4">
                    <img src="./images/image-product-4-thumbnail.jpg" alt class="imagens-ligthbox__imagem">
                </li>
            </ul>
        </dialog>
    `;

    return dialog;
}

let imagemBackdrop;
let dialogSair;
const bannerPrincipal = document.querySelector("[data-banner]");
const imagens = document.querySelectorAll("[data-imagem]");
const corpo = document.querySelector("[data-corpo]");

imagens.forEach(imagem => {
    imagem.addEventListener("click", (evento) => {
        if(imagem.dataset.imagem !== "0") {
            bannerPrincipal.src = evento.target.src;
        }else if(window.screen.width >= 1440) {
            corpo.innerHTML += criaDialog();

            imagemBackdrop = document.querySelector("[data-imagem-backdrop]");
            dialogSair = document.querySelector("[data-dialog-sair]");

            imagemBackdrop.showModal();

            dialogSair.addEventListener("click", function () {
               corpo.removeChild(imagemBackdrop);
            });
        }
    });
});
