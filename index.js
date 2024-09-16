import cors from 'cors';
import express from 'express';
import { usersRouter,roomsRouter,bookedRouter} from './routes/fullstackRoute.js';

const app = express();

app.use(cors({
    origin: ['http://localhost:8080','https://capstone-a999d.web.app'],
    credentials:true,
}));
// app.use('/users/login',(req,res)=>{
//     res.header('access-control-allow-origin','http://localhost:8080')
// })
app.use(( req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");

    next();
})
app.use(express.json());
app.use(express.static('public'));
app.use('/users',usersRouter);
app.use('/rooms',roomsRouter);
app.use('/booked',bookedRouter);

const port = process.env.PORT || 3005

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})
