var exp=require('express')
var app=exp()
app.use(exp.urlencoded({extended:true}))
app.get("/",(req,res)=>{

    res.send(`<form action="/User" method="post">
            <input type="text" name="Uname">
            <input type="password" name="pass">
            <input type="submit"></input>
            </form>`)
})
app.post("/User",(req,res)=>{
    res.send("Welcome "+req.body.Uname+" Your password is "+req.body.pass)
})
app.listen(8080,console.log("http://localhost:8080"))