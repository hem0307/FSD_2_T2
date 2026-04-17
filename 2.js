var exp=require('express')
var app=exp()

app.use(exp.static('../public',{index:'form.html'}))
app.get('/process_get',(req,res)=>{
    console.log(req.query)
    res.send("Wlcome"+req.query.uname+req.query.lname)
})
app.listen(8085)