const { Router } = require('express')
const multer = require('multer')
const uploadConfig = require('../config/upload')

const SessionController = require('../controllers/SessionController')
const HouseController = require('../controllers/HouseController')
const DashboardController = require('../controllers/DashboardController')
const ReservController = require('../controllers/ReservController')

const routes = new Router()
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store)
routes.get('/sessions', SessionController.index)

routes.get('/dashboard', DashboardController.show)

routes.post('/houses', upload.single('thumbnail'), HouseController.store)
routes.get('/houses', HouseController.index)
routes.put('/houses/:houses_id', upload.single('thumbnail'), HouseController.update)
routes.delete('/houses', HouseController.destroy)

routes.post('/houses/:house_id/reserve', ReservController.store)
routes.get('/reserves', ReservController.index)
routes.delete('/reserves/cancel', ReservController.destroy)

module.exports = routes
