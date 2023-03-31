export function adicionaProduto(preco, quantidade) {
    if(quantidade !== "0") {
        mostrador(quantidade, "adiciona");
        menuCarrinho.innerHTML = `
            <summary class="carrinho-compras__titulo">Carrinho</summary>
            <div class="carrinho-compras__corpo">
                <img src="./images/image-product-1-thumbnail.jpg" alt="Produto que foi colocado no carrinho de compras" class="corpo__imagem">
                <p class="corpo__info">Tênis de edição limitada de outono</p>
                <p class="corpo__preco-descontado">
                    $
                    <span data-preco-carrinho>${preco.toFixed(2)}</span>
                </p>
                <p class="corpo__quantidade-unidades">
                    x
                    <span data-quantidade-carrinho>${quantidade}</span>
                </p>
                <p class="corpo__valor-total">
                    $
                    <span data-preco-total-carrinho>${(preco * quantidade).toFixed(2)}</span>
                </p>
                <svg width="14" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="corpo__delete" data-botao-deleta>
                    <defs>
                        <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/>
                    </defs>
                    <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/>
                </svg>
                <button class="corpo__botao-checkout">Checkout</button>
            </div>
        `;
    }
}

export function deletaProduto(quantidade) {
    mostrador(quantidade, "deleta");
    menuCarrinho.innerHTML = `
        <summary class="carrinho-compras__titulo">Carrinho</summary>
        <p class="corpo__info corpo__info--vazio">Seu carrinho está vazio</p>
    `;
}

function mostrador(quantidade, operacao) {
    let itensNoCarrinho = document.querySelector("[data-quantidade-no-carrinho]");

    if(operacao === "adiciona") {
        itensNoCarrinho.style.display = "block";
        itensNoCarrinho.innerHTML = quantidade;
    }else if(operacao === "deleta") {
        itensNoCarrinho.style.display = "none";
        itensNoCarrinho.innerHTML = "";
    }
}

const menuCarrinho = document.querySelector("[data-carrinho-ativo]");