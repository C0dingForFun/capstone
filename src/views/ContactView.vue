<template>
    <div class="banner">
        <div class="bannertxt">
            <h1>Contact</h1>
            <h4>Home  <span> > </span> Contact</h4>
        </div>
    </div>
    <div class="contact">
         
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .banner{
        background-image:url('https://c0dingforfun.github.io/capstone-images/Contact/contact.jpg');
        background-size: cover;
        backdrop-filter: blur(4px);
        background-position: center;
        display:flex;
        justify-content: center;
        align-items: center;
        width:100vw;
        height:60vh;
        color:whitesmoke;
    }
    .bannertxt{
        position: relative;
        padding-top: 3vh;
    }
    span{
        font-size:22px;
    }
    .contact{
        position: relative;
        background-color:#93C572;
        width: 100vw;
        height:80vh;
    }
</style>