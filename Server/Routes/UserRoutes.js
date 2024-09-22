const express=require('express')
const { signup,login } = require('../Controllers/Auth')
const { getFullInformation,getAllEmployees } = require('../Controllers/User')
const { auth, isAdmin } = require('../Middlewares/auth')
const routes=express.Router()

routes.post('/signup',signup)
routes.post('/login',login)

routes.post('/getuserdetails',getFullInformation)
routes.get('/getemployees',auth,isAdmin,getAllEmployees)
module.exports=routes