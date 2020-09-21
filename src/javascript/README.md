<div align="center">
   <img src="../../.github/images/js.png" width="150px">   
</div>

<h3 align="center">
  Exercicíos de Javascript do curso Starter da Rocketseat :rocket:
</h3>

<p align="center" >    
  <img alt="Made by Gabriel B Sousa" src="https://img.shields.io/static/v1?label=made%20by&message=Gabriel%20Sousa&color=202024&style=flat-square">  
</p>

## :pencil: 1º Exercício
Crie uma função que dado o objeto a seguir:
```javascript
const endereco = {
   rua: "Rua dos pinheiros",
   numero: 1293,
   bairro: "Centro",
   cidade: "São Paulo",
   uf: "SP"
};
```
Retorne o seguinte conteúdo:
```
O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.
```
---
## :pencil: 2º Exercício
Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
```javascript
function pares(x, y) {
 // Código aqui ...
}
pares(32, 321);
```
---
## :pencil: 3º Exercício
Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano `true/false` caso exista ou não.
```javascript
function haveSkill(skills) {
 // Código aqui ...
}

const skills = ["Javascript", "ReactJS", "React Native"];
haveSkill(skills); // true ou false

```
---
## :pencil: 4º Exercício
Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
```javascript
function experiencia(anos) {
 // Código aqui ...
}

let anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

```
---
## :pencil: 5º Exercício
Dado o seguinte vetor de objetos:
```javascript
const usuarios = [
   {
      nome: "Diego",
      habilidades: ["Javascript", "ReactJS", "Redux"]
   },
   {
      nome: "Gabriel",
      habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
   }
];
```
Escreva uma função que produza o seguinte resultado:
```
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
```

