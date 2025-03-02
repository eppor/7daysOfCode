let verduras = [];
let legumes = [];
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let bebidas = [];


let continuar = prompt("Você deseja adicionar uma comida na sua lista de compras?\nsim\nnao").toLowerCase();
if (continuar === "sim") {
    adicionarItem();
}
function adicionarItem() {
    while(continuar === "sim") {
    let comida = prompt("Qual comida você deseja inserir?");
    let categoriaEscolhida = prompt(`Em qual categoria essa comida se encaixa?:\nVerduras\nLegumes\nFrutas\nLaticinios\nCongelados\nDoces\nBebidas`).toLowerCase();
    if(categoriaEscolhida === "verduras") {
        verduras.push(comida);
    }else if(categoriaEscolhida === "legumes") {
        legumes.push(comida);
    }else if(categoriaEscolhida === "frutas") {
        frutas.push(comida);
    }else if(categoriaEscolhida === "laticinios") {
        laticinios.push(comida);
    }else if(categoriaEscolhida === "congelados") {
        congelados.push(comida);
    }else if(categoriaEscolhida === "doces") {
        doces.push(comida);
    }else if(categoriaEscolhida === "bebidas") {
        bebidas.push(comida);
    }else {
        alert("Categoria invalida. Escolhe categoria correta para o seu item")
        continue;
    }

    continuar = prompt("Voce deseja adicionar mais alguma coisa?");
    }
}


let remover = prompt("Voce deseja remover algum item?");
while(remover === "sim") {
    let oQueRemover = prompt(`Qual item voce deseja remover?\n
                        Verduras: ${verduras}\n
                        Legumes: ${legumes}\n
                        Frutas: ${frutas}\n
                        Laticinios: ${laticinios}\n
                        Congelados: ${congelados}\n
                        Doces: ${doces}\n
                        Bebidas: ${bebidas}?`);
    removerItem(oQueRemover);
    remover = prompt("Você deseja remover algum outro item?");
    }

function removerItem(item) {
    let listaDeCategorias = { verduras, legumes, frutas, laticinios, congelados, doces, bebidas };

    for (let categoria in listaDeCategorias) {
        let existe = listaDeCategorias[categoria].indexOf(item);
        if (existe !== -1) {
            listaDeCategorias[categoria].splice(existe, 1);
            alert(`${item} foi removido da lista.`);
            return;
        }
    }
    alert("Não foi possível encontrar o item dentro da lista!");
}

exibirListaDeCompras();

function exibirListaDeCompras () {
   let exibir = alert(`Lista de compras pra hoje:\n
    Verduras: ${verduras}\n
    Legumes: ${legumes}\n
    Frutas: ${frutas}\n
    Laticinios: ${laticinios}\n
    Congelados: ${congelados}\n
    Doces: ${doces}\n
    Bebidas: ${bebidas}.`);
}