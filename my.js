const exp=require('express')
const app=exp()

app.use(exp.urlencoded())
app.set('view engine','ejs')
app.get('/',(req,res)=>{
     res.render('form')
})

app.post('/submit',(req,res)=>{
    const name=req.body.name
    const marks=req.body.marks
    res.render('result',{name,marks})
})
app.listen(8080,()=>{console.log('http://localhost:8080')})