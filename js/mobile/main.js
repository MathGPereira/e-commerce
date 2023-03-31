import calculaDesconto from "./calcula-desconto.js";
import {adicionaProduto, deletaProduto} from "./modifica-produto.js";

let preco = document.querySelector("[data-preco-descontado]");
const desconto = document.querySelector("[data-desconto]").innerHTML;
const precoOriginal = document.querySelector("[data-preco]").innerHTML;
const botaoAdicionaNoCarrinho = document.querySelector("[data-botao-adiciona-produto]");
const quantidade = document.querySelector("[data-quantidade]");

preco.innerHTML = calculaDesconto(desconto, precoOriginal);
botaoAdicionaNoCarrinho.addEventListener("click", () => {
    adicionaProduto(parseFloat(preco.innerHTML), quantidade.value);
    
    const botaoDeleta = document.querySelector("[data-botao-deleta]");

    botaoDeleta.addEventListener("click", () => deletaProduto(quantidade.value));
});
