var expr=require("express")
var app=expr()
var cp=require("cookie-parser")
app.use(cp())
app.get("/cookie",(req,res)=>
{
    res.cookie("fname","Rudra")
    res.cookie("lname","Patel")
    //clear output after particular time
    res.cookie("id","201",{"express":new Date(Date.now()+10000)})
    //clear output after particular time
    res.cookie("email","24002171310117@ljku.edu.in",{maxAge:2000})
    //clear cookie
    res.clearCookie("fname")
    res.send(req.cookies)
})
app.listen(8089)