import { criaDialog } from "./criaDialog.js";
import { auxTrocaImagem } from "../main/troca-imagem.js";

const banner = document.querySelector("[data-banner]");
const corpoHtml = document.querySelector("[data-corpo]");
const dialog = document.createElement("dialog");

dialog.classList.add("dialog__desktop");
dialog.setAttribute("data-imagem-backdrop", "");

dialog.innerHTML = criaDialog();

banner.addEventListener("click", () => {
    corpoHtml.appendChild(dialog);
    dialog.showModal();
    auxTrocaImagem();

    const dialogSair = document.querySelector("[data-dialog-sair]");

    dialogSair.onclick = function (evento) {
        dialog.close();
    }
});
