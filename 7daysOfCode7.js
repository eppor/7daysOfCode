var operacao = prompt("Qual operacao voce quer executar:\n+, \n-, \n*, \n/, \nsair");

function soma() {
    return x + y;
}

function substracao() {
    return x - y;
}

function multiplicacao() {
    return x * y;
}

function divisao() {
    return x / y;
}

if(operacao != "sair") {
    var x = Number(prompt("Digite primeiro numero:"));
    var y = Number(prompt("Digite segundo numero:"));

    switch(operacao) {

        case "+":
            alert(soma());
            break;

        case "-": 
            alert(substracao());
            break;
    
        case "*":
            alert(multiplicacao());
            break;

        case "/":
            alert(divisao());
            break;

        default: 
        alert("Insira dados corretos");
    }

}else {
    alert("Ate a proxima!");
}