//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let adicionar = document.querySelector('input').value.trim();
    if (adicionar === ''){
        alert(`Por favor, insira um nome`);
    } else {
     amigos.push(adicionar);
     limparCampo();
     atualizarLista();
    }
}

 function atualizarLista() {
            const lista = document.getElementById("listaAmigos");
            lista.innerHTML = "";
            amigos.forEach(amigo => {
                const li = document.createElement("li");
                li.textContent = amigo;
                lista.appendChild(li);
            })};

 function sortearAmigo() {
     let sorteado = Math.floor(Math.random() * amigos.length);
     let mensagem = amigos[sorteado];
     document.getElementById("resultado").textContent = "O amigo secreto é: " + mensagem;
}

function limparCampo() {
    adicionar = document.querySelector('input');
    adicionar.value = '';
}