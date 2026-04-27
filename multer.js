const exp=require('express')
const app=exp()
const multer=require('multer')

app.use(exp.static('../public',{index:'form.html'}))

var store=multer.diskStorage({
    destination:'lju',
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

var uplod=multer({storage:store})

app.post('/data',uplod.single('mypic'),(req,res)=>{
    if(req.file){
        res.send('Your file named as '+req.file.originalname+' has been uploded to '+req.file.destination)
    }
})
app.listen(8089,()=>{console.log('http://localhost:8089')})