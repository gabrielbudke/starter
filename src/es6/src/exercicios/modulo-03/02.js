import axios from 'axios';

export async function getUserFromGithub(user) {
   try {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      console.log('[response]', response.data);      
   } catch (error) {
      console.error('[error]', 'Usuário não existe!');
   }
}

getUserFromGithub('gabrielbudke');
getUserFromGithub('gabrielbudkeasge')