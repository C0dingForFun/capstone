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

const insertUserDB = async(room_name,room_category,room_description,room_package,price,pets,image,subImage1,subImage2,subImage3)=>{
    let [data] = await pool.query(`
        INSERT INTO users (room_name,room_category,room_description,room_package,price,pets,image,subImage1,subImage2,subImage3)
        VALUES(?,?,?,?,?,?,?)`,
        [room_name,room_category,room_description,room_package,price,pets,image,subImage1,subImage2,subImage3]
    )
}

const deleteUserDB = async(user_id)=>{
    await pool.query(`DELETE FROM users WHERE user_id = ?`,[user_id])
}

const updateUserDB = async(room_name,room_category,room_description,room_package,price,pets,image,subImage1,subImage2,subImage3,user_id )=>{
    await pool.query(`UPDATE users SET user_name = ?, user_surname = ?, age = ?, user_role = ?, username = ?, password = ?, image = ? WHERE user_id = ?`,[room_name,room_category,room_description,room_package,price,pets,image,subImage1,subImage2,subImage3,user_id])
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

const insertRoomDB = async(room_name,room_category,room_description,room_package,price,pets,image,subImage1,subImage2,subImage3)=>{
    let [data] = await pool.query(`
        INSERT INTO rooms (room_name,room_category,room_description,room_package,price,pets,image,subImage1,subImage2,subImage3)
        VALUES(?,?,?,?,?,?,?,?,?,?)`,
        [room_name,room_category,room_description,room_package,price,pets,image,subImage1,subImage2,subImage3]
    )
}

const deleteRoomDB = async(room_id)=>{
    await pool.query(`DELETE FROM rooms WHERE room_id = ?`,[room_id])
}

const updateRoomDB = async(room_name,room_category,room_description,room_package,price,pets,image,subImage1,subImage2,subImage3,room_id )=>{
    await pool.query(`UPDATE rooms SET room_name = ?,room_category = ?,room_description = ?,room_package = ?,price = ?,pets = ?,image = ?,subImage1 = ?,subImage2 = ?,subImage3 = ? WHERE room_id = ?`,[room_name,room_category,room_description,room_package,price,pets,image,subImage1,subImage2,subImage3,room_id])
}
export {getUsersDB,getUserDB,insertUserDB,updateUserDB,deleteUserDB,getRoomsDB,getRoomDB,insertRoomDB,updateRoomDB,deleteRoomDB}