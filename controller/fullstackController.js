import { getUsersDB, getUserDB,insertUserDB, updateUserDB, deleteUserDB,getRoomsDB,getRoomDB,insertRoomDB,updateRoomDB,deleteRoomDB } from "../model/fullstackDB.js";
import {hash} from 'bcrypt';
// <----------------------------------------- Users --------------------------------------------------------------------->
const fetchUsers = async (req,res)=>{
    res.json(await getUsersDB());
}

const fetchUser = async (req, res)=>{
    res.json(await getUserDB(req.params.id));
}

const insertUser =  async(req,res)=>{
    let {user_name, user_surname, age, user_role, username, password, image} = req.body;
    let hashedP = await hash(password,10);
    if (hashedP.stack) throw (hashedP);
    await insertUserDB(user_name, user_surname, age, user_role, username, hashedP, image);
    res.send('User was inserted successfully.');
}

const deleteUser =  async(req,res)=>{
    await deleteUserDB(req.params.id);
    res.send('User has been deleted successfully');
}

const updateUser =  async(req,res)=>{
    let {user_name, user_surname, age, user_role, username, password, image} = req.body
    let users = await getUserDB(req.params.id)

    user_name?user_name = user_name:user_name = users.user_name;
    user_surname?user_surname = user_surname:user_surname = users.user_surname;
    age?age = age:age = users.age;
    user_role?user_role = user_role:user_role = users.user_role;
    username?username = username:username = users.username;
    password?password = password:password = users.password;
    image?image = image:image = users.image;

    await updateUserDB(user_name, user_surname, age, user_role, username, password, image,req.params.id);
    res.send('User has been updated successfully.')
}

// const loginUser = (req,res)=>{
//     res.json({message:"User logged in successfully",token:req.body.token})
// }

// <----------------------------------------- Items --------------------------------------------------------------------->
const fetchRooms = async (req,res)=>{
    res.json(await getRoomsDB());
}

const fetchRoom = async (req, res)=>{
    res.json(await getRoomDB(req.params.id));
}

const insertRoom =  async(req,res)=>{
    let {room_name,room_category,room_description,room_package,price,pets,image,subImage1,subImage2,subImage3} = req.body;
    await insertRoomDB(req.body);
    res.send('Room was inserted successfully.');
}

const deleteRoom =  async(req,res)=>{
    await deleteRoomDB(req.params.id);
    res.send('Room has been deleted successfully');
}

const updateRoom =  async(req,res)=>{
    let {room_name,room_category,room_description,room_package,price,pets,image,subImage1,subImage2,subImage3} = req.body
    let room = await getRoomDB(req.params.id)

    user_name?user_name = user_name:user_name = room.user_name;
    user_surname?user_surname = user_surname:user_surname = room.user_surname;
    age?age = age:age = room.age;
    user_role?user_role = user_role:user_role = room.user_role;
    username?username = username:username = room.username;
    password?password = password:password = room.password;
    image?image = image:image = room.image;

    await updateRoomDB(room_name,room_category,room_description,room_package,price,pets,image,subImage1,subImage2,subImage3,req.params.id);
    res.send('Room has been updated successfully.')
}

export {fetchUsers,fetchUser,insertUser,updateUser,deleteUser,fetchRooms,fetchRoom,insertRoom,updateRoom,deleteRoom}