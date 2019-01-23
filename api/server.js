require ('dotenv').config ();

const express = require ('express');
const helmet = require ('helmet');
const knex = require ('knex');
const bcrypt = require ('bcryptjs'); // added
const jwt = require ('jsonwebtoken');
const server = express ();

server.use (express.json ());
server.use (helmet ());

//routes
server.get ('/', (req, res) => {
  res.send (`API working.\n Sanity Check\n Test Route!`);
});

module.exports = server;
