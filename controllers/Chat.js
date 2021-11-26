const axios = require('axios');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');
const { sendText } = require('../actions/response');
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

const postSendText = async( req, res ) => {

    const { to, text } = req.body;
  
    let to_correct = to+'@c.us'
  
    sendText(client_global, to_correct, text);
}

module.exports = {
    postReceiveMessage,
    postSendText,
    start
}