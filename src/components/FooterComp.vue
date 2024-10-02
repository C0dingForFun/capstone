<template lang="">
    <footer>
        <div class="newsletter row">
            <div class="link col-lg-6 col-md-6 col-sm-12 mt-3 mb-3">
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
            <div class=" col-lg-6 col-md-6 col-sm-12 mt-3 mb-3">
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
           <div class="col-lg-5 col-md-5 col-sm-12 pages pb-2">
                <div class="row">
                    <div class="col-lg-4">
                        <h5>About</h5>               
                        <div>
                            <router-link to="/about">Our Story</router-link>
                        </div>
                        <div>
                            <router-link to="/about">Our Categories</router-link>
                        </div>
                        <div>
                            <router-link to="/about">Our Features</router-link>
                        </div>
                        <div>
                            <router-link to="/about">Our Amenities</router-link>
                        </div>
                        <div>
                            <router-link to="/about">Why Choose Us</router-link>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <h5>Contact Us</h5>            
                        <div>
                            <router-link to="/contact">Location</router-link>                   
                        </div>   
                        <div>
                            <router-link to="/contact">Email</router-link>
                        </div>   
                        <div>
                            <router-link to="/contact">Reach us</router-link>
                        </div>   
                    </div>
                    <div class="col-lg-4">
                        <h5>Rooms</h5>
                        <div>
                            <router-link to="/rooms">Single Room</router-link>                   
                        </div>   
                        <div>
                            <router-link to="/rooms">Couples Room</router-link>
                        </div>   
                        <div>
                            <router-link to="/rooms">Family Room</router-link>
                        </div>   
                    </div>
                </div>
           </div> 
        </div>
        <div class="copyright">
            <p class="pt-3">Copyright 2024 Coastal Getaway. All rights reserved.</p>
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
    .newsletter .link a{
        color:whitesmoke;
        text-decoration: none;
        transition:1s;
    }
    .newsletter .link a:hover{
        color:#93C572;
        text-decoration: underline;
    }
    .newsletter{
        display:flex;
        justify-content: center;
        align-items: center;
        /* width:100vw; */
        height:auto;
        background: #cbf4af;
    }
    .newsletter input{
        border-radius:2px;
    }
    .newsletter button{
        border-radius:5px;
        padding:1px;
        transition:1s;
        color:whitesmoke;
        background-color: gray;
    }
    .newsletter button:hover{
        color: white;
        background-color: #bae39e;
    }
    .link{
        width:500px;
    }
    .info{
        width: 100vw;
        height: auto;
    }
    .info img{
        object-fit: contain;
        height:50px;
    }
    .about{
        background-color: #93C572;
        color:whitesmoke;
        text-align: center;
    }
    .info a i{
        font-size:30px;
        transition: 0.6s;
    }
    .info i:hover{
        cursor: pointer;
        color:#bae39e;
    }
    .pages{
        background-color: #aeeb85;
        text-align:start;
        /* width:49vw; */
    }
    .pages h5{
        color:whitesmoke;
        text-shadow:2px 2px black;
    }
    .pages a{
        color:whitesmoke;
        text-decoration: none;
        transition:0.6s;
    }
    .pages a:hover{
        color:#93C572;
        text-decoration: underline;
    }
    .copyright{
        display:flex;
        justify-content: center;
        align-items: center;
        width:100vw;
        background: #cbf4af;
        color:whitesmoke;
    }
</style>