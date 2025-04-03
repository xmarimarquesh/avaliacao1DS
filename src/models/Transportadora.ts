import mongoose, { Schema, Document } from 'mongoose';

interface ITransportadora extends Document {
    name: string;
    description: string;
    cnpj: string;
    tipo_transporte: string,
    password: string
}

const transportadoraSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    cnpj: { type: String, required: true },
    tipo_transporte: { type: String, required: true },
    password: { type: String, required: true },
});

const Transportadora = mongoose.model<ITransportadora>('Transportadora', transportadoraSchema);

export default Transportadora;