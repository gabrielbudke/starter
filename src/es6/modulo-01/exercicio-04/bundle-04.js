"use strict";

// 4.1 Desestruturação simples
var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log('[04][4.1]', "".concat(nome, ", ").concat(cidade, "/").concat(estado)); // 4.2 Desestruturação em parâmetros

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log('[04][4.2]', mostraInfo({
  nome: 'Gabriel',
  idade: 21
}));
