// REST
const arr = [1, 2, 3, 4, 5, 6];

const [ x, ...y ] = arr;
console.log('[modulo-01][05][5.1][rest]', x);
console.log('[modulo-01][05][5.1][rest]', y);

function soma(...params) {
   return params.reduce((total, next) => total + next);
}

console.log('[modulo-01][05][5.1][rest]', soma(1, 2, 3, 4, 5, 6));
console.log('[modulo-01][05][5.1][rest]', soma(1, 2));

// SPREAD
const usuario = {
   nome: 'Diego',
   idade: 23,
   endereco: {
      cidade: 'Rio do Sul',
      uf: 'SC',
      pais: 'Brasil',
   }
};

const usuario2 = { ...usuario, nome: 'Gabriel' };
console.log('[modulo-01][5.2][spread]', usuario2);

const usuario3 = { ...usuario, cidade: 'Lontras' };
console.log('[modulo-01][5.2][spread]', usuario3);



