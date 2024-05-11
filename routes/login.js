const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const verifySessionCookie = require('../middleware/verifySessionCookie');

const router = express.Router();
router.use(cookieParser());

const secretKey = 'mysecretkey';

const credentials = {
  email: 'admin@admin.com',
  password: 'admin'
};

router.post('/', (req, res) => {
  const { email, password } = req.body;

  if (email === credentials.email && password === credentials.password) {
    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });

    res.cookie('session_token', token, { httpOnly: true, maxAge: 3600000 }); 
    
    res.json({ message: 'Inicio de sesión exitoso', token: token });
  } else {
    res.status(401).json({ error: 'Credenciales inválidas' });
  }
});

module.exports = router;
