<template>
    <div class="container-fluid mb-5 mt-5">
        <div class="row mt-5" v-if="room()">
            <div class="row">
                <h2 class="display-2">Product Details</h2>
            </div>
            <div class="row center">
                        <div class="card mt-5">
                            <!-- <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                                <div class="carousel-inner">
                                    <div class="carousel-item" v-for="(room,index) in room()" :key="index" :class="{'active':index==0}">
                                        <img :src="$store.state.room.image" class="card-img-top">
                                    </div>
                                    <div class="carousel-item">
                                        <img :src="$store.state.room.subImage1" class="card-img-top">
                                    </div>
                                    <div class="carousel-item">
                                        <img :src="$store.state.room.subImage2" class="card-img-top">
                                    </div>
                                    <div class="carousel-item">
                                        <img :src="$store.state.room.subImage3" class="card-img-top">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button> -->
                                <!-- </div> -->
                            <div class="card-body">
                                <div class="prodName">
                                    <h5 class="card-title">{{$store.state.room.room_name}}</h5>
                                    <h4>{{$store.state.room.room_category}}</h4>
                                </div>
                                <div>
                                    <p>{{$store.state.room.room_description}}</p>
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