import { Request, Response } from "express";
import Transportadora from "../models/Transportadora.ts";
import jwt from "jsonwebtoken";
import crypto from "crypto-js";
import dotenv from "dotenv";
import TransportadoraDto from "../dto/Transportadora.ts";
import Entrega from "../models/Entrega.ts";

dotenv.config();

class TransportadoraService {
    static async register(transp: TransportadoraDto): Promise<boolean> {
        
        console.log(transp);
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

        const passwordCrypt = crypto.AES.encrypt(transp.password, process.env.SECRET as string).toString()

        transp.password = passwordCrypt;

        const cli = new Transportadora( transp )

        await cli.save();
        return true;

    }


    static async login(transpr: TransportadoraDto): Promise<any> {

        const cnpj = transpr.cnpj;
        const password = transpr.password;

        const transp = await Transportadora.findOne({cnpj});
        if(!transp)
            return false;
        
        var bytes = crypto.AES.decrypt(transp.password, process.env.SECRET as string);
        const passwordDecrypted = bytes.toString(crypto.enc.Utf8);

        if(password !== passwordDecrypted) {
            return false;
        }

        const secret = process.env.SECRET;

        if(secret)
        {
            const token = jwt.sign(
                {
                    id: transp.id
                },
                secret,
                {
                    expiresIn: '2 days'
                }
            )
            return true
        }
    }
}

export default TransportadoraService;