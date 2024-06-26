const express = require ("express");
const productControllers = require("../Controllers/productControllers");
const productRouter= express.Router()
const {body} = require("express-validator"); 
const { isAdmin } = require("../../middleware/adminAuth");
const uploadFile = require("../../middleware/multerProduct");
const validationProduct = require("../../middleware/validationProductCreate");


// Inicio de pagina
productRouter.get("/", productControllers.showHome);

//Creacion de producto
productRouter.get('/Crear-Producto', productControllers.add)

productRouter.post('/Crear-Producto', uploadFile, validationProduct ,productControllers.create);


//Listado de productos
productRouter.get('/product',productControllers.listado)
productRouter.get('/buscar', productControllers.busca)

//Detalle de producto
productRouter.get("/detalles/:id",isAdmin, productControllers.detalle)

//Edición de productos
productRouter.get('/edit/:id', productControllers.edit)
productRouter.put("/edit/:id",uploadFile, productControllers.update);

//Eliminar producto
productRouter.delete("/eliminar/:id", productControllers.eliminar)

//Eleccion de crear
productRouter.get("/Seleccion", productControllers.showSeleccion)
productRouter.get("/admin-confirm", productControllers.showConfirmation);

//Crear
productRouter.get("/carrito",productControllers.showCarrito)


module.exports=productRouter