import { Request, Response } from "express";
import Cliente from "../models/Cliente.ts";
import jwt from "jsonwebtoken";
import crypto from "crypto-js";
import dotenv from "dotenv";
import ClienteService from "../services/ClienteService.ts";
import Pedido from "../models/Pedido.ts";

dotenv.config();

class ClienteController {
    static async register(req: Request, res: Response): Promise<any> {
        const cliente = req.body;

        console.log("clienteeeeee:",cliente)

        const ok = await ClienteService.register(cliente);

        if(ok){
            return res.status(200).json({ message: 'Cadastro efetuado!' });
        }

        return res.status(400).json({ message: 'Erro ao cadastrar' });
    }

    static async login(req: Request, res: Response): Promise<any> {
        const cliente = req.body;

        const ok = await ClienteService.login(cliente);

        if(ok){
            return res.status(200).json({ message: 'Login efetuado!' });
        }

        return res.status(400).json({ message: 'Erro ao logar' });
    }

    static async delete(req: Request, res: Response): Promise<any> {
        const cliente = req.body;

        const ok = await ClienteService.login(cliente);

        if(ok){
            return res.status(200).json({ message: 'Login efetuado!' });
        }

        return res.status(400).json({ message: 'Erro ao logar' });
    }

    static async findOrders(req: Request, res: Response): Promise<any> {
        const id = req.params;

        const orders = await Pedido.find({where:{IDCliente:id}});

        if(orders.length>=1){
            return res.status(200).json({ message: 'Pedidos encontrados!' });
        }

        return res.status(400).json({ message: 'Esse cliente não possui pedidos.' });
    }
}

export default ClienteController;