const express = require('express')
const { authController } = require('../controllers')
const router = express.Router()
router.post('/register',authController.register)
router.post('/login',authController.login)
router.get('/google',authController.googleLogin)
module.exports = router