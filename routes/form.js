const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'No se encuentra el texto en la solicitud.' });
  }

  res.json({ text }); 
});

module.exports = router;