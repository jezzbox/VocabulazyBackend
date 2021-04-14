
import dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import vocabularyRoutes from './routes/vocabulary.js'
import cardsRoutes from './routes/cards.js'

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(cors());

app.use('/vocabulary', vocabularyRoutes)
app.use('/cards', cardsRoutes)

const CONNECTION_URL = process.env.MONGODB_CONNECTION_STRING
const PORT = process.env.port || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);