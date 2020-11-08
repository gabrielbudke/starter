class Usuario {
   constructor(email, password) {
      this.email = email;
      this.password = password;
   }

   isAdmin() {
      return this.admin ? true : false;
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

const usuario = new Usuario('email@contato.com', '123456');
const admin = new Admin('admin@contato.com', 'adminadmin');

console.log('[01][usuario]:', usuario.showInfo());
console.log('[01][admin]:', admin.showInfo());

console.log('[01][usuario is admin]:', usuario.isAdmin());
console.log('[01][admin is admin]:', admin.isAdmin());
