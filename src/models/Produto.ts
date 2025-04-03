import mongoose, { Schema, Document } from 'mongoose';

interface IProduto extends Document {
    title: string;
    description: string;
    estoque: string;
    valor: number
}

const produtoSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    estoque: { type: String, required: true },
    valor: { type: Number, required: true },
});

const Produto = mongoose.model<IProduto>('Produto', produtoSchema);

export default Produto;