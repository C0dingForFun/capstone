<template>
    <div class="mt-5" v-if="filterRooms">
        <div class="d-flex justify-content-center mt-5 gap-3 " id="filter" >
            <input type="text" placeholder="Search..." id="mySearch" v-model="searchQuery">
          <select v-model="searchProduct" class="text-center text-white">
            <option value="" >All Categories</option>
            <option :value="$store.state.room_package" >{{ $store.state.room_package }} Single</option>
          </select>
      </div>
        <slot name="rooms">
            <section class="mt-5">
                    <div class="row" v-for="room in filterRooms" :key="room.room_id">
                        <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img :src="room.image" class="card-img-top">
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{{room.room_name}}</h5>
                                <h4>{{ room.room_package }}</h4>
                                <p class="card-text">Price: R{{room.price}}</p>
                                <div class="d-flex justify-content-center mt-2 align-content-end">
                                    <router-link :to="{name:'room',params:{id:room.room_id}}" class="btn text-center">View More</router-link> 
                                </div>
                            </div>
                            </div>
                        </div>
                        </div> 
                    </div>
            </section>
        </slot>
    </div>
</template>
<script>
export default {
    data() {
        return {
        searchProduct:'',
        searchQuery:'',
        category:''
        }
  },
    methods: {
        getRooms(){
            this.$store.dispatch('getRooms');
        },
        products() {
            return this.$store.state.rooms;
        },
    },
    computed: {
        filterRooms() {
            return this.$store.state.rooms.filter(room => {
            return room.room_name.toLowerCase().includes(this.searchQuery) &&
                (this.searchProduct === '' || room.room_category === this.searchProduct)
            })
        },
        
        if (category) {
            this.searchProducts = searchProducts.filter(product =>
                product.category === category.value
            )
        },
        sortLowestPrice(){
            this.$store.rooms.price.sort((a,b)=> a.price > b.price ? 1 : -1)
        },
        sortHighestPrice(){
            this.$store.rooms.price.sort((a,b)=> a.price < b.price ? 1 : -1)
        }
    },
    mounted() {
        this.getRooms();
    },
}
</script>
<style scoped>
    section{
        display:grid;
        place-items: center;
        margin:auto;
    }
    #filter{
        margin-top:20vh !important;
    }
    .card{
        width: 80vw ;
        transition: 1s;
        background: #93C572;
    }
    .card img{
        height:200px;
    }
    .card:hover{
        cursor: pointer;
        transform: scale(1.02);
        box-shadow: 10px 10px 10px #93C572;;
    }
    .prodName{
        height: 8vh;
    }
    .card a{
        width: 25vw;
        font-size:16pt;
        background:black;
        color:white;
        transition:1s;
    }
    .card a:hover{
        color:white;
        background: #bae39e;
    }
    #filter button{
        width:10vw;
        height:5vh;
        font-size:2vh;
        background: #bae39e;
    }
    #filter router-link{
        font-size:2vh;
        transition: 1s;
    }
    #filter a:hover{
        background: #bae39e;
        color:white;
    }
    #filter input{
        width:15vw;
        border-radius:15px;
    }
    select{
        border-radius:15px;
        background: #bae39e;
        transition: 1s;
    }
    select:hover{
        cursor: pointer;
    }
    /* h4{
        color:transparent;
    } */
</style>
