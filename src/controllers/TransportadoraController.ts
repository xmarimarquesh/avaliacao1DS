import { Request, Response } from "express";
import Transportadora from "../models/Transportadora.ts";
import jwt from "jsonwebtoken";
import crypto from "crypto-js";
import dotenv from "dotenv";
import TransportadoraService from "../services/TransportadoraService.ts";
import Entrega from "../models/Entrega.ts";

dotenv.config();

class TransportadoraController {
    static async register(req: Request, res: Response): Promise<any> {
        const transportadora = req.body;

        if(transportadora.cnpj.length != 14){
            return res.status(400).json({ message: 'CNPJ inválido! Precisam ter 14 caracteres.' });
        }

        const ok = await TransportadoraService.register(transportadora);

        if(ok){
            return res.status(200).json({ message: 'Cadastro efetuado!' });
        }

        return res.status(400).json({ message: 'Erro ao cadastrar' });
    }

    static async deliveries(req: Request, res: Response): Promise<any> {
        const id = req.params;

        const transp = await Entrega.find({where:{IDTransportadora:id}});

        if(transp.length>=1){
            return res.status(200).json({ Entregas: {transp} });
        }

        return res.status(400).json({ message: 'Nenhuma entrega encontrada.' });
    }

    

    static async login(req: Request, res: Response): Promise<any> {
        const Transportadora = req.body;

        const ok = await TransportadoraService.login(Transportadora);

        if(ok){
            return res.status(200).json({ message: 'Login efetuado!' });
        }

        return res.status(400).json({ message: 'Erro ao cadastrar' });
    }

}

export default TransportadoraController;