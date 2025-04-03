import express, { Request, Response, Router } from 'express';
const router: Router = express.Router();
import TransportadoraController from '../controllers/TransportadoraController.ts';

router.post("/", TransportadoraController.register);
router.post("/login", TransportadoraController.login);
router.get("/:id/deliveries", TransportadoraController.deliveries);

export default router;