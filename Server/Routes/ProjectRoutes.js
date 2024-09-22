const express=require('express')
const { createProject, addTeamMate,getProjectDetails,deleteProject } = require('../Controllers/Projects')
const { auth, isAdmin } = require('../Middlewares/auth')
const routes=express.Router()

routes.post('/createproject',auth,isAdmin,createProject)
routes.put('/addteam',auth,isAdmin,addTeamMate)
routes.post('/getprojectdetails',auth,isAdmin,getProjectDetails)
routes.put('/deleteproject',auth,isAdmin,deleteProject)

module.exports=routes