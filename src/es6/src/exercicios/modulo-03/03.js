import axios from 'axios';

class Github {
   static async getRepositories(repo) {
      try {
         const response = await axios.get(`https://api.github.com/repos/${repo}`);
         console.log('[repo]', response.data);
      } catch (error) {
         console.error('[error]', 'Repositório não existe!');
      }
   }
}

Github.getRepositories('gabrielbudke/starter');
Github.getRepositories('gabrielbudke/starterasdsad');
