import express, { Request, Response, Router } from 'express';
const router: Router = express.Router();
import ProdutoController from "../controllers/ProdutoController.ts";

router.post("/", ProdutoController.createProduto);
router.get("/", ProdutoController.getProdutos);
router.delete("/:id", ProdutoController.deleteProduto);

export default router;