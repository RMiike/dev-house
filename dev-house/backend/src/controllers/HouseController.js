const House = require('../models/House')
const User = require('../models/User')

class HouseController {

  async store(req, res) {

    const { filename } = req.file
    const { description, location, price, status } = req.body
    const { user_id } = req.headers

    const house = await House.create({
      user: user_id,
      thumbnail: filename,
      description, location, price, status
    })
    return res.json(house)

  }

  async update(req, res) {
    try {
      const { filename } = req.file
      const { houses_id } = req.params
      const { description, location, price, status } = req.body
      const { user_id } = req.headers

      const user = await User.findById(user_id)
      const houses = await House.findById(houses_id)

      if (String(user._id) !== String(houses.user)) {
        return res.status(401).json({ error: ' não autorizado' })

      }

      await House.updateOne({ _id: houses_id }, {
        user: user_id,
        thumbnail: filename,
        description, location, price, status
      })
      return res.send()
    } catch (err) {
      return res.sendStatus(500)

    }


  }

  async index(req, res) {
    try {
      const { status } = req.query

      const houses = await House.find({ status }).catch((e) => { if (e) { throw e } })
      return res.json(houses)
    } catch (err) {
      return res.sendStatus(500)

    }
  }

  async destroy(req, res) {

    const { house_id } = req.body
    const { user_id } = req.headers

    const user = await User.findById(user_id)
    const houses = await House.findById(house_id)



    if (String(user._id) !== String(houses.user)) {
      return res.status(401).json({ error: ' não autorizado' })

    }
    await House.findByIdAndDelete({ _id: house_id })
    return res.json({ excluido: true })
  }
}


module.exports = new HouseController()
