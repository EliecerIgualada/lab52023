const express = require("express")
const app = express()
const rutaUsuarios = require ("./routes/usuarios")
const rutaProductos = require ("./routes/productos")
const registrar = require ("./middleware/registrar")
app.use(registrar)
app.use(express.json())
app.use("/usuarios",rutaUsuarios)
app.use("/productos",rutaProductos)

app.listen(8080, ()=>{
    console.log("Servidor Iniciado en puerto 8080...")
})

