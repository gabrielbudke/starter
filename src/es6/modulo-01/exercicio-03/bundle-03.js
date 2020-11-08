"use strict";

// 3.1
var arr = [1, 2, 3, 4, 5];
console.log('[03][3.1]', arr.map(function (item) {
  return item + 10;
})); // 3.2
// Dica: utilize uma constante pra function

var usuario = {
  nome: 'Gabriel',
  idade: 21
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log('[03][3.2]', mostraIdade(usuario)); // 3.3
// Dica: utilize uma constante pra function

var nome = "Gabriel";
var idade = 35;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Gabriel';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 21;
  return {
    nome: nome,
    idade: idade
  };
};

console.log('[03][3.3][s/ parâmetro padrão]', mostraUsuario(nome, idade));
console.log('[03][3.3][c/ parâmetro padrão]', mostraUsuario(nome)); // 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve('[03][3.4] Bem-vindo Promisse com ArrowFunction');
  });
};

promise().then(function (result) {
  return console.log(result);
});
