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
            },
        }
    },
    methods: {
        getUser(){
            const userID = $cookies.get('user_id')
            this.$store.dispatch('getUser',userID) 

        },
        updateUser(){
            this.$store.dispatch('get',this.payload)
        }
    },
    mounted() {
        this.getUser();
    },
}
</script>
<style lang="">
    
</style>