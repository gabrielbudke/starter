<div align="center">
   <img src="../../../../../.github/images/es6.png" width="180px" height="150px">   
</div>

<h2 align="center">
  Módulo 01
</h2>

<h3 align="center">
   ECMAScript+
</h3>

<p align="center" >    
  <img alt="Made by Gabriel B Sousa" src="https://img.shields.io/static/v1?label=made%20by&message=Gabriel%20Sousa&color=202024&style=flat-square">  

  <img alt="Last commit" src="https://img.shields.io/github/last-commit/gabrielbudke/starter?color=202024&style=flat-square">
</p>

## :pencil: 1º Exercício

Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
extender uma segunda classe chamada "Usuario".

A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
`true` na classe.

Agora com suas classes formatadas, adicione um método na classe Usuario chamado `isAdmin` que
retorna se o usuário é administrador ou não baseado na propriedade `admin` ser `true` ou `false`

```javascript
const User = new Usuario('email@teste.com', 'senha123');
const Admin = new Admin('email@teste.com', 'senha123');

console.log(User.isAdmin()) // false
console.log(Adm.isAdmin()) // true
```


## :pencil: 2º Exercício

A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):

```javascript
const usuarios = [
   { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
   { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
   { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
```
### 2.1 Utilizando o map

Crie uma variável que contenha todas idades dos usuários: `[23, 15, 30]`

### 2.1 Utilizando o filter

Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: `[{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]`

### 2.3 Utilizando o find

Crie uma variável que procura por um usuário que trabalhe na empresa Google: `undefined`

### 2.4 Unindo operações

Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos:

```javascript
// Resultado:
[
   { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
   { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]
```

## :pencil: 3º Exercício

Converta as funções nos seguintes trechos de código em Arrow Functions:

```javascript
// 3.1
const arr = [1, 2, 3, 4, 5];

arr.map(function(item) {
   return item + 10;
});
```
```javascript
// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Gabriel', idade: 21 };

function mostraIdade(usuario) {
   return usuario.idade;
}

mostraIdade(usuario);
```
```javascript
// 3.3
// Dica: Utilize uma constante pra function
const nome = "Gabriel";
const idade = 35;
function mostraUsuario(nome = 'Gabriel', idade = 21) {
   return { nome, idade };
}

mostraUsuario(nome, idade);
mostraUsuario(nome);
```
```javascript
// 3.4
const promise = function() {
   return new Promise(function(resolve, reject) {
      return resolve();
   })
}
```

## :pencil: 4º Exercício

### 4.1 Desestruturação simples

A partir do seguinte objeto:

```javascript
const empresa = {
   nome: 'Rocketseat',
   endereco: {
      cidade: 'Rio do Sul',
      estado: 'SC',
   }
};
```
Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
fim deve ser possível fazer o seguinte:

```javascript
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC
```

### 4.2 Desestruturação em parâmetros

Na seguinte função:

```javascript
function mostraInfo(usuario) {
   return `${usuario.nome} tem ${usuario.idade} anos.`;
}

mostraInfo({ nome: 'Gabriel', idade: 21 })
```
Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
separadamente e a função poder retornar apenas:

```javascript
return `${nome} tem ${idade} anos.`;
```

## :pencil: 5º Exercício

Utilizando o operador de rest/spread (...) realize as seguintes operações:

### 5.1 Rest 
A partir do array: `const arr = [1, 2, 3, 4, 5, 6]`, defina uma variável `x` que recebe a primeira
posição do vetor e outra variável `y` que recebe todo restante dos dados

```javascript
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]
```
Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

```javascript
// function soma...
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3
```

### 5.1 Spread 

A partir do objeto e utilizando o operador spread:

```javascript
const usuario = {
   nome: 'Diego',
   idade: 23,
   endereco: {
      cidade: 'Rio do Sul',
      uf: 'SC',
      pais: 'Brasil',
      }
};
```

Crie uma variável `usuario2` que contenha todos os dados do usuário porém com nome `Gabriel`.

Crie uma variável `usuario3` que contenha todos os dados do usuário porém com cidade `Lontras`.

## :pencil: 6º Exercício

Converta o seguinte trecho de código utilizando Template Literals:

```javascript
const usuario = 'Diego';
const idade = 23;

console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
```

## :pencil: 7º Exercício

Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:

```javascript
const nome = 'Gabriel';
const idade = 21;

const usuario = {
   nome: nome,
   idade: idade,
   cidade: 'Rio do Sul',
};
```
---
Made by Gabriel Sousa