const exp=require('express')
const app=exp()
const es=require('express-session')

app.use(es({resave:false,saveUninitialized:false,secret:'LJU'}))
app.get('/',(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++
        res.send(`<h1 style='color:blue'>You have visited the Website ${req.session.page_views}</h1>`)
    }
    else{
        req.session.page_views=1
        res.send(`<h1 style="color:green"> Welcome! Thank you for Visiting the Website</h1>`)
    }
})
app.listen(8083,()=>{console.log("http://localhost:8083")})