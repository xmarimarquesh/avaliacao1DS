import mongoose, { Schema, Document } from 'mongoose';

interface IPedido extends Document {
    title: string;
    description: string;
    dateInicio: Date;
    valorTotal: number
}

const pedidoSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dateInicio: { type: String, required: true },
    valorTotal: { type: Float64Array, required: true },
});

const Pedido = mongoose.model<IPedido>('Pedido', pedidoSchema);

export default Pedido;