import { Router } from "express";

const mercado = Router();


mercado.post("/", async (res, req)=>{
    try{
        res.send("perroa")
        res.status(200)
    } catch (error){
        console.error(error.message)
        res.status(500).json(error.message)
    }
});

export default mercado;