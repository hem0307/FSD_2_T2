var exp=require('express')
var app=exp()

app.use(exp.static('../public',{index:'number.html'}))
app.get('/number',(req,res)=>{
    n1=parseInt(req.query.n1)
    n2=parseInt(req.query.n2)
    if((n1>0)&&(n2>0)){
        if(req.query.formula=='add'){
            a=n1+n2
            res.write('Ans of Add:'+a)
        }
    else if(req.query.formula=='sub'){
            b=n1-n2
            res.write('Ans of Sub:'+b)
        }
    else if(req.query.formula=='div'){
            c=n1/n2
            res.write('Ans of Div:'+c)
        }
    else if(req.query.formula=='mul'){
            d=n1*n2
            res.write('Ans of Mul:'+d)
        }
    else{
        res.write('Please select any Formula')
    }}
    else{
        res.write('Enter valid Number:')}
        res.send()
})
app.listen(8088,()=>{console.log('http://localhost:8088')})