<template>
  <NavBarComp/>
  <router-view/>
</template>
<script>
import NavBarComp from './components/NavBarComp.vue';
export default{
  components:{
    NavBarComp
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.bannertxt{
  position: relative;
  padding-top: 4vh;
  text-shadow:1px 1px black;
}
span{
  font-size:22px;
}

@media screen and (max-width:600px) {
  #events img{
        width: 95vw !important;
        height:40vh;
        margin: auto;
    }
}
</style>
