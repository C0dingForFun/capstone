<template lang="">
    <div class="activities-banner">
        <div class="bannertxt">
            <h1 data-aos="fade-up" data-aos-delay="400">Events</h1>
            <h4 data-aos="fade-up" data-aos-delay="600">Home <span> > </span>  Events</h4>
        </div>
    </div>
    <section id="events">
        <div class="mt-4 row events">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <img src="https://c0dingforfun.github.io/capstone-images/Events/christmas.jpg" loading="lazy"/>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 my-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nobis exercitationem esse rem voluptatem cum aperiam consequuntur debitis sapiente illum, atque vero quidem cupiditate, adipisci assumenda velit laborum dolor laudantium.
            </div>
        </div>
        <div class="mt-4 row events">
            <div class="col-lg-6 col-md-6 col-sm-12 my-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nobis exercitationem esse rem voluptatem cum aperiam consequuntur debitis sapiente illum, atque vero quidem cupiditate, adipisci assumenda velit laborum dolor laudantium.
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <img src="https://c0dingforfun.github.io/capstone-images/Events/newyears.jpg" loading="lazy"/>
            </div>
        </div>
        <div class="mt-4 mb-3 row events">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <img src="https://c0dingforfun.github.io/capstone-images/Events/conference.jpg" loading="lazy"/>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 my-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nobis exercitationem esse rem voluptatem cum aperiam consequuntur debitis sapiente illum, atque vero quidem cupiditate, adipisci assumenda velit laborum dolor laudantium.
            </div>
        </div>

    </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .activities-banner{
        background-image:url('https://c0dingforfun.github.io/capstone-images/Events/banner.png');
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        display:flex;
        justify-content: center;
        align-items: center;
        width:100vw;
        height:70vh;
        color:whitesmoke;
    }
    #events{
        width: 100vw;
        margin: auto;
    }
    #events img{
        width: 40vw;
        height:45vh;
        border-radius:20px;
        margin: auto;
    }
    .events{
        width:98vw;
        margin: auto;
    }
</style>