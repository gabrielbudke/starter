const mongoose = require('mongoose');
const Product = require('../models/Product');

module.exports = {
   // Lista todos os registros do banco
   async index(request, response) {

      const { page = 1 } = request.query;

      const products = await Product.paginate({ }, { page , limit: 5 });

      return response.json(products);
   },

   // Buscar registro pelo ID
   async show(request, response) {
      try {
         const product = await Product.findById(request.params.id);         
         
         return response.json(product);         
      } catch (error) {
         return response.json({ message: 'Product not found' }).status(400);
      }            
   },

   // Cria um novo registro no banco
   async store(request, response) {      
      try {
         const product = await Product.create(request.body);
         
         return response.json(product);

      } catch (error) {
         return response.json({ message: `[Erro] ${error}` }).status(400);         
      }
      
   },

   async update(request, response) {
      try {
         const product = await Product.findByIdAndUpdate(request.params.id, request.body, { new: true, useFindAndModify: false });
         return response.json(product);
      } catch (error) {
         return response.json({ message: `[Error] ${error}` }).status(400);         
      }
   },

   async destroy(request, response) {
      try {
         await Product.findByIdAndRemove(request.params.id, { useFindAndModify: false });
         return response.json({ message: 'Product deleted with success'});
      } catch (error) {
         return response.json({ message: `[Error] ${error}` }).status(400);         
      }
   }

};