import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/connect.js'
import path from 'path';
import cors from 'cors';
import colors from 'colors'
import routes from './routes/index.js';


const PORT = process.env.PORT || 5000;

dotenv.config()
connectDB()
console.log(process.env.MONGO_URI)
const app = express();
app.use(express.json())
app.use(cors());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('api is running...');
})



app.listen(PORT, console.log(`server running on port ${PORT}`.yellow.bold));