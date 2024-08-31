<template>
    <div class="banner">
        <div class="bannertxt">
            <h1>Contact</h1>
            <h4>Home  <span> > </span> Contact</h4>
        </div>
    </div>
    <div class="contact pt-5">
        <div class="d-flex justify-content-center">
            <div>
                <i class="las la-map-marker"></i><h2>Location:</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
        </div>
        <div class="row justify-content-evenly text-center pt-5">
            <div class="col-lg-3 col-md-2 col-sm-12 info mt-2">
                <div>
                    <i class="las la-tty"></i>
                </div>
                <div class="pt-2">
                    <h4><b>Make a Call</b></h4>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div  class="contact-info">
                    <p>(+27) 21 009 8072</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-2 col-sm-12 info mt-2">
                <div>
                    <i class="las la-envelope"></i>
                </div>
                <div class="pt-2">
                    <h4><b>Send an Email</b></h4>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="contact-info">
                    <p>support@coastalgetaway.co.za</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-2 col-sm-12 info mt-2">
                <div>
                    <i class="las la-headset"></i>
                </div>
                <div class="pt-2">
                    <h4><b>Toll Free</b></h4>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div  class="contact-info">
                    <p>(+27) 021 457 7890</p>
                </div>
            </div>
        </div>
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
        background-position: center;
        display:flex;
        justify-content: center;
        align-items: center;
        width:100%;
        height:60vh;
        color:whitesmoke;
    }
    .bannertxt{
        position: relative;
        padding-top: 3vh;
        text-shadow:1px 1px black;
    }
    span{
        font-size:22px;
    }
    .contact{
        position: relative;
        background-image:url('https://c0dingforfun.github.io/capstone-images/Contact/myBackground.png');
        background-size: cover;
        width: 100%;
        /* height:80vh; */
    }
    .contact i{
        position: relative;
        top:5px;
        font-size:30px;
    }
    .info{
        /* width: 300px; */
        height:auto;
        background-color: #bae39e;
        border-radius:20px;
        transition: 1s;
        color:grey;
    }
    .info:hover{
        cursor: pointer;
        background-color:#93C572;
        box-shadow:10px 10px 10px #bae39e;
        color:white;
    }
    .contact-info{
        color:#51b112;
    }
</style>