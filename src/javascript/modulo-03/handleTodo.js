const listElement = document.querySelector('.container ul');
const inputElement = document.querySelector('.container input');
const buttonElement = document.querySelector('.container button');

const todos = [
   // To-do default
   'Lembra de comprar café',
   'Estudar javascript',
   'Enviar e-mail para transportadora'
];

buttonElement.onclick = addTodo;

function renderTodos() {   

   listElement.innerHTML = '';

   for(todo of todos) {
      const itemElement = document.createElement('li');
      const textItemElement = document.createTextNode(todo);
   
      itemElement.appendChild(textItemElement);
      listElement.appendChild(itemElement);   
   }
}

renderTodos();

function addTodo() {
   const textInput = inputElement.value;
   todos.push(textInput);

   inputElement.value = '';
   renderTodos();
}