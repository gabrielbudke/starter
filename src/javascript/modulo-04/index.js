axios.get('https://api.github.com/users/gabrielbudke')
   .then(function(response) {
      console.log(response);
   })
   .catch(function(error) {
      console.warn(error)
   });


/*
const handlePromisse = function() {
   return new Promise(function(resolve, reject) {
      
      let xhr = new XMLHttpRequest();
      
      xhr.open('GET', 'https://api.github.com/users/gabrielbudke');
      xhr.send(null);
      
      xhr.onreadystatechange = function() {
         if(xhr.readyState === 4) {
            if(xhr.status === 200) {
               resolve(JSON.parse(xhr.responseText));
            } else {
               //reject('Deu ruim!');
               reject('Erro na requisição');
            }
         }
      }

   });
}
*/

