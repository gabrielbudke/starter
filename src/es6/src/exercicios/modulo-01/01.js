class Usuario {
   constructor(email, password) {
      this.email = email;
      this.password = password;
   }

   isAdmin() {
      return this.admin === true;
   }

   showInfo() {
      return {
         email: this.email,
         password: this.password,
         isAdmin: this.isAdmin()
      }
   }
}

class Admin extends Usuario {
   constructor(email, password) {
      super(email, password);
      this.admin = true;
   }
}

const usuario = new Usuario('email@teste.com', 'senha123');
const admin = new Admin('email.admin@teste.com', 'senha123');

console.log('[1-modulo][01][usuario is admin]', usuario.isAdmin());
console.log('[1-modulo][01][admin is admin]', admin.isAdmin());

export { usuario, admin }


