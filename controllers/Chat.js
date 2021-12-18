const axios = require('axios');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');
const { sendImage, sendText, sendFile, sendVoice, sendVideo, sendLocation, sendContact, sendContactList, sendButtons, sendImageDefault, sendDefaultVideo } = require('../actions/response');
const { json } = require('express');
var client_global, file_general;

const start = (client) => {
  client_global = client;

  client.onMessage( async (message) => {

    // Respuestas Automáticas del Venom Bot

    if (message.body === 'hola' || message.body === 'Hola') {
      sendText( client, message.from ) 
    }
    if (message.body === 'Quiero una imagen') {
      sendImageDefault( client, message.from ) 
    }
    if (message.body === 'Quiero un vídeo') {
      sendDefaultVideo( client, message.from ) 
    }
    if (message.body === 'Ubicacion' || message.body === 'ubicacion') {
      sendLocation( client, message ) 
    }
    if (message.body === 'Opciones' || message.body === 'opciones') {
      sendButtons( client, message ); 
    }
    if (message.body === 'Imagen' || message.body === 'imagen') {
      sendImage( client, message ) 
    }
    if (message.body === 'Archivo' || message.body === 'archivo') {
      sendFile( client, message );
    }
    if (message.body === 'Contacto' || message.body === 'contacto') {
      sendContact( client, message );
    }
    if (message.body === 'Lista Contactos' || message.body === 'lista contactos') {
      sendContactList( client, message );
    }
    if (message.body === 'Audio' || message.body === 'audio') {
      sendVoice( client, message );
    }
    if (message.body === 'Video' || message.body === 'video') {
      sendVideo( client, message );
    }
  });
}

// Funciones de envío desde el API a Venom

const postReceiveMessage = async( req, res ) => {
  return res.status(200).json(req.body)
}

const postSendMessage = async( req, res ) => {
  const arreglo = req.body
  const generado = JSON.stringify(arreglo)

  console.log("Este es el arreglo de datos", arreglo)

  if (arreglo.type === 'text' || arreglo.type === 'chat') {
    console.log("Entro a la opcion de texto")
    postSendText(req, res)
  }
  else if (arreglo.type.includes('image')) {
    console.log("Entró a la opcion de imagen")
    postSendImage(req, res)
  }
  else if (arreglo.type.includes('audio')) {
    console.log("Entró a la opcion de voice")
    postSendVoice(req, res)
  }
  else if (arreglo.type.includes('video')) {
    console.log("Entró a la opcion de video")
    postSendVideo(req, res)
  }
  else if (arreglo.type.includes('document') || arreglo.type.includes('application')) {
    console.log("Entró a la opcion de documento")
    postSendFile(req, res)
  }
  return res.status(200).json({
    status: "ok",
    msg: "mensaje enviado"
  })
}

// Envío para texto
const postSendText = async( req, res ) => {

  const { to, text } = req.body;
  
  let to_correct = to+'@c.us'

  console.log("Esto son los datos que se envian", to_correct, text)
  const { firstClient } = require('../queues');
  firstClient.add({ to, text });
  
  sendText(client_global, to_correct, text);
}

// Envío para Imagen
const postSendImage = async( req, res ) => {

  const { to, url } = req.body

  let to_correct = to+'@c.us'

  sendImage(client_global, to_correct, url);
}

const postSendFile = async( req, res ) => {

  const { to, url } = req.body;

  $: to_correct = to+'@c.us'
  
  sendFile(client_global, to_correct, url);
}

const postSendVoice = async( req, res ) => {

  const { to, url } = req.body;

  let to_correct = to+'@c.us'
  
  sendVoice(client_global, to_correct, url);
}

const postSendVideo = async( req, res ) => {

  const { to, url, text } = req.body;

  let to_correct = to+'@c.us'
  
  sendVideo(client_global, to_correct, url, text);
}

const postSendLocation = async( req, res ) => {

  const { to, latitude, longitude, country } = req.body;

  let to_correct = to+'@c.us'
  
  sendLocation(client_global, to_correct, latitude, longitude, country);
}

const postSendContact = async( req, res ) => {

  const { to, number, name } = req.body;

  let to_correct = to+'@c.us'
  
  sendContact(client_global, to_correct, number, name);
}

const postSendContactList = async( req, res ) => {

  const { to, number_1, number_2 } = req.body;

  let to_correct = to+'@c.us'
  
  sendContactList(client_global, to_correct, number_1, number_2);
}

module.exports = {
  postReceiveMessage,
  postSendText,
  postSendImage,
  postSendFile,
  postSendVoice,
  postSendVideo,
  postSendLocation,
  postSendContact,
  postSendContactList,
  postSendMessage,
  start
}