import { Router } from "express";
import controller  from "../controllers/product_controller.js";

const router=Router();
router.post("/createProduct",controller.createOneProduct)
router.get("/getAllProduct",controller.getAllProduct)

export  default router