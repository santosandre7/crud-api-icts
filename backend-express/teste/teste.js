import { Router } from 'express';

export const router = Router();


router.get('/', (req, res) => {
    res.json({msg: 'Oi, eu sou o get!!!!'});
});

export const teste = console.log('Estou na classe teste');


export const testeService = {};


export default teste;

