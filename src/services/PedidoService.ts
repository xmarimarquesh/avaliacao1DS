import { Request, Response } from "express";
import Pedido from "../models/Pedido.ts";
import jwt from "jsonwebtoken";
import crypto from "crypto-js";
import dotenv from "dotenv";
import PedidoDto from '../dto/Pedido.ts'
import Entrega from "../models/Entrega.ts";

dotenv.config();

class PedidoService {
    static async newOrder(order: PedidoDto): Promise<boolean> {
        const cli = new Pedido( order )
        await cli.save();
        return true;
    }

    static async putPedido(pedido: PedidoDto) {
        try {

            const filter = { id: pedido.id };
            const update = { status: false }; 

            const entregas = await Entrega.findOne({where:{IDPedido:pedido.id}});

            if(entregas)
                if(entregas.status == "enviado")
                    return false;
            
            const prod2 = await Pedido.findOneAndUpdate(filter, update);
            
            if (!prod2) {
                return false;
            }
            return true;
        } catch (error) {
            return false;
        }
    }
}

export default PedidoService;