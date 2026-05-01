const exp=require('express')
const app=exp()
const nm=require('nodemailer')

app.use(exp.urlencoded())
app.use(exp.static('../public',{index:'nm.html'}))
app.post('/submit',(req,res)=>{

    var trans=nm.createTransport({
        host:'smtp.gmail.com',
        post:465,
        auth:{user:'sender@gmail.com',
            pass:'App password'
        }
    })

    var mailbody={
        from:'sender@gmail.com',
        to:req.body.eid,
        subject:'response as mail',
        html:`Welcome ${req.body.name}! Thank you for wisiting website`
    }

    trans.sendMail(mailbody,(err,info)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(info)
        }
    })
    res.send('Mail send')
})

app.listen(8092,()=>{console.log('http://localhost:8092')})