const express=require('express')
const { ConnectWithDatabase, connect } = require('./Config/DatabaseConnection')
const cookieparser=require('cookie-parser')
const userRoute = require('./Routes/UserRoutes')
const projectRoute=require("./Routes/ProjectRoutes")
const taskRoute=require("./Routes/TaskRoutes")
const fileupload=require('express-fileupload')
const cors=require('cors')
const { cloudinaryConnection } = require('./Config/CloudinaryConnection')
require('dotenv').config()
const app=express()
app.use(express.json())
app.use(cookieparser())
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);
app.use(
	fileupload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`running on ${PORT} port`);
})
connect()
cloudinaryConnection()

app.use("/api/v1/user",userRoute)
app.use("/api/v1/project",projectRoute)
app.use("/api/v1/task",taskRoute)

app.get("/",(req,res)=>{
    res.send('<h1>Hello world</h1>')   
})