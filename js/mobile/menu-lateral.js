const menu = document.querySelectorAll("[data-botao-menu]");
const menuLateral = document.querySelector("[data-menu-lateral]");

menu.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        menuLateral.classList.toggle("lateral-ativo");
    });
});
