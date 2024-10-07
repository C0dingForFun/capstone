<template>
  <NavBarComp/>
  <router-view/>
  <FooterComp/>
</template>
<script>
import NavBarComp from './components/NavBarComp.vue';
import FooterComp from './components/FooterComp.vue';
export default{
  components:{
    NavBarComp,
    FooterComp
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
*{
  font-family: "Work Sans", sans-serif;
  /* font-optical-sizing: auto; */
  font-style: normal;
  /* font-weight: 900; */
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  overflow-x: hidden;
  scroll-behavior: smooth;
  /* background: #2c3e50; */
}

.bannertxt{
  position: relative;
  padding-top: 4vh;
  text-shadow:1px 1px black;
}
span{
  font-size:22px;
}

/* #events .card{
      width:18rem;
    } */

@media screen and (max-width:600px) {
    #events img{
        width: 95vw !important;
        height:40vh;
        margin: auto;
    }
    #events .card{
      width:15rem;
    }
    #nav img{
      width:100px;
      height:90px;
    }
}
</style>
