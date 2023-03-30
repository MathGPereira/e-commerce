let valorTotalCarrinho = document.querySelector("[data-preco-total-carrinho]");
const quantidadeCarrinho = document.querySelector("[data-quantidade-carrinho]").innerHTML;
const precoCarrinho = document.querySelector("[data-preco-carrinho]").innerHTML;

valorTotalCarrinho.innerHTML = (parseFloat(quantidadeCarrinho) * parseFloat(precoCarrinho)).toFixed(2);
