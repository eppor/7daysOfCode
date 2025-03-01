function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numeroEscolhido = getRandomIntInclusive(1, 10);
let tentativa;

for(let i = 0; i <3; i++) {
    tentativa = prompt("Tente advinhar em que numero estou pensando, de 1 a 10!");

    if(tentativa == numeroEscolhido) {
        alert(`Voce acertou! O numero em que estava pensando realmente e o ${numeroEscolhido}!`);
        break;
    }else {
        let tentativasQueSobraram = 2 - i;
        if(tentativasQueSobraram > 0) {
        alert(`Voce tem mais ${tentativasQueSobraram} tentativas!`);
        alert(`Tente de novo! ${tentativa} nao e o numero em que estou pensando!`);
        }else {
            alert(`Jogo acabou! O numero em que estava pensando era ${numeroEscolhido}`);
        }
    }
}