let numero = 0;
const banners = document.querySelectorAll("[data-banner]");
const setas = document.querySelectorAll("[data-seta]");

banners[numero].classList.add("produto__imagem--visivel");

setas.forEach(seta => {
    seta.addEventListener("click", evento => {
        if(seta.getAttribute("data-seta") === "+" && numero < 3) {
            numero++;
        }else if(numero >= 1) {
            numero--;
        }
        
        banners.forEach(banner => {
            banner.classList.remove("produto__imagem--visivel");
        });

        banners[numero].classList.add("produto__imagem--visivel");
    });
});