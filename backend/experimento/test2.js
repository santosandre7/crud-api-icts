import { Router } from 'express';

export const router = Router();

console.log('Entrei no arquivo routes.js');

router.get('/', (req, res) => {
    console.log('Entrei no router');
    res.send('Olá mundo!');
});

router.get('/teste', (req, res) => {
    console.log('Entrei no router');
    res.send('Olá mundo! 22222');
});


export default router;
