const User = require('../models/User')
const yup = require('yup')

class SessionController {

  async store(req, res) {
    const { email } = req.body
    let user = await User.findOne({ email })
    if (user) {
      return res.status(400).send('User already existis!')
    } else {
      user = await User.create({ email })
    }

    return res.json(user)
  }
  async index(req, res) {
    const { email } = req.query
    let user = await User.findOne({ email })
    if (!user) {
      return res.status(400).send('User not found.')
    }
    return res.json(user)
  }
}

module.exports = new SessionController()
