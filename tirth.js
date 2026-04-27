var expr=require("express")
var app=expr()
var cp=require("cookie-parser")
app.use(cp())
app.get("/cookie",(req,res)=>
{
    res.cookie("fname","express")
    res.cookie("lname","js")
    res.cookie("id","2")
    res.cookie("email","abc@gmamil.com")
    res.send(req.cookies)
})
app.listen(8099)



app.use(cp())

app.use(expr.urlencoded())
app.use(expr.static("../public",{index: "tirth.html"}))

app.post("/next",(req,res)=>{
    res.cookie("Fname",req.body.fname)
    res.cookie("lname",req.body.lname)
    res.cookie("pass",req.body.pwd)
    res.redirect("/admin")
})

app.get("/admin",(req,res)=>{
   res.clearCookie("lname")
   res.write('welcome :'+req.cookies.Fname)
   res.write(" ur pass:"+req.cookies.pass)
   res.send()
})
app.listen(2001)