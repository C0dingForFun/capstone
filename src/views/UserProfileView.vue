<template lang="">
    <div v-if="user()">
       <div class="profile d-flex justify-content-center align-items-center">

        <h2 style="text-align:center">User Profile Card</h2>

        <div class="card">
            <img :src="$store.state.image"/>
            <h1>{{$store.state.user_name}} {{$store.state.user.user_surname}}</h1>
            <p class="card-title">{{$store.state.user.age}}</p>
            <p>{{$store.state.user.username}}</p>
            <button @click="logOut()">Log Out</button>
        </div>
        </div> 
    </div>
    <div v-else>
        <SpinnerComp/>
    </div>
    
</template>
<script>
// import UpdateUser from '@/components/UpdateUser.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';
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
        getUser(){
            this.$store.dispatch('getUser',this.payload.userID) 
        },
        update(){
            this.$store.dispatch('getUser',this.payload)
        },
        logOut(){
            router.push('/login');
        }
    },
    mounted() {
        this.getUser();
    },
}
</script>
<style scoped>
    .profile{
        width:100vw;
        height:100vh;
    }
</style>