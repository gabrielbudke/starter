const listElement = document.querySelector('.container ul');
const inputElement = document.querySelector('.container input');
const buttonElement = document.querySelector('.container button');

// const todos = [
//    // To-do default
//    'Lembra de comprar café',
//     'Estudar javascript',
//     'Enviar e-mail para transportadora'
// ];

function saveToStorage() {
   localStorage.setItem('list_todos', JSON.stringify(todos));
}

const todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {   

   listElement.innerHTML = '';

   for(todo of todos) {
      const itemElement = document.createElement('li');
      const textItemElement = document.createTextNode(todo);
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', '#')

      const position = todos.indexOf(todo);
      linkElement.setAttribute('onclick', `deleteTodo(${position})`);

      linkElement.appendChild(document.createTextNode('Excluir'));
   
      itemElement.appendChild(textItemElement);
      itemElement.appendChild(linkElement);

      listElement.appendChild(itemElement);   
   }

   saveToStorage();

}

renderTodos();

function addTodo() {
   const textInput = inputElement.value;
   
   if(textInput) {
      todos.push(textInput);
   }

   inputElement.value = '';
   renderTodos();
   saveToStorage();

}

buttonElement.onclick = addTodo;

function deleteTodo(position) {
   todos.splice(position, 1);   
   renderTodos();
   saveToStorage();
   
}