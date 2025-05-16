function trocarCor(cor) {
    document.querySelector(".circulo").style.background = cor;
    document.querySelector(".starbucks").src = `./img/img${["#017143", "#eb7495", "#d752b1"].indexOf(cor) + 1}.png`;
}
