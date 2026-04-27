const exp=require('express')
const app=exp()
const m1=require('./data')

app.use('/',m1)
app.listen(8088,()=>{console.log('http://localhost:8088')})