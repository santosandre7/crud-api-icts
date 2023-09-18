import express from 'express';
import cors from 'cors';
import conn from './db/conn.js';
import routes from './routes/router.js';

const app = express();

app.use(cors());

app.use(express.json());

//DB Connection
conn();



app.get('/', (req, res) => {
    res.json({msg: 'Oi, eu estou funcionando'});
});


app.listen(3000, () => {
    console.log('Eu estou funcionando na porta 3000!');
});