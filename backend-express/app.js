import express from 'express';
import algumacoisa from './teste/teste.js';

// const testeRouter = router();




const app = express();
app.use(express.json);

app.use('/teste', algumacoisa);

app.listen(3000, () => {console.log('estou rodando na porta 3000');});