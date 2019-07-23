const repository = (container) => {
    const {database: db} = container.cradle
  
    const createUser = (user) => {
      return new Promise((resolve, reject) => {
        const payload = {
          address = user.address,
					email = user.email,
					id = user.id,
					password = user.password,
					phoneNumber = user.phoneNumber,
					role = user.rol,
					userId = user.Id,
					userName = user.userName
        }
  
        db.collection('customers').insertOne(payload, (err, success) => {
          if (err) {
            reject(new Error('An error occuered registring a user booking, err:' + err))
          }
          resolve(payload)
        })
      })
		}
		
		// From Mongo, not Cataleya
		const getUsers = () => {
      return new Promise((resolve, reject) => {
        const response = (err, order) => {
          if (err) {
            reject(new Error('An error occuered retrieving a order, err: ' + err))
          }
          resolve(order)
        }
        db.collection('customers').find()
      })
    }
		
		// From Mongo, not Cataleya
    const getUsersById = (custId) => {
      return new Promise((resolve, reject) => {
        const ObjectID = container.resolve('ObjectID')
        const query = {_id: new ObjectID(custId)}
        const response = (err, order) => {
          if (err) {
            reject(new Error('An error occuered retrieving a order, err: ' + err))
          }
          resolve(order)
        }
        db.collection('customers').findOne(query, {}, response)
      })
    }
  
    const disconnect = () => {
      db.close()
    }
  
    return Object.create({
				createUser,
				getUsers,
				getUsersById,
        disconnect
    })
  }
  
  const connect = (container) => {
    return new Promise((resolve, reject) => {
      if (!container.resolve('database')) {
        reject(new Error('connection db not supplied!'))
      }
      resolve(repository(container))
    })
  }
  
  module.exports = Object.assign({}, {connect})