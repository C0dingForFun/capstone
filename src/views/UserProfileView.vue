<template lang="">
    <div class="profile d-flex justify-content-center align-items-center">

        <h2 style="text-align:center">User Profile Card</h2>

        <div class="card">
            <img :src="" alt="John" style="width:100%">
            <h1>John Doe</h1>
            <p class="title">CEO & Founder, Example</p>
            <p>Harvard University</p>
            <p><button>Contact</button></p>
        </div>
    </div>
</template>
<script>
import UpdateUser from '@/components/UpdateUser.vue';

export default {
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