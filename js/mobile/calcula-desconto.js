let precoDescontado = document.querySelector("[data-preco-descontado]");
const desconto = document.querySelector("[data-desconto]").innerHTML;
const precoTotal = document.querySelector("[data-preco]").innerHTML;

precoDescontado.innerHTML = (parseFloat(desconto / 100) * parseFloat(precoTotal)).toFixed(2);
