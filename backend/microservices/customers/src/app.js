const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const Customer = require('./models/customers_model')

const start = (options) => {
  return new Promise((resolve, reject) => {
    if (!options.repo) {
      reject(new Error('Not connected to DB'))
    }
    if (!options.port) {
      reject(new Error('Port not available'))
    }
    // Express app
    const app = express()
    app.use(morgan('dev'))
    app.use(helmet())
    app.use((err, req, res, next) => {
      reject(new Error('An error has occurred:' + err))
      res.status(500).send('Error')
    })
    
    // Customer(app, options)
    
    const server = app.listen(options.port, () => resolve(server))
  })
}

module.exports = Object.assign({}, { start })