import express from "express"
import rutas from "./rutas/rutas.js"
import ejs from "ejs"

const app = express()
app.set("view engine", "ejs")
app.use("/", rutas)

const PORT = process.env.PORT || 3000
app.listen (PORT, function(){
    console.log("servidor en http://localhost:"+PORT)

});