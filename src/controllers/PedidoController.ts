import { Request, Response } from "express";
import Pedido from "../models/Pedido.ts";
import jwt from "jsonwebtoken";
import crypto from "crypto-js";
import dotenv from "dotenv";
import PedidoService from "../services/PedidoService.ts";

dotenv.config();

class PedidoController {
    static async newOrder(req: Request, res: Response): Promise<any> {
        const Pedido = req.body;

        console.log("Pedidoeeeee:",Pedido)

        const ok = await PedidoService.newOrder(Pedido);

        if(ok){
            return res.status(200).json({ message: 'Cadastro efetuado!' });
        }

        return res.status(400).json({ message: 'Erro ao cadastrar' });
    }

    static async putOrder(req: Request, res: Response): Promise<any> {
        const ped = req.body;

        const ok = await PedidoService.putPedido(ped);

        if(ok){
            return res.status(200).json({ message: 'Pedido Deletado!' });
        }

        return res.status(400).json({ message: 'Erro ao deletar pedido...' });
    }

    static async findOrdersByStatus(req: Request, res: Response): Promise<any> {
        const id = req.params;

        const orders = await Pedido.find({where:{IDPedido:id}});

        if(orders.length>=1){
            return res.status(200).json({ message: 'Pedidos encontrados!' });
        }

        return res.status(400).json({ message: 'Esse Pedido não possui pedidos.' });
    }
}

export default PedidoController;