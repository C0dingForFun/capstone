<template lang="">
<div class="login pt-4 row align-items-center">
    <div v-if="signUp" class="signup mt-5 justify-content-center">
        <h1>Sign Up here:</h1>
        <table style="margin:auto">
            <tbody>
                <tr><th><label>Enter your name:</label></th><td><input type="text" v-model="payload.user_name"><br><br></td></tr>
                <tr><th><label>Enter your surname:</label></th><td><input type="text" v-model="payload.user_surname"><br><br></td></tr>
                <tr><th><label>Enter your age:</label></th><td><input type="text" v-model="payload.age"><br><br></td></tr>
                <tr><th><label>Enter your username:</label></th><td><input type="text" v-model="payload.username"><br><br></td></tr>
                <tr><th><label>Enter your password:</label></th><td><input type="password" v-model="payload.password"></td></tr>
                <tr><th><label>Enter an image:</label></th><td><input type="text" v-model="payload.image"></td></tr>
                <tr><td><button @click="addUser()">Submit</button></td></tr>
            </tbody>
        </table>
    </div>
    <div v-else="login" class="signup mt-5">
        <h1>Login here:</h1>
        <div>
            <label>Enter your Username:</label>
            <input type="text" v-model="payload.username" required><br><br>
            <label>Enter your Password:</label>
            <input type="password" v-model="payload.password" required><br><br>
            <button @click="loginUser()" >Login</button>
        </div>
        <button @click="signUp = !signUP">Signup</button>
    </div>
</div>
</template>
<script>
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";
import router from '@/router';
import { mapActions } from 'vuex';
export default {
    data(){
        return{
            payload:{
                user_name:'',
                user_surname:'',
                age:'',
                username:'',
                password:'',
                image:'',
            },
            signUp: false,
            login:true
        }
    },
    methods:{
        ...mapActions(['addUser']),
        async addUser(){
            await this.$store.dispatch('addUser',this.payload);
            toast("You have signed up successfully", {
                "theme": "dark",
                "type": "error",
                "dangerouslyHTMLString": true,
                autoClose: 2000,
                position: toast.POSITION.BOTTOM_CENTER,
            })
            router.push('/login')
        },

        async loginUser(){
            await  this.$store.dispatch('loginUser',this.payload);
        }
        
    }
}
</script>
<style scoped>
    .row{
        margin-left:0px !important;
    }
    .login{
        width:100vw !important;
        height:100vh;
        background-image:url('https://c0dingforfun.github.io/capstone-images/Login/Login.gif');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display:flex;
        align-items: center;
        justify-content: center;
        color:whitesmoke;
        text-shadow:1px 1px black;
    }
    .signup{
        width:80vw;
        height:auto;
        margin:auto;
        padding:1em;
        border-radius:20px;
        background-color:rgba(144, 216, 63, 0.6);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(4px);
    }
    .login button{
        padding:0.6em;
        border-radius:20px;
        background: black;
        color:whitesmoke;
        text-decoration: none;
        transition: 0.7s;
    }
    .login button:hover{
        padding:0.6em;
        border-radius:20px;
        background: rgba(144, 216, 63);
    }
</style> 