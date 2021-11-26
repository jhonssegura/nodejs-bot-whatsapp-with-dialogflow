const axios = require('axios');
const { sendText } = require('../actions/response');

const start = (client) => {
  client.onMessage( async (message) => {
    console.log("Llegó a este punto", message.body)
    if (message.body === 'hola' || message.body === 'Hola') {
      sendText( client, message.from ) 
    }
    
  });
}

module.exports = {
  start,
}