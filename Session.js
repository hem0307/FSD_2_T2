const exp=require('express')
const app=exp()
const es=require('express-session')

app.use(es({secret:'abc'}))
app.use(exp.static('../public'))
app.get('/savesession',(req,res)=>{
    req.session.username=req.query.Uname
    req.session.pass=req.query.password
    res.redirect("formsession")
})
app.get('/formsession',(req,res)=>{
    res.write("<h1>Welcome" + req.session.username + "</h1>")
    res.write("<h1>Your Password" + req.session.pass + "</h1>")
    res.write(`<a href="/detasession">Logout</a>`)
    res.send()
})
app.get("/detasession",(req,res)=>{
    req.session.destroy()
    res.redirect('/')
})
app.listen(9092,()=>{console.log('http://localhost:9092')})