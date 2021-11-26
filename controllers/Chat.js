const axios = require('axios');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');
const { sendText, sendImage, sendContact } = require('../actions/response');
const { json } = require('express');
var client_global, file_general;

const start = (client) => {
    client_global = client;

    client.onMessage( async (message) => {

  });
}

// Funciones de envío desde el API a Venom

const postReceiveMessage = async( req, res ) => {
    return res.status(200).json(req.body)
  }

// Envío para texto
const postSendText = async( req, res ) => {

    const { to, text } = req.body;
  
    let to_correct = to+'@c.us'
  
    sendText(client_global, to_correct, text);
}

// Envío para Imagen
const postSendImage = async( req, res ) => {

  const { to, url } = req.body

  let to_correct = to+'@c.us'

  sendImage(client_global, to_correct, url);
}

// Envío para Contacto
const postSendContact = async( req, res ) => {

  const { to, number, name } = req.body;

  let to_correct = to+'@c.us'
  
  sendContact(client_global, to_correct, number, name);
}

module.exports = {
  postReceiveMessage,
  postSendText,
  postSendImage,
  postSendContact,
  start
}