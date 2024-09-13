<template lang="">
    <div>
        
    </div>
</template>
<script>
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

        }
    },
}
</script>
<style lang="">
    
</style>