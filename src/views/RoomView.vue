<template>
    <div class="container-fluid mb-5">
        <div class="row">
            <h2 class="display-2">Product Details</h2>
        </div>
        <div class="row my-2" v-if="room()">
            <div class="row center">
                        <div class="card mt-5">
                            <img :src="$store.state.room.image" class="card-img-top">
                            <div class="card-body">
                                <div class="prodName">
                                    <h5 class="card-title">{{$store.state.room.room_name}}</h5>
                                    <h4>{{$store.state.room.room_category}}</h4>
                                </div>
                                <div>
                                    <p class="card-text">Price: R{{$store.state.room.price}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        <div v-else>
            <SpinnerComp/>
        </div>
    </div>
</template>

<script >
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
    .center{
        display: flex;
        justify-content: center;
    }
</style>