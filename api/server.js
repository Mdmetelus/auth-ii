require ('dotenv').config ();

const express = require ('express');
const helmet = require ('helmet');
const knex = require ('knex');
const bcrypt = require ('bcryptjs'); // added
const jwt = require ('jsonwebtoken');

const knexConfig = require('../knexfile.js');

const server = express ();


const db = knex(knexConfig.development);

server.use (express.json ());
server.use (helmet ());

//routes
server.get ('/', (req, res) => {
  res.send (`API working.\n CheckRoute\n Test Route!`);
});

//Endpoints
server.post ('/api/register', (req, res) => {
  const userInfo = req.body;

  const hash = bcrypt.hashSync (userInfo.password, 16);

  userInfo.password = hash;
  db('users').insert(userInfo).then( ids => {
    res.status(201).json(ids);
  }).catch(err => res.status(500).json(err));
  
});


function generateUserToken(user) {
  const payload = {
    username: user.username,
    password: user.pasword,
    department:user.department,
  };

  const secret = process.env.JWT_SECRET;

  const options= {
    expiresIn: '60m',

  }

  return jwt.sign(payload,secret, options);
}

module.exports = server;
