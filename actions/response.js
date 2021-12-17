// send text
const sendText = async (client, to, text) => { 
    
    await client
        .sendText(to, text)
        .then((result) => {
            console.log('Result: ', result); //return object success
        })
      
        .catch((err) => {
            console.error('Error when sending: ', err); //return object error
    });    
}

// Send Image Default
const sendImageDefault = async (client, from)  => {
    await client.sendImage(
        from,
        'https://generacionxbox.com/wp-content/uploads/2019/06/black-mesa-xen-generacion-xbox.jpg',
        'image-name',
        'cosa generica'
    )
    .then((result) => {
        console.log('Result: imagen envia', result); //return object success
    })
    .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
    });
}

const sendDefaultVideo = async (client, from) => {
    await client
    .sendLinkPreview(
        from, 
        'https://www.youtube.com/watch?v=K3i2P4Hf4UE&list=RDMMK3i2P4Hf4UE', 
        'Belinda - Ángel'
    )
    .then((result) => {
      console.log('Result: ', result); //return object success
    })
    .catch((erro) => {
      console.error('Error when sending: ', erro); //return object error
    });
}

// send Image
const sendImage = async (client, to, image, text)  => {
    await client
    
    .sendImage(
        to,
        image,
        'image-name',
        text
    )
    .then((result) => {
        console.log('Result: imagen enciaa', result); //return object success
    })
    .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
    });
}

// send Buttons
const sendButtons = async (client, message) => {
    const buttons = [
        {
            "buttonText": {
                "displayText": "Quiero una imagen"
            }
        },
        {
            "buttonText": {
                "displayText": "Quiero un vídeo"
            }
        }
    ]
    await client.sendButtons(message.from, '¡Bienvenido!', buttons, 'Puedes elegir entre las siguientes opciones para tener diferentes respuestas')
        
        .then((result) => {
            console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
        });
        console.log("Esto es lo que tiene buttons: ", buttons)
       
}
  
  
  // send location
  const sendLocation = async (client, from, latitude, longitude, country) => {
    await client
      .sendLocation(from, latitude, longitude, country)
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });
  }
  
  // send file PDF
  const sendFile = async (client, to, file) => {
    await client
      .sendFile(to, file, 'peru.pdf', 'Himno')
      .then((result) => {
        console.log('Result: ', result); //return object success
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
  
  // Send a list of contact cards
  const sendContactList = async (client, from, number_1, number_2 ) => {
    await client
    .sendContactVcardList(from, [
      number_1,
      number_2,
    ])
    .then((result) => {
      console.log('Result: ', result); //return object success
    })
    .catch((erro) => {
      console.error('Error when sending: ', erro); //return object error
    });
  }
  
  // Send audio file MP3
  const sendVoice = async (client, to, file) => {
    await client
    .sendVoice(to, file)
    .then((result) => {
      console.log('Result: ', result); //return object success
    })
    .catch((erro) => {
      console.error('Error when sending: ', erro); //return object error
    });
  }
  
// Automatically sends a link with the auto generated link preview. You can also add a custom message to be added.
const sendVideo = async (client, to, link, text) => {
    await client
    .sendLinkPreview(to, link, text)
    .then((result) => {
      console.log('Result: ', result); //return object success
    })
    .catch((erro) => {
      console.error('Error when sending: ', erro); //return object error
    });
}

module.exports = {
    sendImage,
    sendButtons,
    sendText,
    sendLocation,
    sendFile,
    sendContact,
    sendContactList,
    sendVoice,
    sendVideo,
    sendImageDefault,
    sendDefaultVideo
}