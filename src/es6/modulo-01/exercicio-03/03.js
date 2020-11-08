// 3.1
const arr = [1, 2, 3, 4, 5];
console.log('[03][3.1]', arr.map(item => item + 10));

// 3.2
// Dica: utilize uma constante pra function
const usuario = { nome: 'Gabriel', idade: 21 };
const mostraIdade = usuario => usuario.idade;

console.log('[03][3.2]', mostraIdade(usuario));

// 3.3
// Dica: utilize uma constante pra function
const nome = "Gabriel";
const idade = 35;

const mostraUsuario = (nome = 'Gabriel', idade = 21) => {
   return { nome, idade }
}

console.log('[03][3.3][s/ parâmetro padrão]', mostraUsuario(nome, idade));
console.log('[03][3.3][c/ parâmetro padrão]', mostraUsuario(nome));


// 3.4
const promise = () => new Promise((resolve, reject) => resolve('[03][3.4] Bem-vindo Promisse com ArrowFunction'))
promise().then(result => console.log(result));




