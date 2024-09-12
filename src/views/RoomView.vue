<template>
    <div class="container-fluid details mb-5">
        <div class="row mt-5" v-if="room()">
            <div>
                <h2 class="display-5">Product Details</h2>
            </div>
            <div class="row center">
                        <div class="card mt-3">
                            <img :src="$store.state.room.image" id="myImage"/>
                            <div class="mt-3 subImages">
                                <img :src="$store.state.room.subImage1"/>
                                <img :src="$store.state.room.subImage2"/>
                                <img :src="$store.state.room.subImage3"/>
                            </div>
                            <div class="card-body">
                                <div>
                                    <h5 class="display-5">{{$store.state.room.room_name}}</h5>
                                    <h4>{{$store.state.room.room_category}}</h4>
                                </div>
                                <div class="text-start description">
                                    <p>{{$store.state.room.room_description}}</p>
                                </div>
                                <div>
                                    <p class="card-text">Price: R{{$store.state.room.price}}</p>
                                </div>
                                <div class="book row">
                                    <div class="col-lg-2 col-md-2 col-sm-12 pt-1">
                                        <label>Check in:</label><br>
                                        <input type="datetime-local" v-model="check_in">
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12 pt-1">
                                        <label>Check out:</label><br>
                                        <input type="datetime-local" v-model="check_out">
                                        
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12 align-content-center pt-1" >
                                        <button @click="bookRoom()">Book Room</button>
                                    </div>
                                </div>
                                <div class="justify-content-center">
                                    
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
    data() {
        return {
            check_in:null,
            check_out:null
        }
    },
    methods: {
        getRoom(){
            this.$store.dispatch('getRoom',this.$route.params.id);
        },
        room() {
            return this.$store.state.room;
        },
        bookRoom(){
            this.$store.dispatch('bookRoom',{room_id:this.$route.params.id, check_in, check_out})
        }
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
        width:90vw;
        height:70vh;
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
    img{
        width:20vw;
        height:20vh;
        border-radius:20px;
    }
    .subImages img{
        margin-right:1vw;
    }
    .description{
        width:50vw;
        margin:auto;
    }
    .book{
        border-radius:20px;
        color:whitesmoke;
        padding:1em;
        display:flex;
        position: relative;
        justify-content: space-around;
        background-color: #96e065;
    }
    .book input{
        width:150px;
        border-radius:20px;
        text-align: center;
    }
    .book button{
        border-radius:20px;
        color:whitesmoke;
        background-color: #bae39e;
        color:black;
        transition:0.5s;
    }
    .book button:hover{
        box-shadow:2px 2px 2px #bae39e;
        background-color: #93C572;
        color: whitesmoke;
    }
</style>