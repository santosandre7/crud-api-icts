import express from 'express';
import routerController from './router/routes.js';

const app = express();

app.use(express.json());


// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

console.log('11111');
app.use('/', routerController);


console.log('222222');

app.listen(3000, () => {
    console.log('Estou rodando na porta 3000');
});