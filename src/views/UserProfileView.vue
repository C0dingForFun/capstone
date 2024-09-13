<template lang="">
    <div>
        
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
                image:'',
                userID: '$cookies.get("user_id")'
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
<style lang="">
    
</style>