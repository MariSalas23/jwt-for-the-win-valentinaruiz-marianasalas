const express = require('express');
const router = express.Router();
const verifySessionCookie = require('../middleware/verifySessionCookie');
const users = require('../assets/users');

router.get('/', verifySessionCookie, (req, res) => {
  const randomUsers = getRandomUsers(users, 10);

  res.json(randomUsers);
});

// Función para lista aleatoria de usuarios
function getRandomUsers(userList, numUsers) {
  const randomUsers = [];
  const numberUsers = userList.length;
  const selectedUsers = new Set();

  while (selectedUsers.size < numUsers) {
    const randomIndex = Math.floor(Math.random() * numberUsers);
    selectedUsers.add(randomIndex);
  }

  selectedUsers.forEach(a => {
    randomUsers.push(userList[a]);
  });

  return randomUsers;
}

module.exports = router;