import { Request, Response } from "express";
import Produto from '../models/Produto.ts';

class ProdutoController {

    static async getProdutos(req: Request, res: Response) {
        try {
            const prod = await Produto.find();
            res.status(200).json(prod);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao buscar produtos', error });
        }
    }

    static async createProduto(req: Request, res: Response) {
        const produtoBody = req.body;
        try {
            const produto = new Produto( produtoBody );
            await produto.save();
            res.status(201).json(produto);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao criar o produto', error });
        }
    }

    static async deleteProduto(req: Request, res: Response) {
        const { id } = req.params;
    
        try {
            const prod = await Produto.findByIdAndDelete(id);
            if (!prod) {
                res.status(404).json({ message: 'Produto não encontrado' });
            }
            res.status(200).json({ message: 'Produto deletado com sucesso' });
        } catch (error) {
            res.status(400).json({ message: 'Erro ao deletar produto', error });
        }
    }
}
   
export default ProdutoController;