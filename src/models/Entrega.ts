import mongoose, { Schema, Document } from 'mongoose';

interface IEntrega extends Document {
    description: string;
    dateInicio: Date;
    dateFim: Date;
    status: string;
    IDPedido: number
}

const entregaSchema: Schema = new Schema({
    description: { type: String, required: true },
    dateInicio: { type: String, required: true },
    dateFim: { type: String, required: true },
    status: { type: String, required: true },
    IDPedido: { type: Int32Array, required: true },
});

const Entrega = mongoose.model<IEntrega>('Entrega', entregaSchema);

export default Entrega;