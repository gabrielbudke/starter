const reposElement = document.querySelector('.repos');
const buttonElement = document.querySelector('.search-button');
const inputElement = document.querySelector('input');

buttonElement.onclick = function() {
   const user = inputElement.value;
   handleSearchRepositoriesByUser(user);
}

function renderLoading() {
   reposElement.innerHTML = '';

   const textElement = document.createTextNode('Carregando...');
   const loadingElement = document.createElement('li');
   loadingElement.appendChild(textElement);

   reposElement.appendChild(textElement);
}

function renderError() {
   reposElement.innerHTML = '';

   const textElement = document.createTextNode('Erro!! Usuário não encontrado!');      
   const errorElement = document.createElement('li');
   errorElement.style.color = "#F00";

   errorElement.appendChild(textElement);
   reposElement.appendChild(errorElement);

}

function renderRepositories(repositories) {
   reposElement.innerHTML = '';

   for (const repo of repositories) {
      const repoName = document.createTextNode(repo.name);
      const repoElement = document.createElement('li');
      repoElement.appendChild(repoName);

      reposElement.appendChild(repoElement);
   }

}

function handleSearchRepositoriesByUser(user) {

   if(!user) {
      return alert('Usuário precisa ser informado!');
   }

   renderLoading();

   axios.get(`https://api.github.com/users/${user}/repos`)
      .then(function(response) {
         renderRepositories(response.data);
      })
      .catch(function(error) {
         renderError();
      });      
}
