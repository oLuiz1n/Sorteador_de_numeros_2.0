let quantidade = document.querySelector('.quantidade');
let primeiroNumero = document.querySelector('.de');
let segundoNumero = document.querySelector('.a');
let resposta = document.querySelector('.numeros_sorteados');
let botao = document.querySelector('.sorteador');
quantidade.focus();
botao.onclick = () => {
    if(quantidade.value == '' && primeiroNumero.value == '' && segundoNumero.value == ''){
        alert('Coloque a quantidade e os numeros que você quer sortear')
    } else {
    resposta.innerHTML =  sorteioNumero(quantidade.value);
    createButton()
    }
}
sorteio = () => {
    let aleatorio = Math.floor(Math.random() * (parseInt(segundoNumero.value) - parseInt(primeiroNumero.value) + 1) + parseInt(primeiroNumero.value));
    return aleatorio;
}
sorteioNumero = (quantidade) => {
    let incluidos = [];
    let numeros = 1;
    while (numeros <= quantidade) {
        let numeroAleatorio = sorteio();
        if(numeroAleatorio !== 0) {
            let achou = false;

            for (let posiçao = 0; posiçao < incluidos.length; posiçao++) {
                if (incluidos[posiçao] == numeroAleatorio){
                    achou = true;
                    break;
                }
            }
            if(achou == false) {
            incluidos.push(numeroAleatorio);
            numeros++;
            }
        }
    }
    return incluidos;
}
createButton = () => {
    let botao_reinicio = document.querySelector('.reiniciar');
    botao_reinicio.innerHTML = 'Reiniciar'
    botao_reinicio.onclick = () => {
        let reiniciar = location.reload()
        return reiniciar;
    }
}