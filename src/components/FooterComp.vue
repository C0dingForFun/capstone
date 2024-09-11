<template lang="">
    <footer>
        <div class="newsletter row">
            <div class=" col-lg-6 col-md-6 col-sm-12 mt-3">
                <div>
                    <i class="las la-map-marker"></i><a href="https://www.google.com/maps/place/Lagoon+Beach+Hotel+%26+Spa/@-33.8925909,18.4832667,15z/data=!4m9!3m8!1s0x1dcc5c2ed4759665:0xe4c965c5195298f9!5m2!4m1!1i2!8m2!3d-33.8925909!4d18.4832667!16s%2Fg%2F11h565fllm?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" target="blank"><p>1 Lagoon Gate Drive, Lagoon Beach, Cape Town, 7441</p></a>
                </div>
                <div>
                   <i class="las la-tty"></i> <a href="tel:+27210098072"> +27 21 009 8072</a>
                </div>
                <div>
                    <i class="las la-envelope"></i> <a href="mailto:support@coastalgetaway.co.za">support@coastalgetaway.co.za</a>
                </div>
            </div>
            <div class=" col-lg-6 col-md-6 col-sm-12 mt-3">
                <input type="text" placeholder="Email Address"/><button>Subscribe</button>
            </div>
        </div>
        <div>
            efbejbfjb
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
    footer a{
        color:whitesmoke;
        text-decoration: none;
    }
    footer a:hover{
        color:#bae39e;
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
        color: whitesmoke;
        background-color: #bae39e;
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