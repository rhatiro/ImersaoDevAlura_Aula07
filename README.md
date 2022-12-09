# SuperTrunfo - Lógica do jogo

### Demonstração

![](demo.gif)

https://imersao.dev/aulas/aula07-supertrunfo

### Conteúdo detalhado desta aula:

- Criar as cartas do jogo e definir seus atributos;
- Desenvolver uma função para sortear uma carta para o jogador e outra para a máquina;
- Exibindo os atributos das cartas na tela para o jogador;
- Obter o atribudo escolhido pelo jogador e comparar com a carta da máquina;
- Comparar o atributo de ambas as cartas e definir um vencedor.

### Desafios desta aula!

- [x] Verificar o que acontece caso você não selecione nenhum dos atributos e como solucionar;

```html
<button type="button" id="btnJogar" onclick="jogar()" disabled="true">
  Jogar
</button>
```

```js
onclick = "botaoJogar()";
```

```js
function botaoJogar() {
  document.getElementById("btnJogar").disabled = false;
}
```

- [x] Utilizar personagens que você gosta para criar as cartas e compartilhe com o pessoal lá na comunidade do Discord!
- [x] Adicionar a imagem do personagem assim que você selecionar a carta dele.

A [Pen](https://codepen.io/rhatiro/pen/JjZawpO) by [rhatiro](https://codepen.io/rhatiro) on [CodePen](https://codepen.io).

[License](https://codepen.io/license/pen/JjZawpO).
