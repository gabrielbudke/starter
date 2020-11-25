import api from './services/api';

class App {
   constructor() {
      this.repositories = [];

      this.formElement = document.querySelector('#repo-form');
      this.inputElement = document.querySelector('input[name=repository]');
      this.listElement = document.querySelector('#repo-list');

      this.registerHandlers();
   }

   registerHandlers() {      
      this.formElement.onsubmit = event => this.addRepositories(event);
   }

   handleLoading(loading = true) {
      if(loading) {
         let loadingElement = document.createElement('span');
         loadingElement.appendChild(document.createTextNode('Carregando ...'));
         loadingElement.setAttribute('id', 'loading');

         this.formElement.appendChild(loadingElement);
      } else {
         document.querySelector('#loading').remove();
      }
   }

   async addRepositories(event) {
      event.preventDefault();      

      const repository = this.inputElement.value;
      
      if(repository.length === 0) {
         return;
      }

      this.handleLoading();

      try {
         const response = await api.get(`/repos/${repository}`);    
         
         const { name, description, owner: { avatar_url }, html_url } = response.data;

         this.repositories.push({ name, description, avatar_url, html_url });

         this.inputElement.value = '';
         
         this.renderRepositories();

      } catch (error) {
         alert('Repositório não existe!');
         console.error('[error]', error);
      }      

      this.handleLoading(false);

   }

   renderRepositories() {
      // Apaga os elemetos do HTML
      this.listElement.innerHTML = "";

      this.repositories.forEach(repo => {
         let imgElement = document.createElement('img');         
         imgElement.setAttribute('src', repo.avatar_url);

         let titleElement = document.createElement('strong');         
         titleElement.appendChild(document.createTextNode(repo.name));

         let descriptionElement = document.createElement('p');
         descriptionElement.appendChild(document.createTextNode(repo.description));

         let linkElement = document.createElement('a');
         linkElement.setAttribute('target', '_blank');
         linkElement.setAttribute('href', repo.url);
         linkElement.appendChild(document.createTextNode('Acessar'));

         let itemElement = document.createElement('li');
         itemElement.appendChild(imgElement);
         itemElement.appendChild(titleElement);
         itemElement.appendChild(descriptionElement);
         itemElement.appendChild(linkElement);

         this.listElement.appendChild(itemElement);

      });
   }
}

new App();