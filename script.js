var carta1 = {
  nome: "Bulbassauro",
  atributos: {
    ataque: 7,
    defesa: 8,
    velocidade: 6
  },
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
};

var carta2 = {
  nome: "Squirtle",
  atributos: {
    ataque: 5,
    defesa: 6,
    velocidade: 8
  },
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
};

var carta3 = {
  nome: "Charmander",
  atributos: {
    ataque: 8,
    defesa: 5,
    velocidade: 7
  },
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
};

var cartas = [carta1, carta2, carta3];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;

  // document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();

  document.getElementById("form").scrollIntoView({ behavior: "smooth" })
}

function botaoJogar() {
  document.getElementById("btnJogar").disabled = false;
}

function exibirOpcoes() {
  document.getElementById("nomeCartaJogador").innerHTML =
    "Sua carta: " + cartaJogador.nome.toUpperCase();
  document.getElementById("nomeCartaMaquina").innerHTML =
    "Carta do adversário: " + cartaMaquina.nome.toUpperCase();

  document.getElementById("escolhaSeuAtributo").hidden = false;

  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "' onclick='botaoJogar()'>" +
      atributo +
      ": " +
      cartaJogador.atributos[atributo] +
      "<br/>";
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML =
      "Você venceu, " +
      cartaJogador.nome +
      "!!!" +
      "<br><br><img style='width: 50%' src='" +
      cartaJogador.imagem +
      "'>";
  } else if (valorCartaJogador < valorCartaMaquina) {
    elementoResultado.innerHTML =
      "Você perdeu, " +
      cartaJogador.nome +
      "!" +
      "<br>" +
      cartaMaquina.nome +
      " venceu com " +
      atributoSelecionado +
      " de " +
      valorCartaMaquina +
      "<br><br><img style='width: 50%' src='" +
      cartaMaquina.imagem +
      "'>";
  } else {
    elementoResultado.innerHTML = "Empate";
  }

  console.log(cartaMaquina);

  document.getElementById("btnJogar").disabled = true;
  document.getElementById("nomeCartaMaquina").hidden = false;
  document.getElementById("jogarNovamente").hidden = false;

  elementoResultado.scrollIntoView({ behavior: "smooth" });
}