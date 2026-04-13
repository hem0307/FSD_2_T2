var exp=require('express')
var app=exp()
app.get("/name/:Uname/id/:Eid/",(req,res)=>
{
    res.send("Welcome "+req.params.Uname+" Your Id is "+req.params.Eid)
    //res.send(req.params)
})
app.listen(8088,console.log("http://localhost:8088/name/PKP/id/1"))