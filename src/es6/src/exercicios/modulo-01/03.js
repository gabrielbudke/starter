// 3.1
const array = [1, 2, 3, 4, 5];
const novoArray = array.map(item => item + 10);
console.log('[modulo-1][03][3.1]', novoArray);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Fulano', idade: 23 }
const mostrarIdade = (usuario) => usuario.idade;
console.log('[modulo-1][03][3.2]', mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Fulano";
const idade = 23;

const mostrarUsuario = (nome = 'Fulano', idade = 18) => {
   return { nome, idade };
}

console.log('[modulo-1][03][3.3][s/ parâmetro padrão]', mostraUsuario(nome, idade));
console.log('[modulo-1][03][3.3][c/ parâmetro padrão]', mostraUsuario(nome));

// 3.4
const promise = () => {
   return new Promise((resolve, reject) => resolve('[03][3.4] Bem-vindo Promisse com ArrowFunction'));
}
promise.then(result => console.log(result));