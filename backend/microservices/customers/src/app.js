const express = require('express')
const Customer = require('./models/customers_model')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({ 
        msg: 'customers',
        version: '1.0.0'
    })
})

app.get('/api/v1/customers', async (req, res) => {
    const customers = await Customer.find({})
    res.json({ customers })
})

app.post('/api/v1/customers', async (req, res) => {
    const customerModel = {
        ID = req.body.ID,
        firstName = req.body.firstName,
        lastName = req.body.lastName    
    }

    const customer = new Customer({ customerModel })
    const savedCustomer = await customer.save();
    res.json({ savedCustomer })
})
