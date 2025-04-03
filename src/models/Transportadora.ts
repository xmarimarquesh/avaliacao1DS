import mongoose, { Schema, Document } from 'mongoose';

interface ITransportadora extends Document {
    title: string;
    description: string;
}

const transportadoraSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});

const Transportadora = mongoose.model<ITransportadora>('Transportadora', transportadoraSchema);

export default Transportadora;