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

//route handler: react to reqs 
app.use('/api/blogs',blogRoutes)

//connect to Database
mongoose.connect(process.env.MONGo_URI)       //takes time so promise
.then(()=>{
  //listen for requests
app.listen(process.env.PORT,()=>{
  console.log('listening on port',process.env.PORT)
});
})
.catch((error)=>{
  console.log(error)
})


//listen for requests
app.listen(process.env.PORT,()=>{
  console.log('connected to DB & listening on port',process.env.PORT)
});

