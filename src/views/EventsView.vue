<template lang="">
    <div class="activities-banner">
        <div class="bannertxt">
            <h1 data-aos="fade-up" data-aos-delay="400">Events</h1>
            <h4 data-aos="fade-up" data-aos-delay="600">Home <span> > </span>  Events</h4>
        </div>
    </div>
    <section id="events">
        <div class="mt-4 row">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <img src="https://c0dingforfun.github.io/capstone-images/Events/christmas.jpg" loading="lazy"/>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 my-auto new-year">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nobis exercitationem esse rem voluptatem cum aperiam consequuntur debitis sapiente illum, atque vero quidem cupiditate, adipisci assumenda velit laborum dolor laudantium.
            </div>
        </div>
        <div class="mt-4 row">
            <div class="col-lg-6 col-md-6 col-sm-12 chris">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nobis exercitationem esse rem voluptatem cum aperiam consequuntur debitis sapiente illum, atque vero quidem cupiditate, adipisci assumenda velit laborum dolor laudantium.
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <img src="https://c0dingforfun.github.io/capstone-images/Events/newyears.jpg" loading="lazy"/>
            </div>
        </div>
        <div class="mt-4 row">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <img src="https://c0dingforfun.github.io/capstone-images/Events/conference.jpg" loading="lazy"/>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 my-auto conference">
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
    }
    #events img{
        width: 48vw;
        height:40vh;
        border-radius:20px;
        margin: auto;
    }
    .chris{
        background-image:url('https://c0dingforfun.github.io/capstone-images/Events/christmas_banner.png');
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        height:50vh;
    }
    .new-year{
        background-image:url('https://c0dingforfun.github.io/capstone-images/Events/newyears_banner.png');
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        height:50vh;
    }
    .conference{
        background-image:url('https://c0dingforfun.github.io/capstone-images/Events/conference_banner.png');
        background-size: cover;
        background-attachment: fixed;
        background-position:center;
        height:50vh;
    }
</style>