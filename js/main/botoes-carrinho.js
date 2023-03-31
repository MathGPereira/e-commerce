function alteraQuantidade(valorBotao) {
    let quantidade = document.querySelector("[data-quantidade]");

    if(valorBotao === "+") {
        quantidade.value = parseInt(quantidade.value) + 1;
    }else if(valorBotao == "-" && parseInt(quantidade.value) > 0) {
        quantidade.value = parseInt(quantidade.value) - 1;
    }
}


const botoesQuantidade = document.querySelectorAll("[data-botao-quantidade]");

botoesQuantidade.forEach(botao => {
    botao.addEventListener("click", () => alteraQuantidade(botao.dataset.botaoQuantidade));
});
