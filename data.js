const exp= require('express')
const router=exp.Router()
module.exports=router

const mul=[{id:101,name:'abc',year:2020,rating:9.5},
    {id:102,name:'xyz',year:2022,rating:8.5},
    {id:103,name:'pqr',year:2025,rating:9.0}
]

router.get('/',(req,res)=>{
    res.json(mul)
})

router.get('/:id',(req,res)=>{
    var curmul=mul.filter((m)=>{
        if(m.id==req.params.id){
            return true
        }
    })
    if(curmul.length==1){
        res.json(curmul[0])
    }
    else{
        res.json('no data')
    }
})