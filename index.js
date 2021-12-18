require('dotenv').config();

const express = require('express');
const cors = require('cors');

// Configuración Bull

const { queues } = require('./queues')
const {
  config: { port },
} = require('./config');


// Crear el servidor de express
const app = express();

// Configurar CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

// Directorio público
app.use( express.static('public') );


// crea las instancias de las sessions de whatsapp
const { sessions } = require('./actions/session')
sessions();

// Rutas
app.use( '/api/chat', require('./routes/chat') );


//server
app.listen( process.env.PORT2, () => {
  console.log('Servidor Venom corriendo en puerto ' + process.env.PORT2 );
});

require('./server')(app, port, queues);