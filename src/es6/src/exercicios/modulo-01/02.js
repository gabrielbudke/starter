const usuarios = [
   { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
   { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
   { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(usuario => usuario.idade);

const usuarioMaiorIdadeTrabalhaRocketseat = usuarios.filter(usuario => {
   return usuario.idade > 18 && usuario.empresa === 'Rocketseat';
});

const usuarioTrabalhaGoogle = usuarios.find(usuario => usuario.empresa === 'Google');

const usuariosEditados = usuarios.map(usuario => {
   return { ...usuario, idade: usuario.idade * 2 }
}).filter(usuario => usuario.idade <= 50);

console.log('[modulo-1][02][2.1][idades]', idades);
console.log('[modulo-1][02][2.2][usuarioMaiorIdadeTrabalhaRocketseat]', usuarioMaiorIdadeTrabalhaRocketseat);
console.log('[modulo-1][02][2.3][usuarioTrabalhaGoogle]', usuarioTrabalhaGoogle);
console.log('[modulo-1][02][2.4][usuarioEditados]', usuariosEditados);

export { 
   idades, 
   usuarioMaiorIdadeTrabalhaRocketseat,
   usuarioTrabalhaGoogle,
   usuariosEditados
} 