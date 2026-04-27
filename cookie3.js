// write express js code to create cookies of submitted values of form perform following task
// 1)create html file having a form og firstname lastname password and submit button once the form sub=bmitted store all this value to the
// respective cookies on /next page then redirect to /admin page and clear cookie set for lastname display remaing cookies on this page 
// using post method 

var expr=require("express")
var app=expr()
var cp=require("cookie-parser")
app.use(cp())
app.use(expr.urlencoded())
app.use(expr.static("../public",{index:"cookie3.html"}))
app.post("/next",(req,res)=>
{
    res.cookie("fname",req.body.fname)
    res.cookie("lname",req.body.lname)
    res.cookie("passward",req.body.pwd)
    res.redirect("/admin")
})
app.get("/admin",(req,res)=>
{
    res.clearCookie("lname")
    res.write("FirstName"+req.cookies.fname)
    res.write("Passward"+req.cookies.passward)
    res.send()
})
app.listen(8087)
