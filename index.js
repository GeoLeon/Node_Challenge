const express = require ('express');

const app = express ();

const port = 3000;

app.get('/', function(req,res){
    res.send ('hello txt!');
})
app.get('/home', function(req,res){
    console.log (__dirname);
res.sendfile(__dirname + '/pages/index.html')
})

app.post('/home',function (req,res){
res.send (post(), success);
})

app.get('/about', function(req,res){
    console.log (__dirname);
    res.sendfile(__dirname + '/pages/about.html')
})

app.get('/contact', function(req,res){
    console.log (__dirname);
    res.sendfile(__dirname + '/pages/contact.html')
})



app.listen(port,function(){
    console.log('listening at port;'+ port)

});
