import cors from 'cors';
import express from 'express';
import { usersRouter,roomsRouter,bookedRouter} from './routes/fullstackRoute.js';

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cors({
    origin: 'http://localhost:8080',
    credentials:true
}));
app.use('/users',usersRouter);
app.use('/rooms',roomsRouter);
app.use('/booked',bookedRouter);

const port = process.env.PORT || 3005

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})
