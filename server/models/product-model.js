const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: String,
  url: String,
  qty: String,
  desc: String
})

module.exports = mongoose.model('Product', productSchema)