var exp=require('express')
var app=exp()
app.get("/a",(req,res)=>{

    var name=req.query.Uname
    var pass=req.query.pass
    res.send("Your name is "+name+" and Your password is "+pass)
})
app.listen(8051,console.log("http://localhost:8051/a?Uname=abc&pass=123"))