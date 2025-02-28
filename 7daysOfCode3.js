const nome = prompt("Digite o seu nome:");
let msgBoasVindas = alert(`Bem-vindo ${nome}!`);

let escolhaArea = prompt("Com qual area voce gostaria de seguir? Digite 1 para o Front-End e 2 para o Back-End");
if(escolhaArea == 1) {
    prompt("Em que voce gostaria de se especializar? Digite 1 para React e 2 para Vue.");
}
else if(escolhaArea == 2) {
    prompt("Qual linguagem de back-end voce quer aprofundar? Digite 1 para C++ ou 2 para Java.");
}else {
    prompt("Resposta invalida. Digite 1 ou 2.");
}

let msgProsseguimento = prompt("Otima escolha! Voce gostaria de se especializar nessa area? Digite 1 para sim e 2 para nao");
if(msgProsseguimento == 1) {
    alert(`Muito bem ${nome}! Continue assim!`);
}else {
    prompt("Voce prefere se desenvolver para se tornar fullstack? Digite 1 para sim e 2 para nao.");
}

novaTecnologia = prompt("Tem mais alguma tecnologia que voce gostaria de aprender? Digite sim ou nao");
while (novaTecnologia === "sim") {
    prompt("Qual?");
    alert(`Parabens ${nome}! ${novaTecnologia} E uma otima escolha! Vai ser muito util no seu caminho para se tornar u profissional!`);  
    prompt("Tem mais alguma tecnologia que voce gostaria de aprender? Digite sim ou nao");    
}

