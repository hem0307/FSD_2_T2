var exp=require('express')
var app=exp()

var path=require("path")
var sp=path.join(__dirname,"../public")
app.get("/",(req,res) => {
res.sendFile(sp+"/2.html")
app.use(exp.static("../public"))
})
app.listen(8089)