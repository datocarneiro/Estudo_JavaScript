var paulo = {
    nome: 'Paulo', 
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0,
    patroaManda: 0
  };
  var rafa = {
    nome: 'Rafa', 
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0,
    patroaManda: 0
  };
  var gui = {
    nome: 'Gui', 
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0,
    patroaManda: 0
  };
  
  var elementoTabela = document.getElementById("tabelaJogadores")
  
  exibirNaTela()
  function exibirNaTela () {
    elementoTabela.innerHTML = `
        <tr>
            <td>${paulo.nome}</td>
            <td>${paulo.vitoria}</td>
            <td>${paulo.empate}</td>
            <td>${paulo.derrota}</td>
            <td>${paulo.pontos}</td>
            <td><button onClick="adicionarVitoria(paulo)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(paulo)">Empate</button></td>
            <td><button onClick="adicionarDerrota(paulo)">Derrota</button></td>
          </tr>
          <tr>
            <td>${rafa.nome}</td>
            <td>${rafa.vitoria}</td>
            <td>${rafa.empate}</td>
            <td>${rafa.derrota}</td>
            <td>${rafa.pontos}</td>
            <td><button onClick="adicionarVitoria(rafa)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(rafa)">Empate</button></td>
            <td><button onClick="adicionarDerrota(rafa)">Derrota</button></td>
          </tr>
          <tr>
        <td>${gui.nome}</td>
            <td>${gui.vitoria}</td>
            <td>${gui.empate}</td>
            <td>${gui.derrota}</td>
            <td>${gui.pontos}</td>
            <td><button onClick="adicionarVitoria(gui)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(gui)">Empate</button></td>
            <td><button onClick="adicionarDerrota(gui)">Derrota</button></td>
          </tr>
    `;
  }
  
  
    function adicionarVitoria(jogador){
      jogador.vitoria++
      jogador.pontos = jogador.pontos + 3;
      exibirNaTela();
    }
      
    function adicionarEmpate(jogador){
      jogador.empate++
      jogador.pontos++
      exibirNaTela();
        
    }
    function adicionarDerrota(jogador){
      jogador.derrota++
      exibirNaTela();
    }
    function patroaManda(jogador){
      jogador.patroaManda--
      jogador.pontos = jogador.pontos - 3;
      exibirNaTela();
    }