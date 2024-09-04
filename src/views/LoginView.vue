<template lang="">
<div>
        <div class="mx-auto my-auto">
            <h1 class="text-center text-white"><b>Reach Us Here:</b></h1>
                <div class="row text">
                    <div class="col-md-6 form-group">
                        <input type="text" name="name" class="form-control px-2" placeholder="Your Username" v-model="username">
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                        <input type="text" name="surname" class="form-control px-2" placeholder="Your Password" v-model="password">
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            password:''
        }
    },
}
</script>
<style scoped>
    
</style>