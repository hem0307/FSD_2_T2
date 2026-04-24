const exp=require('express')
const app=exp()
const es=require('express-session')

app.use(es({secret:'abc'}))
app.use(exp.urlencoded())
app.use(exp.static('../public'))
app.post('/login',(req,res)=>{
    req.session.username=req.body.Uname
    res.redirect('/order')
})
app.post('/order',(req,res)=>{
    req.session.product=req.body.product
    req.session.quantity=req.body.quantity
    res.redirect('/summary')
})
app.get('/summary',(req,res)=>{
    res.send(`<h1>Summary</h1>
        Username ${req.session.username} <br>
        Product ${req.session.product} <br>
        Quantity ${req.session.quantity}`)
})
app.listen(8086,()=>{console.log('http://localhost:8086')})