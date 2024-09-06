import express from 'express';
import { usersRouter } from './routes/fullstackRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cors({
    origin: 'http://localhost:8080',
    credentials:true
}));
app.use('/users',usersRouter);
// app.use('/rooms',roomsRouter);

const port = process.env.PORT || 3005

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})

//editing without password hashing
//only backend