const {Schema, model} = require('mongoose')

const ReservSchema = new Schema({
  date: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  house: {
    type: Schema.Types.ObjectId,
    ref: 'House'
  }
});

module.exports =  model('Reserv', ReservSchema)