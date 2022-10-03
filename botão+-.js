let tamanho = 2;
function atutam() {
    const h1 = document.querySelector("h1");
    h1.style.fontSize = `${tamanho}em`;
}
function atituto() {
    tamanho += 0.5;
    atutam();
}
function dtituto() {
    if(tamanho > 0.5) {
        tamanho -= 0.5;
        atutam();
    }
}
