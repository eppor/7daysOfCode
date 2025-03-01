let nome = prompt("Insira o seu nome:");

let area = prompt(`${nome}, voce prefere a area de Front-End ou a area de Back-End?\nDigite 1 para Front-End ou 2 para Back-End.`);
    if(area == 1){
        alert(`Muito bem ${nome}! Front-End e uma area muito promissora!`);
        let especializacao = prompt("Voce gostaria de aprender: \n1. React ou \n2. Vue?");
        if(especializacao == 1) {
            alert(`Otima escolha ${nome}! Siga aprendendo React para se desenvolver no Front-End!`);
        }else if(especializacao == 2) {
            alert(`Otima escolha ${nome}! Siga aprendendo Vue para se desenvolver no Front-End!`);
        }else {
            alert("Escolha invalida");
        }
    }else if(area == 2) {
        alert(`Otima escolha, ${nome}! Back-End vai abrir pra voce muitas portas!`);
        let linguagens = prompt("Voce quer aprender: \n1. C++ ou \n2. Java?");
        if(linguagens == 1) {
            alert(`Muito bem ${nome}! Siga aprendendo C++ e vai se tornar especialista em Back-End!`);
        }else if(linguagens == 2) {
            alert(`Muito bem ${nome}! Siga aprendendo Java e vai se tronar especialista em Back-End!`);
        }else {
            alert("Escolha invalida");
        }
    }else {
    alert("Escolha invalida.");
    }

let escolha = prompt(`Parabens ${nome}! Voce gostaria de: \n1. se especializar nessa area ou \n2.seguir se desenvolvendo para se tornar Fullstack?`);
if(escolha == 1) {
    alert(`Otimo ${nome}! Isso ai!`);
}else if(escolha == 2) {
    alert(`Parabens ${nome}! Otima escolha!`);
}else {
    alert("Escolha invalida");
}

let outrasTec = "";
outrasTec = prompt(`${nome}, voce gostaria de aprender alguma outra tecnologia? Qual?`);
while(outrasTec != "" && outrasTec != "nao") { 
   outrasTec = prompt(`Tem algo mais que voce gostaria de aprender?`);
}

