<template lang="">
    <div class="bookRoom" v-if="room()">
        <div class="book row">
            <div class="col-lg-4 col-md-4 col-sm-12">
                
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">

            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">

            </div>
        </div>
    </div>
    <div v-else>
        <SpinnerComp/>
    </div>
</template>
<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
export default{
    methods: {
        getRoom(){
            this.$store.dispatch('getRoom',this.$route.params.id);
        },
        room() {
            return this.$store.state.room;
        },
    },
    mounted() {
        this.getRoom();
    },
    components:{
        SpinnerComp
    }
}
</script>
<style scoped>
    .bookRoom{
        display:flex;
        align-items: center;
        justify-content: center;
        width:100vw;
        height:auto;
    }
    .book{
        width: 80vw;
        height: auto;

    }
</style>