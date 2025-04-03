import { Express } from 'express';
import express from 'express'
import pedido from './pedido.ts'
import cliente from './cliente.ts'

export default function (app: Express) {
    app
    .use(express.json())
    .use('/api/customers', cliente)
    .use('/api/carriers', pedido)
}