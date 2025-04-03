import express, { Request, Response, Router } from 'express';
const router: Router = express.Router();
import ClienteController from '../controllers/ClienteController.ts'

router.post("/", ClienteController.register);
router.post("/login", ClienteController.login);
router.get("/:id/orders", );
router.delete("/:id", );

export default router;