<template lang="">
<div class="login pt-4 row">
    <div class="mt-5">
        <button @click="signUp = !signUP">Signup</button>
        <button @click="signUP = login">Login</button>
    </div>
    <div v-if="signUp" class="signup mt-5">
        <h1>Sign Up here:</h1>
        <table style="margin:auto">
            <tbody>
                <tr><th><label>Enter your name:</label></th><td><input type="text" v-model="user_name"><br><br></td></tr>
                <tr><th><label>Enter your surname:</label></th><td><input type="text" v-model="user_surname"><br><br></td></tr>
                <tr><th><label>Enter your age:</label></th><td><input type="text" v-model="age"><br><br></td></tr>
                <tr><th><label>Enter your username:</label></th><td><input type="text" v-model="username"><br><br></td></tr>
                <tr><th><label>Enter your password:</label></th><td><input type="password" v-model="password"></td></tr>
                <tr><td><button @click="addUser()">Submit</button></td></tr>
            </tbody>
        </table>
    </div>
    <div v-else="login" class="signup mt-5">
        <h1>Login here:</h1>
        <div>
            <label>Enter your Username:</label>
            <input type="text" v-model="username" required><br><br>
            <label>Enter your Password:</label>
            <input type="password" v-model="password" required><br><br>
            <button @click="loginUser()" >Login</button>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            user_name:'',
            user_surname:'',
            age:'',
            username:'',
            password:'',
            signUp: false,
            login:true
        }
    },
    methods:{
        addUser(){
            this.$store.dispatch('addUser',this.$data);
        },

        async loginUser(){
            try {
                await  this.$store.dispatch('loginUser',this.$data);
                toast("User is has been deleted successfully", {
                "theme": "dark",
                "type": "success",
                "dangerouslyHTMLString": true
                })  
                location.reload();
            } catch (error) {
                toast("User is has been deleted successfully", {
                "theme": "dark",
                "type": "success",
                "dangerouslyHTMLString": true
                })  
            }
        }

    }
}
</script>
<style scoped>
    .login{
        width:100vw;
        height:100vh;
        background-image:url('https://c0dingforfun.github.io/capstone-images/Login/Login.gif');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display:flex;
        align-items: center;
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
</style>