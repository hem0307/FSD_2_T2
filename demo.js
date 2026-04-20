var exp=require('express')
var app=exp()
var path=require('path')
var sp=path.join(__dirname,'../public')

// app.use(exp.static(sp))
app.get('/',(req,res)=>{
    res.sendFile(sp+'/2.html')
})
app.use(exp.static(sp))
app.listen(8085,()=>{console.log('http://localhost:8085')})