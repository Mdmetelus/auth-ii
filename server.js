const express = require ('express');
const helmet = require ('helmet');
const server = express ();

server.use (express.json ());
server.use (helmet ());

//routes
server.get ('/', (req, res) => {
  res.send (`API working.\n Sanity Check\n Test Route!`);
});

module.exports = server;
