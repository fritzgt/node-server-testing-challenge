const express = require('express');

const server = express();

const db = require('../test-model');

server.use(express.json());

//for testing purposes
server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

module.exports = server;
