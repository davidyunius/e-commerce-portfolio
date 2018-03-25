const express = require('express');
const router = express.Router();
const User = require('../controllers/user-controller')


router
  .get('/', User.viewUser)
  .post('/add', User.addUser)
  .patch('/update/:id', User.updateUser)
  .delete('/delete/:id', User.deleteUser)

module.exports = router;
