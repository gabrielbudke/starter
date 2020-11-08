// 4.1 Desestruturação simples
const empresa = {
   nome: 'Rocketseat',
   endereco: {
      cidade: 'Rio do Sul',
      estado: 'SC',
   }
};

const { nome, endereco: { cidade, estado } } = empresa;
console.log('[04][4.1]', `${nome}, ${cidade}/${estado}`);

// 4.2 Desestruturação em parâmetros
function mostraInfo({ nome, idade }) {
   return `${nome} tem ${idade} anos.`
}

console.log('[04][4.2]', mostraInfo({ nome: 'Gabriel', idade: 21 }));

