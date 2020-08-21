const express = require('express');

const app = express();
//so we can serve static files like css
app.use(express.static(__dirname+'/public'));

//the main route
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})

//the /api/whoami route
app.get('/api/whoami',(req,res)=>{
    res.send({ipaddress: req.connection.remoteAddress, language: req.headers["accept-language"], software: req.headers["user-agent"]})
})

app.listen(3000);