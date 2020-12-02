const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

/* Schema: quais são os  dos campos 
   e que tipos de valores esses campos
   vão guardar.
 */
const ProductSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   url: {
      type: String,
      required: true
   },
   createAt: {
      type: Date,
      default: Date.now
   }
});

ProductSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Product', ProductSchema);