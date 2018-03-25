const Product = require('../models/product-model')

module.exports = {
  viewProduct(req, res) {
    Product.find().then(prodData => {
      res.status(200).json({
        message: 'product data found!',
        prodData
      })
    }).catch(err => {
      res.status(500).json({
        message: err
      })
    })
  },
  addProduct(req, res) {
    Product.create({
      name: req.body.name,
      url: req.body.url,
      qty: req.body.qty,
      desc: req.body.desc
    }).then(prodData => {
      res.status(201).json({
        message: 'product data created!',
        prodData
      })
    }).catch(err => {
      res.status(500).json({
        message: err
      })
    })
  },
  updateProduct(req, res) {
    Product.update({
      _id: req.params.id
    }, {
        $set: {
          name: req.body.name,
          url: req.body.url,
          qty: req.body.qty,
          desc: req.body.desc
        }
      }, {
        where: {
          _id: req.params.id
        }
      }).then(prodData => {
        res.status(200).json({
          message: 'product data updated!',
          prodData
        })
      }).catch(err => {
        res.status(500).json({
          message: err
        })
      })
  },
  deleteProduct(req, res) {
    Product.remove({
      _id: req.params.id
    }).then(prodData => {
      res.status(200).json({
        message: 'product data deleted!',
        prodData
      })
    }).catch(err => {
      res.status(500).json({
        message: err
      })
    })
  }
}