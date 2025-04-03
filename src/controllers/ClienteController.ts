import { Request, Response } from "express";
import Cliente from "../models/Cliente.ts";
import jwt from "jsonwebtoken";
import crypto from "crypto-js";
import dotenv from "dotenv";
import ClienteService from "../services/ClienteService.ts";

dotenv.config();

class ClienteController {
    static async register(req: Request, res: Response): Promise<any> {
        const cliente = req.body;

        console.log("clienteeeeee:",cliente)

        const capturedPokemon = await ClienteService.register(cliente);

        if(capturedPokemon){
            return res.status(200).json({ message: 'Cadastro efetuado!' });
        }

        return res.status(400).json({ message: 'Erro ao cadastrar' });
    }

    static async login(req: Request, res: Response): Promise<any> {
        const { email, password } = req.body;
        const user = await Cliente.findOne({email});
        if(!user)
            return res.status(400).send({ message: "Invalid Email or password"});
        
        var bytes = crypto.AES.decrypt(user.password, process.env.SECRET as string);
        const passwordDecrypted = bytes.toString(crypto.enc.Utf8);

        if(password !== passwordDecrypted) {
            return new Error("Usuário e/ou senha inválidos")
        }

        const secret = process.env.SECRET;

        if(secret)
        {
            const token = jwt.sign(
                {
                    id: user.id
                },
                secret,
                {
                    expiresIn: '2 days'
                }
            )
            return res.status(200).send({token: token})
        }
    }
}

export default ClienteController;