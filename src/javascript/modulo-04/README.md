<div align="center">
   <img src="../../../.github/images/js.png" width="150px">   
</div>

<h2 align="center">
  Módulo 04
</h2>

<h3 align="center">
   Javascript Assíncrono
</h3>

<p align="center" >    
  <img alt="Made by Gabriel B Sousa" src="https://img.shields.io/static/v1?label=made%20by&message=Gabriel%20Sousa&color=202024&style=flat-square">  

  <img alt="Last commit" src="https://img.shields.io/github/last-commit/gabrielbudke/starter?color=202024&style=flat-square">
</p>

## :pencil: 1º Exercício

Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no `.then`, caso contrário, no `.catch`.

```javascript
function checaIdade(idade) {
 // Retornar uma promise
}

checaIdade(20)
   .then(function() {
      console.log("Maior que 18");
   })
   .catch(function() {
      console.log("Menor que 18");
   });
```

## :pencil: 2º Exercício

Crie uma tela com um `<input>` que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:

URL de exemplo: https://api.github.com/users/gabrielbudke/repos

Basta alterar "gabrielbudke" pelo nome do usuário.

```html
<input type="text" name="user">
<button onclick="">Adicionar</button>
```
Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:

```html
<ul>
 <li>repo1</li>
 <li>repo2</li>
 <li>repo3</li>
 <li>repo4</li>
 <li>repo5</li>
</ul>
```

## :pencil: 3º Exercício

A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
da lista apenas enquanto a requisição estiver acontecendo:

```html
<li>Carregando...</li>

```
Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.

Dica: Quando o usuário não existe, a requisição irá cair no `.catch` com código de erro 404.

---
Made by Gabriel Sousa