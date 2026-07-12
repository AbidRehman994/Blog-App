require('dotenv').config()
const express= require('express');
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


//listen for requests
app.listen(process.env.PORT,()=>{
  console.log('listening on port',process.env.PORT)
});

