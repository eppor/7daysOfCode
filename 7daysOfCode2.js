let nome = prompt("Qual o seu nome?");
let idade = prompt("Quantos anos você tem?");
let linguagem = prompt("Qual linguagem de programação você está estudando?");
let boasVindas = alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);
let gostaEstudar = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

if (gostaEstudar == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}