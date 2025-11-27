const express = require ("express");//
const app = express (); 
const path = require ("path");


app.use(express.static("Public"));


app.listen(8080,()=>console.log("El link de mi aplicacion es: http://localhost:8080/"));


//manejo de rutas

app.get("/",(req, res)=>{
res.sendFile(path.resolve(__dirname,"./Views/Index.html"))
});


app.get("/Productos",(req, res)=>{
res.sendFile(path.resolve(__dirname,"./Views/Productos.html"))
});

app.get("/Contactanos",(req, res)=>{
res.sendFile(path.resolve(__dirname,"./Views/Contactanos.html"))
});


app.get("/Nosotros",(req, res)=>{
res.sendFile(path.resolve(__dirname,"./Views/Nosotros.html"))
});