const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomerSchema = new Schema({
    userID = Number,
    name = String,
    password = String,
    email = String,
    phoneNumber = String,
    userRole = String,
    dateCreated = { type: Date, default: Date.now }
})

module.exports = mongoose.model("Customers", CustomerSchema)