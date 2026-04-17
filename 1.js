var exp=require('express')
var path=require('path')
var app=exp()

//app.use(exp.static('public',{index:'1.html'}))
var sp=path.join(__dirname,"../public")
app.use(exp.static(sp,{index:'1.html'}))
console.log(__dirname)
console.log(sp)

app.listen(8091)

app.use(exp.static("../img"))
app.use(exp.static("../public",{index:'1.html'}))
app.listen(8093)