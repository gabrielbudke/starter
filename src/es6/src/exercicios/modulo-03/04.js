import axios from 'axios';

const buscaUsuario = async (usuario) => {
   try {
      const response = await axios.get(`https://api.github.com/users/${usuario}`);
      console.log('[response]', response.data);
   } catch(error) {
      console.error('[error]', 'Usuario não existe!');
   }
}

buscaUsuario('gabrielbudke');