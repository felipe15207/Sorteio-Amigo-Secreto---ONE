//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

listaAmigos = [];
sorteados = []

function mostraAmigos(idlista, lista) {
    let ulAmigos = document.getElementById(idlista);
    ulAmigos.innerHTML = '';
    for(let i=0;i<lista.length; i++) {
        let item = document.createElement("li");
        item.textContent = lista[i];
        ulAmigos.appendChild(item)
        /*ulAmigos.innerHTML = ulAmigos.innerHTML + `<li>${listaAmigos[i]}</li>`;*/
    }
}

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    if(inputAmigo.value == '' || listaAmigos.includes(inputAmigo.value) == true) {
        alert("Digite um nome valido!!!");
        inputAmigo.value = '';
    } else {
        let nome = inputAmigo.value;
        listaAmigos.push(nome);
        inputAmigo.value = '';
    }
    console.log(listaAmigos);
    mostraAmigos("listaAmigos", listaAmigos);
}


function sortearAmigo() {
    if(listaAmigos.length < 2) {
        alert("Impossível começar o sorteio com menos de 2 pessoas...");
    } else {
        let numAmigo = Math.floor((Math.random() * listaAmigos.length));
        sorteados.push(listaAmigos[numAmigo]);
        mostraAmigos("resultado", sorteados);
    }
}

function reset() {
    listaAmigos = []
    sorteados = []
    document.getElementById("listaAmigos").innerHTML = '';
    document.getElementById("resultado").innerHTML = '';
}