 const http = require('http');

 //creating manual server
 const server=http.createServer((req,res)=>{
  console.log('req made')
 });
 //listening reqs
 server.listen(3000,'localhost',()=>{
  console.log('listening for reqs')
 });