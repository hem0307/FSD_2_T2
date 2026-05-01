const exp=require('express')
const app=exp()

app.set('view engine','ejs')
app.get('/',(req,res)=>{
    // res.render('first')
    res.render('first',{id:'abc123'})
})

app.listen(3000,()=>{console.log('http://localhost:3000')})