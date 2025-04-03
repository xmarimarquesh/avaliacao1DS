import { Request, Response } from "express";
import Cliente from "../models/Cliente.ts";
import jwt from "jsonwebtoken";
import crypto from "crypto-js";
import dotenv from "dotenv";
import ClienteDto from "../dto/Cliente.ts";

dotenv.config();

class ClienteService {
    static async register(user: ClienteDto): Promise<boolean> {
        
        console.log(user);
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

        const passwordCrypt = crypto.AES.encrypt(user.password, process.env.SECRET as string).toString()

        user.password = passwordCrypt;

        const cli = new Cliente( user )

        await cli.save();
        return true;

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

export default ClienteService;