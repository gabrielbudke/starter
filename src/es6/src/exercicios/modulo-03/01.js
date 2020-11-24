// Funão delay aciona o .then após 1 segundo.
const delay = () => new Promise((resolve, reject) => {
   setTimeout(() => {
      return resolve();
   }, 1000)
});

async function umPorSegundo() {
   try {
      await delay();
      console.log('1s');

      await delay();
      console.log('2s');

      await delay();
      console.log('3s');

   } catch (error) {
      console.error('[error]', error);
   }
}

umPorSegundo();