import mongoose from 'mongoose';
import 'dotenv/config';

async function main() {

    try {

        await mongoose.connect(process.env.CONNECTION_DB);
        console.log('conectado com sucesso ao banco de dados');

    } catch (error) {console.log(`Erro: ${error}`);
        
    }
}

export default main;