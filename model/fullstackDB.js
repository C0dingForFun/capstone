import {pool} from '../config/config.js'

// Users
const getUsersDB = async (req,res)=>{
    let [data] = await pool.query('SELECT * FROM users')
    return data;
}

const getUserDB = async (username)=>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    return data;
}

const insertUserDB = async(user_name, user_surname, age, user_role, username, password, image)=>{
    let [data] = await pool.query(`
        INSERT INTO users (user_name, user_surname, age, user_role, username, password, image)
        VALUES(?,?,?,?,?,?,?)`,
        [user_name, user_surname, age, user_role, username, password, image]
    )
}

const deleteUserDB = async(id)=>{
    await pool.query(`DELETE FROM users WHERE id = ?`,[id])
}

const updateUserDB = async(user_name, user_surname, age, user_role, username, password, image,id )=>{
    await pool.query(`UPDATE users SET user_name = ?, user_surname = ?, age = ?, user_role = ?, username = ?, password = ?, image = ? WHERE id = ?`,[user_name, user_surname, age, user_role, username, password, image,id])
}

export {getUsersDB,getUserDB,insertUserDB,updateUserDB,deleteUserDB}