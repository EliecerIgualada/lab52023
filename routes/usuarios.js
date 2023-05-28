const express = require ("express")
const router = express.Router()
var {usuarios} = require("../models/usuario")
const valida_campos = require("../middleware/valida_campos")

//9 Middleware
router.use(express.json())

//7
router.get("/", (req, res)=>{
return res.status(200).json(usuarios)
})

//8
router.get("/:id",(req,res)=>{
    const id = req.params.id
    const filtro = usuarios.filter((usuario)=>usuario.id==id)
    if (filtro.length>0)
        return res.json(filtro)
    else 
        return res.status(404).json({status: "NO Encontrado"})
    })

   //9
router.post("/", valida_campos, (req,res)=>{
    var body = req.body
    // console.log(body)
    body.id = usuarios.length + 1
    usuarios.push(body)
    return res.status(201).json(body)
})

//10 
router.put("/:id",(req,res)=>{
    var id= req.params.id
    var body = req.body
    const filtro =usuarios.filter((usuario)=> usuario.id==id)
    if (filtro.length>0){
        usuarios = usuarios.filter((usuarios)=>usuario.id !=id)
        usuarios.push(body)
        return res.status(201).json(body)
    }else
    return res.statur(404).json({status:"No encontrado"})
})

//11
router.delete("/:id",(req,res)=>{
    var id= req.params.id
    const filtro =usuarios.filter((usuario)=> usuario.id==id)
    if (filtro.length>0){
        usuarios = usuarios.filter((usuarios)=>usuario.id !=id)
        usuarios.push(body)
        return res.status(200).json(filtro)
    }else
    return res.statur(404).json({status:"No encontrado"})
})
module.exports = router




