<div align="center">
   <img src="../../../.github/images/js.png" width="150px">   
</div>

<h2 align="center">
  Módulo 02
</h2>

<h3 align="center">
   Manipulando a DOM (Árvore de Elementos HTML)
</h3>

<p align="center" >    
  <img alt="Made by Gabriel B Sousa" src="https://img.shields.io/static/v1?label=made%20by&message=Gabriel%20Sousa&color=202024&style=flat-square">  

  <img alt="Last commit" src="https://img.shields.io/github/last-commit/gabrielbudke/starter?color=202024&style=flat-square">
</p>

## :pencil: 1º Exercício

Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela.

## :pencil: 2º Exercício

Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

```javascript
function getRandomColor() {
   const letters = "0123456789ABCDEF";
   let color = "#";
   
   for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   
   return color;
}

const newColor = getRandomColor(); // Ex: #E943F0
```

## :pencil: 3º Exercício

A partir do seguinte vetor:

```javascript
const names = ["Diego", "Gabriel", "Lucas"];
```
Preencha uma lista (`<ul>`) no HTML com os itens da seguinte forma:
- Diego
- Gabriel
- Lucas

## :pencil: 4º Exercício

Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:

```HTML
<input type="text" name="nome">
<button onClick="adicionar()">Adicionar</button>
```
Ao clicar no botão, a função `adicionar()` deve ser disparada adicionando um novo item a lista de
nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.

