const Reserv = require('../models/Reserv')
const User = require('../models/User')
const House = require('../models/House')

class ReservController {
  async index(req, res) {
    const { user_id } = req.headers
    const reserves = await Reserv.find({ user: user_id }).populate('house')
    return res.json(reserves)
  }

  async store(req, res) {
    const { user_id } = req.headers
    const { house_id } = req.params
    const { date } = req.body
    const house = await House.findById(house_id).catch(e => { if (e) { res.status(400).json({ error: 'A casa não existe!' }) } })
    if (!house) {
      return res.status(400).json({ error: 'Casa não existe!' })
    }
    if (house.status !== true) {
      return res.status(400).json({ error: 'Solicitação indisponível' })
    }
    const user = await User.findById(user_id)
    if (String(user._id) === String(house.user)) {
      return res.status(401).json({ error: 'Não permitido.' })
    }
    const reserve = await Reserv.create({
      user: user_id,
      house: house_id,
      date
    })
    await reserve.populate('house').populate('user').execPopulate()
    return res.json(reserve)
  }

  async destroy(req, res) {
    const { reserve_id } = req.body
    await Reserv.findByIdAndDelete({ _id: reserve_id })
    return res.send()
  }
}

module.exports = new ReservController()
