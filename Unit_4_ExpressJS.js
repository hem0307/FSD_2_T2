var expr=require('express')
var app=expr()
var a={name:'abc'}
app.get("/",function(req,res)
{

    //res.set("content-type","text/plain")
    //res.send("Hello World")
    //res.write("Good Morning")
    //res.send()
    //res.send("Bye")

    res.set("content-type","application/json")
    //res.write(JSON.stringify(a))
    res.send(a)

})
app.listen(5000)

// Method of Express
//--> res.send()
//--> res.json()
//--> res.end()
//--> res.sendFile()
//--> res.redirect()
//--> res.render()