require('dotenv').config()
const express= require('express');

//express app
const app = express();

app.use((req,res,next)=>{
  console.log(req.path, req.method)
  next()
})

//react to reqs : route handler
app.get('/',(req,res)=>{
  res.send('Hello')
});


//listen for requests
app.listen(process.env.PORT,()=>{
  console.log('listening on port',process.env.PORT)
});

