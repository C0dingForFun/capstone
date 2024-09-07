<template>
    <div>
        <div class="d-flex justify-content-center mt-4 gap-3" id="filter" >
            <input type="text" placeholder="Search..." id="mySearch" v-model="searchQuery">
          <!-- <select v-model="searchProduct">
            <option value="" class="text-center">Filter:</option>
            <option value="" >All Categories</option>
            <option >
                      {{ category }}
            </option>
          </select> -->
      </div>
        <slot name="rooms">
            <section>
                    <div class="row" v-for="room in filterRooms" :key="room.room_id">
                        <div class="card mt-5" style="width:18rem">
                            
                            <div class="card-body">
                                <div class="prodName">
                                    <h5 class="card-title">{{room.room_name}}</h5>
                                    <h4>{{ room.room_category }}</h4>
                                </div>
                                <div>
                                    <p class="card-text">Price: R{{room.price}}</p>
                                </div>
                                <div class="d-flex justify-content-center mt-2 align-content-end">
                                    <router-link :to="{name:'room',params:{id:room.room_id}}" class="btn text-center">View More</router-link> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img :src="room.image" class="card-img-top">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                    </div>  -->
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
        grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
        place-items: center;
        margin:auto;
    }
    .card{
        height:370px;
    }
    .card img{
        height:200px;
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
        background: #1479EA;
    }
    #filter button{
        width:10vw;
        height:5vh;
        font-size:2vh;
        background: #1479EA;
    }
    #filter a{
        font-size:2vh;
        transition: 1s;
    }
    #filter a:hover{
        background: #1479EA;
        color:white;
    }
    #filter input{
        width:15vw;
        border-radius:15px;
    }
    select{
        border-radius:15px;
        background: #1479EA;
        transition: 1s;
    }
    select:hover{
        cursor: pointer;
    }
    h4{
        color:transparent;
    }
</style>
