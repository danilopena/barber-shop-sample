const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

// Controllers session
const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

// Routes session

// -- Login
routes.get('/', SessionController.create)
routes.post('/signin', SessionController.store)

// -- Register
routes.get('/signup', UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)

// -- Dashboard
routes.get('/app/dashboard', (req, res) => {
  console.log(req.session.user)
  res.render('dashboard')
})

module.exports = routes
