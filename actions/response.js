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

// send Image
const sendImage = async (client, to, image)  => {
    if (image == "") {
      image = "files/images/response.jpg"
    }
    await client.sendImage(
        to,
        image,
        'image-name',
        'cosa generica'
    )
    .then((result) => {
        console.log('Result: imagen enciaa', result); //return object success
    })
    .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
    });
}

// send contact 
const sendContact = async (client, from, number, name) => {
    await client
    .sendContactVcard(from, number, name)
    .then((result) => {
        console.log('Result: ', result); //return object success
    })
    .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
    });
}

module.exports = {
    sendText,
    sendImage,
    sendContact,
}