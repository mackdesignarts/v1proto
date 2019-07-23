const supertest = require('supertest')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
process.env.NODE_TLS_ACCEPT_UNTRUSTED_CERTIFICATES_THIS_IS_INSECURE = '1'

module.exports = (custObj) => {
  return new Promise((resolve, reject) => {
    supertest('https://192.168.99.100:8080')
      .post(apiPrefix + custObj.route)
      .send({custObj})
      .end((err, res) => {
        if (err) {
          reject(new Error('An error occured with the payment service, err: ' + err))
        }
        resolve(res.body.paid)
      })
  })
}