var exp=require('express')
var app=exp()

const addName=(req,res,next)=>{
    req.name="abc"
    console.log("Name added")
    next()
}
const addcol=(req,res,next)=>{
    req.col="LJU"
    console.log("College added")
    //next()
    res.send("End")
}
const addMarks=(req,res,next)=>{
    req.total=50+40
    console.log("Marks added")
    next()
}
app.get("/student",addName,addcol,addMarks,(req,res)=>{
    res.send("student Name: "+req.name+" student College: "+req.col+" Total Marks: "+req.total)
})
app.listen(8082,console.log("http://localhost:8082/student"))