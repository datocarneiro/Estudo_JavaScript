
let listPlayers = []

function addPlayer() {
    let players = { 
        nome: document.getElementById("newPlayer").value,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0,
    }

    if(players.nome == "") { 
        alert("Insira o seu nome!")
    } else { 
        listPlayers.push(players);

        document.getElementById("newPlayer").value = ""
       
        display()
    }
}


function display() {
    let table = "";
    for(let i = 0; i < listPlayers.length; i++) { 
        table += "<tr><td>"+ listPlayers[i].nome +"</td>"
        table += "<td>"+ listPlayers[i].vitorias + "</td>"
        table += "<td>"+ listPlayers[i].empates + "</td>"
        table +=  "<td>"+ listPlayers[i].derrotas + "</td>"
        table += "<td>"+ listPlayers[i].pontos + "</td>"
        table += "<td><button class='bttnInp2' onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
        table += "<td><button class='bttnInp2' onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
        table +=   "<td><button class='bttnInp2' onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
        table +=   "<td><button class='bttnInp2' onClick='excluirJogador("+ i +")'>🗑️</button></td>"
        table += "</tr>"
    }
    document.getElementById("tabelaJogadores").innerHTML = table;
}

function points(i) { 
    let points = listPlayers[i].vitorias * 3 + listPlayers[i].empates;
    listPlayers[i].pontos = points
}

function zerarPoints() { 
    for(let i = 0; i < listPlayers.length; i++) { 
        listPlayers[i].vitorias = 0;
        listPlayers[i].empates = 0;
        listPlayers[i].derrotas = 0;
        listPlayers[i].pontos = 0;
    }
    display()
}

    function adicionarVitoria(i) { 
        listPlayers[i].vitorias++
        points(i)
        display();
    }

    function adicionarEmpate(i) { 
        listPlayers[i].empates++
        points(i)
        display();
    }

    function adicionarDerrota(i) { 
        listPlayers[i].derrotas++
        points(i)
        display();
    }

   function excluirJogador(i) { 
       listPlayers.splice(i, 1);
       display()
   }

  


// function calculaPontos(jogador) {

//     var pontos = (jogador.vitorias * 3) + jogador.empates - jogador.derrotas

//     return pontos;

// }

// rafa.pontos = calculaPontos(rafa);
// paulo.pontos = calculaPontos(paulo);
// gui.pontos = calculaPontos(gui);
// newPerson.pontos = calculaPontos(newPerson)


// var jogadores = [rafa, paulo, gui]

// function exibeJogadoresNaTela(jogadores) { 
//     var elemento = ""
//     for (let i = 0; i < jogadores.length; i++) {
        
//         elemento += "<tr><td>"+ jogadores[i].nome +"</td>"
//         elemento += "<td>"+ jogadores[i].vitorias + "</td>"
//         elemento += "<td>"+ jogadores[i].empates + "</td>"
//         elemento +=  "<td>"+ jogadores[i].derrotas + "</td>"
//         elemento += "<td>"+ jogadores[i].pontos + "</td>"
//         elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
//         elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
//         elemento +=   "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
//         elemento +=   "<td><button onClick='excluirJogador("+ i +")'>🗑️</button></td>"
//         elemento += "</tr>"

//     }
    
    
// var tabelaJogadores = document.getElementById("tabelaJogadores")
// tabelaJogadores.innerHTML = elemento
// }

// exibeJogadoresNaTela(jogadores)

// function adicionarVitoria(i) { 
//  var jogador = jogadores[i]
//  jogador.vitorias++
//  jogador.pontos = calculaPontos(jogador)
//  exibeJogadoresNaTela(jogadores)
// }

// function adicionarEmpate(i) { 
//     var jogador = jogadores[i]
//     jogador.empates++
//     jogador.pontos = calculaPontos(jogador)
//     exibeJogadoresNaTela(jogadores)
//    }

//    function adicionarDerrota(i) { 
//     var jogador = jogadores[i]
//     jogador.derrotas++
//     jogador.pontos = calculaPontos(jogador)
//     exibeJogadoresNaTela(jogadores)
//    }


   