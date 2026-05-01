const exp=require('express')
const app=exp()
const multer=require('multer')

app.use(exp.static('../public',{index:'form.html'}))

var store=multer.diskStorage({
    destination:'lju',
    filename:function(req,file,cb){
        cb(null,file.fieldname+Date.now()+'.pdf')
    }
})

var uplod=multer({storage:store,limits:{fileSize:1024*1024}})

app.post('/data',uplod.array('mypic',5),(req,res)=>{
    files=req.files
    if(files){
        res.set('content-type','text/html')
        for(i of files){
            res.write("<h1>Your file named as <span style='color: red'>"+ i.originalname +'</span>has been uploded</h1>')
        }
        res.send()
    }
})
app.listen(8090,()=>{console.log('http://localhost:8090')})