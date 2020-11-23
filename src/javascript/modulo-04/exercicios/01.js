const handleCheckUserAge = age => {
   return new Promise((resolve, reject) => {

      setTimeout(function() {
         if(age > 18) {
            return resolve('Usuário é maior de 18!');
         } else {
            return reject('Usuário não é maior de 18!');
         }
      }, 2000);

   });
}

handleCheckUserAge(20)
   .then(response => console.log(response))
   .catch(error => console.log(error));

