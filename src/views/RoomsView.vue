<template>
    <div v-if="rooms()" class="mb-5">
        <CardComp>
            <template #rooms></template>
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
        rooms() {
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