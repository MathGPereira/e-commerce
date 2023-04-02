import { criaDialog } from "./criaDialog.js";
import { trocaImagem } from "./troca-imagem.js";

if(window.screen.width >= 1440) {
    const banner = document.querySelector("[data-banner]");
    const corpoHtml = document.querySelector("[data-corpo]");

    banner.addEventListener("click", () => {
        const dialog = document.createElement("dialog");

        dialog.classList.add("dialog__desktop");
        dialog.setAttribute("data-imagem-backdrop", "");

        dialog.innerHTML = criaDialog();
        corpoHtml.appendChild(dialog);
        dialog.showModal();
    });
}