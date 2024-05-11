const express = require('express');
const router = express.Router();
const verifySessionCookie = require('../middleware/verifySessionCookie');

router.get('/', verifySessionCookie, (req, res) => {
  res.json({ message: 'Ruta protegida', user: req.user });
});

module.exports = router;
