<template>
    <div class="container-fluid mb-5 mt-5">
        <div class="row mt-5" v-if="room()">
            {{ $store.state.room }}
            <div class="row">
                <h2 class="display-2">Product Details</h2>
            </div>
            <div class="row center">
                        <div class="card mt-5">
                            <button onclick="document.getElementById('myImage').:src='$store.state.room.subImage1' ">Turn on the light</button>

                            <img :src="$store.state.room.image" id="myImage"/>

                        <button onclick="document.getElementById('myImage').:src='$store.state.room.subImage2' ">Turn off the light</button>
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