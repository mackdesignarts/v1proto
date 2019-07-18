const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomerSchema = new Schema({
    ID = Number,
    firstName = String,
    lastName = String,
    dateCreated = { type: Date, default: Date.now }
})

module.exports = mongoose.model("Customers", CustomerSchema)