<template>
    <div class="container-fluid details mb-5">
        <div class="row mt-5" v-if="room()">
            <div class="row">
                <h2 class="display-5">Product Details</h2>
            </div>
            <div class="row center">
                        <div class="card mt-3">
                            <img :src="$store.state.room.image" id="myImage"/>
                            <div class="mt-3">
                                <button onclick="document.getElementById('myImage').src='$store.state.room.subImage1' "><img :src="$store.state.room.subImage1"/></button>
                                <button onclick="document.getElementById('myImage').src='$store.state.room.subImage2' "><img :src="$store.state.room.subImage2"/></button>
                                <button onclick="document.getElementById('myImage').src='$store.state.room.subImage3' "><img :src="$store.state.room.subImage3"/></button>
                            </div>
                            <div class="card-body">
                                <div class="prodName">
                                    <h5 class="display-5">{{$store.state.room.room_name}}</h5>
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
    .card{
        border:none !important;
    }
    #myImage{
        width:85vw;
        height:65vh;
        margin:auto;
    }
    .details{
        margin-top: 12vh;
        width:100vw;
        height:auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .details img{
        border-radius:15px;
        margin:auto;
    }
    .center{
        display: flex;
        justify-content: center;
    }
    button{
        border:none;
        background: none;
    }
    button img{
        width:15vw;
        height:15vh;
        border-radius:20px;
    }
</style>