import {pool} from '../config/config.js'

// Users
const getUsersDB = async (req,res)=>{
    let [data] = await pool.query('SELECT * FROM users')
    return data;
}

const getUserDB = async (user_id)=>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE user_id = ?', [user_id]);
    return data;
}

const insertUserDB = async(user_name, user_surname, age, user_role, username, password, image)=>{
    let [data] = await pool.query(`
        INSERT INTO users (user_name, user_surname, age, user_role, username, password, image)
        VALUES(?,?,?,?,?,?,?)`,
        [user_name, user_surname, age, user_role, username, password, image]
    )
}

const deleteUserDB = async(user_id)=>{
    await pool.query(`DELETE FROM users WHERE user_id = ?`,[user_id])
}

const updateUserDB = async(user_name, user_surname, age, user_role, username, password, image,user_id )=>{
    await pool.query(`UPDATE users SET user_name = ?, user_surname = ?, age = ?, user_role = ?, username = ?, password = ?, image = ? WHERE user_id = ?`,[user_name, user_surname, age, user_role, username, password, image,user_id])
}

//Rooms
const getRoomsDB = async (req,res)=>{
    let [data] = await pool.query('SELECT * FROM rooms')
    return data;
}

const getRoomDB = async (room_id)=>{
    let [[data]] = await pool.query('SELECT * FROM rooms WHERE room_id = ?', [room_id]);
    return data;
}
export {getUsersDB,getUserDB,insertUserDB,updateUserDB,deleteUserDB,getRoomsDB,getRoomDB}