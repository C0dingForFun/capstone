<template lang="">
    <footer>
        <div class="newsletter row">
            <div class="link col-lg-6 col-md-6 col-sm-12 mt-3">
                <div>
                        <i class="las la-map-marker"></i>
                    
                        <a href="https://www.google.com/maps/place/Lagoon+Beach+Hotel+%26+Spa/@-33.8925909,18.4832667,15z/data=!4m9!3m8!1s0x1dcc5c2ed4759665:0xe4c965c5195298f9!5m2!4m1!1i2!8m2!3d-33.8925909!4d18.4832667!16s%2Fg%2F11h565fllm?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" target="blank"><p>1 Lagoon Gate Drive, Cape Town, 7441</p></a>

                </div>
                <div>
                    <i class="las la-phone-volume"></i> <a href="tel:+27210098072"> +27 21 009 8072</a>
                </div>
                <div>
                    <i class="las la-envelope"></i> <a href="mailto:support@coastalgetaway.co.za">support@coastalgetaway.co.za</a>
                </div>
            </div>
            <div class=" col-lg-6 col-md-6 col-sm-12 mt-3">
                <input type="text" placeholder="Email Address"/><button>Subscribe</button>
            </div>
        </div>
        <div class="row info">
           <div class="col-lg-5 col-md-5 col-sm-12 about">
                <img src="https://c0dingforfun.github.io/capstone-images/Logo/Capstone_Logo.png" loading="lazy"/>
                <p>You may also follow us on our socials to keep up with the availability of rooms and new events.</p>
                <div>
                    <a><i class="lab la-facebook"></i></a>
                    <a><i class="lab la-instagram"></i></a>
                    <a><i class="lab la-twitter"></i></a>
                </div>
           </div> 
           <div class="col-lg-5 col-md-5 col-sm-12 pages">

           </div> 
        </div>
        <div class="copyright">
            <p>Copyright 2020 Coastal Getaway. All rights reserved.</p>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    footer{
        width:100vw;
        height:auto;
    }
    .newsletter a{
        color:whitesmoke;
        text-decoration: none;
    }
    .newsletter .link a:hover{
        color:#93C572;
        text-decoration: underline;
    }
    .newsletter{
        display:flex;
        justify-content: center;
        align-items: center;
        width:100vw;
        height:auto;
        background: #cbf4af;
    }
    .newsletter input{
        border-radius:2px;
    }
    .newsletter button{
        border-radius:2px;
        border:solid 2px #bae39e;
        transition:1s;
    }

    .newsletter button:hover{
        color: rgb(224, 216, 216);
        background-color: #bae39e;
    }
    .link{
        width:500px;
    }
    .info img{
        object-fit: contain;
        height:50px;
    }
    .about{
        background-color: #93C572;
    }
    .info a i{
        font-size:23px;
    }
    .info i:hover{
        cursor: pointer;
        color:whitesmoke;
    }
    .pages{
        background-color: #aeeb85;
    }
    .copyright{
        padding:1vh;
        display:flex;
        justify-content: center;
        align-items: center;
        width:100vw;
        background: #cbf4af;
    }
</style>