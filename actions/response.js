// send text
const sendText = async (client, to, text='desde el bot') => {
    console.log('enviando client', client);
    console.log('enviando mensaje', to);
    
    await client
        .sendText(to, text)
        .then((result) => {
            console.log('Result: ', result); //return object success
        })
      
        .catch((err) => {
            console.error('Error when sending: ', err); //return object error
    });    
}

module.exports = {
    sendText,
}