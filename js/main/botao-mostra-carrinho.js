const carrinho = document.querySelector("[data-carrinho]");
const carrinhoAtivo = document.querySelector("[data-carrinho-ativo]");

carrinho.addEventListener("click", () => {
    carrinhoAtivo.classList.toggle("carrinho-comprar--ativo");
});