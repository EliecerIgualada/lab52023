const valida_empleado = (req, res, next)=>{
    // const nombre = req.body.nombre
    // const saliario = req.body.salario
    const {nombre,salario,id} = req.body
if (nombre == "")
return res.status(400).json({status:"El nombre está vacío"})

if (salario=="" || isNaN(parseFloat(salario)))
return res.status(400).json({status:"El salario debe ser un número válido"})

if (!id || id ==='0')
return res.status(400).json({starus:"ID inválido"})
}
module.exports = valida_empleado

