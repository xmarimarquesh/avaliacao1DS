import express, { Request, Response, Router } from 'express';
const router: Router = express.Router();
import PedidoController from '../controllers/PedidoController.ts';

router.get("/", PedidoController.findOrdersByStatus);
router.post("/", PedidoController.newOrder);
router.put("/:id/cancel", PedidoController.putOrder);

export default router;