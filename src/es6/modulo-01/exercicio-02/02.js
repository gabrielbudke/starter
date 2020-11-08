const usuarios = [
   { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
   { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
   { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idadeUsuarios = usuarios.map(function(usuario) {
   return usuario.idade;
});

const usuariosRocketseatMaiorIdade = usuarios.filter(function(usuario) {
   return usuario.empresa === 'Rocketseat' && usuario.idade > 18;
});

const usuarioTrabalhaGoogle = usuarios.find(function(usuario) {
   return usuario.empresa === 'Google';
});

const usuariosEditados = usuarios.map(function(usuario) {
   return { ...usuario, idade: usuario.idade * 2 }
}).filter(function(usuario) {
   return usuario.idade <= 50;
});

console.log('[02][2.1][idadeUsuarios]:', idadeUsuarios);
console.log('[02][2.2][usuariosRocketseatMaiorIdade]:', usuariosRocketseatMaiorIdade);
console.log('[02][2.3][usuarioTrabalhaGoogle]:', usuarioTrabalhaGoogle);
console.log('[02][2.4][usuariosEditados]:', usuariosEditados);
