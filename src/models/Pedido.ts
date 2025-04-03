import mongoose, { Schema, Document } from 'mongoose';
import Produto from './Produto.ts';
interface IPedido extends Document {
    title: string;
    description: string;
    dateInicio: Date;
    valorTotal: number;
    status: boolean;
    IDCliente: string;
    IDProduto: string
}

const pedidoSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dateInicio: { type: String, required: true },
    valorTotal: { type: Number, required: true },
    status: { type: Boolean, required: true },
    IDCliente: { type: String, required: true },
    IDProduto: { type: String, required: true }
});

const Pedido = mongoose.model<IPedido>('Pedido', pedidoSchema);

export default Pedido;