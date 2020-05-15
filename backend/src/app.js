const express = require('express')
const routes = require('./routes/routes')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
require('dotenv').config()

class App {
  constructor() {
    this.server = express()

    async function handleConnect() {
      await mongoose.connect(process.env.DB_STRING, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }).catch(e => {
        if (e) {
          handleConnect()
        }
      })
    }
    mongoose.connection.once('open');
    mongoose.connection.on('error', (e) => { if (e) handleConnect() });
    handleConnect()




    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(cors())
    this.server.use(
      '/files', express.static(path.resolve(__dirname, '..', 'uploads')))

    this.server.use(express.json())
  }

  routes() {
    this.server.use(routes)
  }
}

module.exports = new App().server

