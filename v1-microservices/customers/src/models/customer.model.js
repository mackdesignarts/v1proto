const customerSchema = (joi) => ({
    address: joi.string(),
    email: joi.string(),
    id: joi.number(),
    password: joi.string(),
    phoneNumber: joi.string(),
    role: joi.number(),
    userId: joi.string(),
    userName: joi.string()
})
  
module.exports = customerSchema