const status = require('http-status')

module.exports = (app, options) => {
  const { model } = options

  app.get('/users', (req, res, next) => {
    model.getAllUsers().then(customers => {
      res.status(status.OK).json(customers)
    }).catch(next)
  })

  app.get('users/:id', (req, res, next) => {
    repo.getCustomerById(req.params.id).then(customer => {
      res.status(status.OK).json(customer)
    }).catch(next)
  })

  app.post('/user/create', (req, res, next) => {
    const { validate } = req.container.cradle

    validate(req.body.createUser, 'customer')
      .then(customer => {
        return model.createUser(customer)
      })
      .then(response => {
        res.status(status.OK).json({ response })
      })
      .catch(next)
  })
}