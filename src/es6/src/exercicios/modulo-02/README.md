<div align="center">
   <img src="../../../../../.github/images/es6.png" width="180px" height="150px">   
</div>

<h2 align="center">
  Módulo 02
</h2>

<h3 align="center">
   ECMAScript+
</h3>

<p align="center" >    
  <img alt="Made by Gabriel B Sousa" src="https://img.shields.io/static/v1?label=made%20by&message=Gabriel%20Sousa&color=202024&style=flat-square">  

  <img alt="Last commit" src="https://img.shields.io/github/last-commit/gabrielbudke/starter?color=202024&style=flat-square">
</p>

<p>
   Todos os exercícios abaixo necessitam que você esteja com o Webpack configurado.
</p>

## :pencil: 1º Exercício

Crie um arquivo chamado `functions.js` com o seguinte conteúdo:

```javascript
export const idade = 23;

export default class Usuario {
   static info() {
      console.log('Apenas teste');
   }
}
```
### 1.1

Agora em seu arquivo principal import apenas a classe Usuario renomeando-a para `ClasseUsuario`
e chame a função `info()`;

### 1.2

Em seu arquivo principal importe a variável de idade e exiba a mesma em tela;

### 1.3
Em seu arquivo principal importe tanto a classe quanto a variável idade e renomeie a variável idade
para `IdadeUsuario`

---
Made by Gabriel Sousa