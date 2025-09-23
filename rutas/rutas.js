import {Router} from "express"
const router = Router()

router.get("/", (req, res)=>{
    res.render("Index")
})

router.get("/abc", (req, res)=>{
    res.send("Estas en abc")
})

router.get("/contactanos", (req, res)=>{
    res.render("Contactanos")
})

export default router