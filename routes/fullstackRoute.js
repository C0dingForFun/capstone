import express from 'express';
import { fetchUsers,fetchUser, insertUser, updateUser, deleteUser,fetchRooms,fetchRoom,insertRoom,updateRoom,deleteRoom, } from '../controller/fullstackController.js';
// import { checkUser,verifyAToken } from '../middleware/authenticate.js';

const usersRouter = express.Router();
const roomsRouter = express.Router();
const bookedRouter = express.Router();

usersRouter.get('/',fetchUsers)
roomsRouter.get('/',fetchRooms)
// fruitsRouter.get('/',verifyAToken,fetchFruits)

// fruitsRouter.post('/cart',verifyAToken,addToCart)

usersRouter.post('/insertUser',insertUser)
roomsRouter.post('/insertRoom',insertRoom)

// usersRouter.post('/login',checkUser,loginUser );

usersRouter
    .route('/:id')
        .get(fetchUser)
        .delete(deleteUser)
        .patch(updateUser)

roomsRouter
    .route('/:id')
        .get(fetchRoom)
        .delete(deleteRoom)
        .patch(updateRoom)

bookedRouter
    .route('/:id')
        .get(fetchRoom)
        .delete(deleteRoom)
        .patch(updateRoom)

export {usersRouter,roomsRouter};
