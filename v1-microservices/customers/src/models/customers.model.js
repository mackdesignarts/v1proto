const customerSchema = (joi) => ({
    userID = joi.Number,
    name = joi.String,
    password = joi.String,
    email = joi.String,
    phoneNumber = joi.String,
    userRole = joi.String,
    dateCreated = { type: Date, default: Date.now }
})
  
module.exports = customerSchema