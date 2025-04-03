import mongoose, { Schema, Document } from "mongoose";

interface ICliente extends Document {
    name: string;
    email: string;
    password: string;
    telefone: string;
    endereco: string;
}

const ClienteSchema = new Schema<ICliente>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    telefone: { type: String, required: true },
    endereco: { type: String, required: true }
});

const Cliente = mongoose.model<ICliente>("Cliente", ClienteSchema);

export default Cliente;