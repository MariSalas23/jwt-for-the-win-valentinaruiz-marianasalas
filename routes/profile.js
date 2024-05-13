const express = require('express');
const router = express.Router();
const verifySessionCookie = require('../middleware/verifySessionCookie');

router.get('/', verifySessionCookie, (req, res) => {
  const userProfile = {
    nombre: 'María',
    apellido: 'Perez',
    correo: 'maria@gmail.com',
    fechaDeNacimiento: '01/01/2001'
  };
  
  res.json(userProfile);
});

module.exports = router;