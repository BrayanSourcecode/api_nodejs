import { Router } from "express";
import NotasController from "../controllers/notas_controllers.js"


const router =Router()

router.get("/createNote",NotasController.createNote);


export default router