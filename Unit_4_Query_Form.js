var exp=require('express')
var app=exp()
app.get("/",(req,res)=>{

    res.send(`<form action="/User" method="get">
            <input type="text" name="Uname">
            <input type="password" name="pass">
            <input type="submit"></input>
            </form>`)
})
app.get("/User",(req,res)=>{
    res.send("Welcome "+req.query.Uname+" Your password is "+req.query.pass)
})
app.listen(8051,console.log("http://localhost:8051"))