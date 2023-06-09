export function criaDialog() {
    const dialog = `
        <i aria-label="Fechar menu lateral" class="dialog__sair" data-dialog-sair>
            <svg width="20" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#FFFFFF" fill-rule="evenodd"/>
            </svg>
        </i>
        <img src="./images/image-product-1-thumbnail.jpg" alt="Produto exibido no carroussel de produtos" class="produto__imagem dialog__imagem" data-banner-dialog>
        <ul class="principal__imagens-ligthbox">
            <li class="ligthbox__item dialog__item" data-imagem="1">
                <img src="./images/image-product-1-thumbnail.jpg" alt class="imagens-ligthbox__imagem" data-imagem-dialog>
            </li>
            <li class="ligthbox__item dialog__item" data-imagem="2">
                <img src="./images/image-product-2-thumbnail.jpg" alt class="imagens-ligthbox__imagem" data-imagem-dialog>
            </li>
            <li class="ligthbox__item dialog__item" data-imagem="3">
                <img src="./images/image-product-3-thumbnail.jpg" alt class="imagens-ligthbox__imagem" data-imagem-dialog>
            </li>
            <li class="ligthbox__item dialog__item" data-imagem="4">
                <img src="./images/image-product-4-thumbnail.jpg" alt class="imagens-ligthbox__imagem" data-imagem-dialog>
            </li>
        </ul>
    `;

    return dialog;
}