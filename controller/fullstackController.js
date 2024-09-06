import { getUsersDB, getUserDB,insertUserDB, updateUserDB, deleteUserDB } from "../model/fullstackDB.js";
import {hash} from 'bcrypt';
// <----------------------------------------- Users --------------------------------------------------------------------->
const fetchUsers = async (req,res)=>{
    res.json(await getUsersDB());
}

const fetchUser = async (req, res)=>{
    res.json(await getUserDB(req.params.id));
}

const insertUser =  async(req,res)=>{
    let {user_id, user_name, user_surname, age, user_role, username, password, image} = req.body;
    let hashedP = await hash(password,10);
    if (hashedP.stack) throw (hashedP);
    await insertUserDB(user_id, user_name, user_surname, age, user_role, username, hashedP, image);
    res.send('User was inserted successfully.');
}

const deleteUser =  async(req,res)=>{
    await deleteUserDB(req.params.id);
    res.send('User has been deleted successfully');
}

const updateUser =  async(req,res)=>{
    let {user_name, user_surname, age, user_role, username, password, image} = req.body
    let users = await getUserDB(req.params.id)

    name?name = name:name = users.name;
    surname?surname = surname:surname = users.surname;
    age?age = age:age = users.age;
    fav_coding_lang?fav_coding_lang = fav_coding_lang:fav_coding_lang = users.fav_coding_lang;
    fav_car?fav_car = fav_car:fav_car = users.fav_car;
    eye_colour?eye_colour = eye_colour:eye_colour = users.eye_colour;

    await updateUserDB(user_name, user_surname, age, user_role, username, password, image,req.params.id);
    res.send('User has been updated successfully.')
}

// const loginUser = (req,res)=>{
//     res.json({message:"User logged in successfully",token:req.body.token})
// }

export {fetchUsers,fetchUser,insertUser,updateUser,deleteUser}