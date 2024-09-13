import { compare } from "bcrypt";
import { getUserDB2 } from "../model/fullstackDB.js";
import jwt from 'jsonwebtoken';
import { config }from "dotenv";
config();

const checkUser = async (req,res,next)=>{
    const {username, password,user_id} = req.body;
    let hashedPassword = (await getUserDB2(username)).password;
    let userRole = (await getUserDB2(username)).user_role;
    // let userID = (await getUserDB(userID)).user_id;
    let result = await compare(password, hashedPassword);
    if(result == true){
        let token = jwt.sign({username:username,userRole:userRole},process.env.SECRET_KEY, {expiresIn:'1h'});
        console.log(token);
        req.body.token = token;
        req.body.userRole = userRole
        // req.body.token = userID;
        next();
    }else{
        res.send('Password incorrect');
    }
}
 
const verifyAToken = (req,res,next)=>{
    let {cookie} = req.headers;
    // checks if the token exists first
    let token = cookie && cookie.split('=')[1];
    console.log(token);
    jwt.verify(token, process.env.SECRET_KEY,(err, decoded)=>{
        if(err){
            res.json({message:'Token has expired'});
            return;
        }
        req.body.username = decoded.username
        req.body.userRole = decoded.userRole
        console.log(req.body.username);
        next();
    })
}

export {checkUser,verifyAToken}