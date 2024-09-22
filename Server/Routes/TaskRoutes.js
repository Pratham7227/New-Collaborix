const express=require('express')
const { createTask,checkingTaskByAdmin,taskSubmittedByEmployee,workingOnTask } = require('../Controllers/Task')
const { auth, isAdmin } = require('../Middlewares/auth')
const routes=express.Router()

routes.post('/createtask',auth,isAdmin,createTask)

routes.post('/taskfromemployee',auth,taskSubmittedByEmployee)

routes.put('/taskchecking',auth,isAdmin,checkingTaskByAdmin)

routes.put('/taskinworking',auth,workingOnTask)

module.exports=routes