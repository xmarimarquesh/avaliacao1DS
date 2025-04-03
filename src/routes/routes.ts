import { Express } from 'express';
import express from 'express'
import pedido from './pedido.ts'
import cliente from './cliente.ts'
import produto from './produto.ts'
import transport from './transportadora.ts'

export default function (app: Express) {
    app
    .use(express.json())
    .use('/api/customers', cliente)
    .use('/api/orders', pedido)
    .use('/api/products', produto)
    .use('/api/carriers', transport)
}