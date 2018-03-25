const User = require('../models/user-model')

module.exports = {
  viewUser(req, res) {
    User.find().then(userData => {
      res.status(200).json({
        message: 'user data found!',
        userData
      })
    }).catch(err => {
      res.status(500).json({
        message: err
      })
    })
  },
  addUser(req, res) {
    User.create({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      role: req.body.role || 'admin'
    }).then(userData => {
      res.status(201).json({
        message: 'user data created!',
        userData
      })
    }).catch(err => {
      res.status(500).json({
        message: err
      })
    })
  },
  updateUser(req, res) {
    User.update({
      _id: req.params.id
    }, {
      $set: {
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
      }
    }, {
      where: {
        _id: req.params.id
      }
    }).then(userData => {
      res.status(200).json({
        message: 'user data updated!',
        userData
      })
    }).catch(err => {
      res.status(500).json({
        message: err
      })
    })
  },
  deleteUser(req, res) {
    User.remove({
      _id: req.params.id
    }).then(userData => {
      res.status(200).json({
        message: 'user data deleted!'
      })
      }).catch(err => {
        res.status(500).json({
        message: err
      })
    })
  }
}