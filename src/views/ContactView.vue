<template>
    <div class="banner" loading="lazy">
        <div class="bannertxt" >
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
    <div class=" mt-5 form" >
        <div class="p-5" id="form">
            <form action="https://formspree.io/f/xrbzdgbd" method="POST" role="form" class="mx-auto my-auto">
                <h1 class="text-center text-white"><b>Reach Us Here:</b></h1>
                      <div class="row text">
                        <div class="col-md-6 form-group">
                          <input type="text" name="name" class="form-control px-2" id="name" placeholder="Your Name" v-model="name">
                        </div>
                        <div class="col-md-6 form-group mt-3 mt-md-0">
                          <input type="text" name="surname" class="form-control px-2" id="surname" placeholder="Your Surname" v-model="surname">
                        </div>
                      </div>
                      <div class="form-group mt-3">
                        <input type="email" class="form-control px-2" name="email" id="email" placeholder="Your Email" v-model="email">
                      </div>
                      <div class="form-group mt-3">
                        <textarea class="form-control px-2" name="message" rows="5" placeholder="Message" v-model="message"></textarea>
                      </div>
                      <div class="text-center mt-4 send">
                        <button type="submit">Send Message</button> <br>
                      </div>
            </form>
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
        background-attachment: fixed;
        background-position: center;
        display:flex;
        justify-content: center;
        align-items: center;
        width:100%;
        height:70vh;
        color:whitesmoke;
    }
    .bannertxt{
        position: relative;
        padding-top: 4vh;
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
        transition: 0.8s;
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
    .form{
        width: 100vw;
        background-color: #bae39e;
    }
    #form{
        margin: auto;
        width:60vw;
        height:auto;
    }
    #form button{
        border-radius:20px;
        color:black;
        background-color: #bae39e;
        color:black;
        transition:0.6s;
    }
    #form button:hover{
        box-shadow:5px 5px 5px #93C572;
        background-color: #93C572;
        color: whitesmoke;
    }
</style>