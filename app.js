//import modules
var SSL_OP_MSIE_SSLV2_RSA_PADDING = require("constants").SSL_OP_MSIE_SSLV2_RSA_PADDING;
var express = require('express');
var app = express();
var server = require("http").Server(app);
//import poductos.rutas
var productosRutas = require("./rutas/productos.rutas");
var carritosRutas = require("./rutas/carrito.rutas");
//use router from productos.rutas    
app.use('/api/productos', productosRutas[0]);
app.use('/api/carritos', carritosRutas[0]);
//set views as folder for ejs
app.set('views', './views');
app.set('view engine', 'ejs');
//set the folder public as static space
app.get("**",(req,res)=>{
    res.status(200).json({"error":"ruta equivocada"})
})
app.post("**",(req,res)=>{
    res.status(200).json({"error":"ruta equivocada"})
})
app.delete("**",(req,res)=>{
    res.status(200).json({"error":"ruta equivocada"})
})
app.put(express.static("public"));
//server 
server.listen(8080, function () {
    console.log("Server active http://localhost:8080");
});
//io socket for chat
