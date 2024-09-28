<template lang="">
    <!-- <div v-if="getUser()"> -->
       <div class="profile d-flex justify-content-center align-items-center">

        <h2 style="text-align:center">User Profile Card</h2>

        <div class="card">
            <!-- <img :src="$store.state.image"/>
            <h1>{{$store.state.user_name}}</h1>
            <p class="card-title">{{$store.state.user.age}}</p>
            <p>{{$store.state.user.username}}</p> -->
            <button @click="logOut()">Log Out</button> 
        </div> 
        </div> 
     <!-- </div> 
    <div v-else>
        <SpinnerComp/>
    </div> -->
    
</template>
<script>
// import UpdateUser from '@/components/UpdateUser.vue';
// import axios from 'axios';
// import {useCookies} from 'vue-cookies';
import SpinnerComp from '@/components/SpinnerComp.vue';
import router from '@/router';
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";

// axios.defaults.withCredentials = true;
// axios.defaults.headers = $cookies.get('token');
export default {
    components:{
        SpinnerComp
    },
    data() {
        return {
            payload:{
                user_name:'',
                user_surname:'',
                age:'',
                username:'',
                password:'',
                image:''
            },
        }
    },
    methods: {
        // getUser(){
        //     this.$store.dispatch('getUser',this.payload.userID) 
        //     this.$cookies.get('token')
        //     $cookies.get('user_id')
        // },
        update(){
            this.$store.dispatch('getUser',this.payload)
        },
        logOut(){
                $cookies.remove('token');
                $cookies.remove('userRole');
                $cookies.remove('user_id');
                toast("Logged out successfully",{
                    "theme": "dark",
                    "type": "default",
                    "position": "top-center",
                    "transition": "zoom",
                    "dangerouslyHTMLString": true,
                    autoClose: 3000,
                    position: toast.POSITION.BOTTOM_CENTER,
                })
                router.push('/');
            } 
    },
    mounted() {
        // this.getUser();
        // this.$cookies.get('user_id')
    },
}
</script>
<style scoped>
    .profile{
        width:100vw;
        height:100vh;
    }
</style>