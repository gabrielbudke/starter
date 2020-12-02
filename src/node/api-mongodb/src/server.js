const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

// Iniciando o App
const app = express();

// Conectando o database
mongoose.connect('mongodb+srv://admin:adminadmin@mycluster.64cnu.mongodb.net/starter?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true   
});

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333, function() {
   console.log('[server] Server running on port 3333')
});
