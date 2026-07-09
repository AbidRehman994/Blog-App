const express= require('express');

//express app
const app = express();

//listen for requests
app.listen(5000,()=>{
  console.log('listening on port 5000')
});

app.get('/',(req,res)=>{
  res.send('Hello')
})