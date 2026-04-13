var exp=require('express')
var app=exp()
app.get('/',function(req,res){
    
    res.type("text/plain")
    res.write("Welcome to Home Page")
    res.send()
})
app.get('/about',function(req,res){
    
    res.type("text/html")
    res.write(`<h1>Welcome to Home Page</h1>`)
    res.send()
})
app.listen(3002,()=>{console.log("Server Student:","http://localhost:3002/about")})