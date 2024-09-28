import { getUsersDB, getUserDB,insertUserDB, updateUserDB, deleteUserDB,getRoomsDB,getRoomDB,insertRoomDB,updateRoomDB,deleteRoomDB,getBookedDB,getSingleBookedDB,insertBookedDB,updateBookedDB,deleteBookedDB,categoriesDB,sortLowPriceDB,sortHighPriceDB }
 from "../model/fullstackDB.js";
import {hash} from 'bcrypt'
// <----------------------------------------- Users --------------------------------------------------------------------->
const fetchUsers = async (req,res)=>{
    res.json(await getUsersDB());
}

const fetchUser = async (req, res)=>{
    res.json(await getUserDB(req.params.id));
}

const insertUser =  async(req,res)=>{
    let {user_name, user_surname, age, user_role, username, password, image} = req.body;
    user_role = 'user'
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

const loginUser = (req,res)=>{
    res.json({message:"User logged in successfully",
        token:req.body.token,
        userRole:req.body.userRole,
        user_id:req.body.user_id})
}

// <----------------------------------------- Items --------------------------------------------------------------------->
const fetchRooms = async (req,res)=>{
    res.json(await getRoomsDB());
}

const fetchRoom = async (req, res)=>{
    res.json(await getRoomDB(req.params.id));
}

const insertRoom =  async(req,res)=>{
    let {room_name,room_category,room_description,room_package,price,pets,image,subImage1,subImage2,subImage3} = req.body;
    await insertRoomDB(room_name,room_category,room_description,room_package,price,pets,image,subImage1,subImage2,subImage3);
    res.send('Room was inserted successfully.');
}

const deleteRoom =  async(req,res)=>{
    await deleteRoomDB(req.params.id);
    res.send('Room has been deleted successfully');
}

const updateRoom =  async(req,res)=>{
    let {room_name,room_category,room_description,room_package,price,pets,image,subImage1,subImage2,subImage3} = req.body
    let room = await getRoomDB(req.params.id)

    room_name?room_name = room_name:room_name = room.room_name;
    room_category?room_category = room_category:room_category = room.room_category;
    room_description?room_description = room_description:room_description = room.room_description;
    room_package?room_package = room_package:room_package = room.room_package;
    price?price = price:price = room.price;
    pets?pets = pets:pets = room.pets;
    image?image = image:image = room.image;
    subImage1?subImage1 = subImage1:subImage1 = room.subImage1;
    subImage2?subImage2 = subImage2:subImage2 = room.subImage2;
    subImage3?subImage3 = subImage3:subImage3 = room.subImage3;

    await updateRoomDB(room_name,room_category,room_description,room_package,price,pets,image,subImage1,subImage2,subImage3,req.params.id);
    res.send('Room has been updated successfully.')
}

const fetchCategories = async (req,res)=>{
    res.json(await categoriesDB());
}

const sortLowPrice = async (req,res)=>{
    res.json(await sortLowPriceDB());
}

const sortHighPrice = async (req,res)=>{
    res.json(await sortHighPriceDB());
}

// <----------------------------------------- Booked --------------------------------------------------------------------->
const fetchBooked = async (req,res)=>{
    res.json(await getBookedDB());
}

const fetchSingleBooked = async (req, res)=>{
    res.json(await getSingleBookedDB(req.params.id));
}

const insertBooked =  async(req,res)=>{
    let {user_id,room_id,check_in, check_out} = req.body;
    await insertBookedDB(user_id,room_id,check_in, check_out);
    res.send('Booked room was inserted successfully.');
}

const deleteBooked =  async(req,res)=>{
    await deleteBookedDB(req.params.id);
    res.send('Booked room has been deleted successfully');
}

const updateBooked =  async(req,res)=>{
    let {user_id,room_id} = req.body
    let booked = await getSingleBookedDB(req.params.id)

    user_id?user_id = user_id:user_id = booked.user_id;
    room_id?room_id = room_id:room_id = booked.room_id;
    
    await updateBookedDB(user_id,room_id,req.params.id);
    res.send('Booked room has been updated successfully.')
}

export {fetchUsers,fetchUser,insertUser,updateUser,deleteUser,fetchRooms,fetchRoom,insertRoom,updateRoom,deleteRoom,fetchBooked,fetchSingleBooked,insertBooked,updateBooked,deleteBooked,loginUser,fetchCategories,sortLowPrice,sortHighPrice}