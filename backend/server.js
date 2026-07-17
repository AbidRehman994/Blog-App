const cors = require("cors");
require('dotenv').config()
const express= require('express');
const mongoose=require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

//express app
const app = express();

//middleware
app.use(express.json())

app.use((req,res,next)=>{
  console.log(req.path, req.method)
  next()
})

app.use(cors());
app.use(express.json());

//route handler: react to reqs 
app.use('/api/blogs',blogRoutes)

//connect to Database
mongoose.connect(process.env.MONGO_URI)       //takes time so promise
.then(()=>{
  console.log('connected to DB')
  //listen for requests
app.listen(process.env.PORT,()=>{
  console.log('listening on port',process.env.PORT)
});
})
.catch((error)=>{
  console.log(error)
})

