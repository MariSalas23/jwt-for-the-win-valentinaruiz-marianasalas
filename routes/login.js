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

  // Verificar las credenciales del usuario
  if (email === credentials.email && password === credentials.password) {
    // Generar token JWT
    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });

    // Establecer una cookie de sesión
    res.cookie('session_token', token, { httpOnly: true, maxAge: 3600000 }); 
    
    // Devolver el token junto con el mensaje de éxito
    res.json({ message: 'Inicio de sesión exitoso', token: token });
  } else {
    res.status(401).json({ error: 'Credenciales inválidas' });
  }
});

module.exports = router;
