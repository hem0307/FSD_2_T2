var exp=require('express')
var app=exp()

app.use(exp.static('../public',{index:'po.html'}))
app.use(exp.urlencoded())
app.post('/process.post',(req,res)=>{
    res.set("content-type",'text/html')
    name1=req.body.n1
    if(name1=='admin'){
        res.send('welcome '+name1)
    }
    else{
        res.send(`<h1 style="color:red"> please login with admin name</h1><br>
            <a href='/'>Login again</a>`)
    }
})
app.listen(8085,()=>{console.log('http://localhost:8085')})