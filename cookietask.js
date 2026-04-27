var expr=require("express")
var app=expr()
var cp=require("cookie-parser")
app.use(cp())
app.use(expr.urlencoded())
app.use(expr.static("../public",{index:"cookieform.html"}))
app.post("/next",(req,res)=>
{
    res.cookie("fname ",req.body.fname)
    res.cookie("lname ",req.body.lname)
    res.cookie("passward ",req.body.pwd)
    res.redirect("/admin")
})
app.get("/admin",(req,res)=>
{
    res.clearCookie("lname")
    res.write("FirstName "+req.cookies.fname)
    res.write("Passward "+req.cookies.passward)
    res.send()
})
app.listen(8087)