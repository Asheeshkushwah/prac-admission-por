const express = require('express')
const FrontController = require('../controllers/Frontcontrollers')

const route = express.Router()

// route.get("/",(req,res) =>{
//     res.send('hello world')
// })
// route.get('/about',(req,res) =>{
//     res.send('about page')
// })


// route.get('/', FrontController.home)
route.get('/home', FrontController.home)
route.get('/about', FrontController.about)
route.get('/', FrontController.login)
route.get('/register', FrontController.register)
route.get('/contact', FrontController.contact)


module.exports = route