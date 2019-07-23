const status = require('http-status')

module.exports = ({repo}, app) => {
  app.post('/users/create', (req, res, next) => {
    const validate = req.container.cradle.validate
    const createCustomerService = req.container.resolve('createCustomerService')

    Promise.all([
      validate(req.body.customer, 'customer'),
    ])
    .then((user) => {
      const cust = {
        userName: user.name + ' ' + user.lastName,
        currency: 'mxn',
        number: user.creditCard.number,
        cvc: user.creditCard.cvc,
        exp_month: user.creditCard.exp_month,
        exp_year: user.creditCard.exp_year,
        amount: booking.totalAmount,
        description: `
          Tickect(s) for movie ${booking.movie},
          with seat(s) ${booking.seats.toString()}
          at time ${booking.schedule}`
      }

      return Promise.all([
        createCustomerService(cust)
      ])
    })
    .catch(next)
  })

}