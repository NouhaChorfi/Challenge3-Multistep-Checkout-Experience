var express = require('express')
var path=require('path')

var app=express();

var port= process.env.port|| 3000;
app.use(express.static('public'))

app.get('/', (req,res,next)=>{
} )
app.listen(port, ()=>{console.log("welcome to express 3000")})