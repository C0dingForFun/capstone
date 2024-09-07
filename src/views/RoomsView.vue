<template>
    <div v-if="products()" class="mb-5">
        <CardComp>
            <template #products></template>
        </CardComp>
    </div>
    <div v-else>
        <SpinnerComp/>
    </div>
</template>
<script>
import CardComp from '@/components/CardComp.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
  
    components:{
        CardComp,
        SpinnerComp
    },
    methods: {
        getRooms(){
            this.$store.dispatch('getRooms');
        },
        Rooms() {
            return this.$store.state.rooms;
        },
        
    },
    mounted() {
      this.getRooms();
    }
}
</script>
<style scoped>


</style>