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
                <h3 data-aos="fade-up" data-aos-delay="400">Upcoming Conferences</h3>
                Join us at Coastal Getaways Hotel for a magical Christmas celebration on December (insert date) from 5:00 pm to 10:00 pm! Enjoy a sumptuous feast crafted by our award-winning chefs, sip on signature cocktails, and partake in festive activities like ornament decorating and gingerbread house making, all while awaiting a special visit from Santa Claus. Dance the night away to our live DJ playing your favorite holiday tunes. Don't miss our special offers, including a complimentary room upgrade and exclusive holiday packages. Tickets are $50 for adults, $25 for children ages 5-12, and free for those under 5. Book your tickets now and get ready to jingle all the way! We can't wait to celebrate with you!
            </div>
        </div>
        <div class="mt-4 row events">
            <div class="col-lg-6 col-md-6 col-sm-12 my-auto">
                <h3 data-aos="fade-up" data-aos-delay="400">News Years Eve</h3>
                Join us at Coastal Getaways Hotel on December 31st from 8:00 pm to 1:00 am for a Night to Remember as we bid farewell to the old year and welcome the new one with glamour and excitement! Indulge in a delectable New Year's Eve dinner crafted by our award-winning chefs, dance to live music from our resident DJ, and enjoy fun activities like a photo booth and a champagne toast, culminating in a stunning fireworks display at midnight with breathtaking coastal views. Don’t miss our special offers, including a complimentary room upgrade and exclusive New Year's Eve packages. Tickets are $75 for adults, $120 for couples, and $200 for VIP packages, which include exclusive lounge access and a meet-and-greet with our DJ. Book your tickets now and get ready to party into the new year! We can't wait to celebrate with you!
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
                <h3 data-aos="fade-up" data-aos-delay="400">Upcoming Conferences</h3>
                Join us at Coastal Getaways Hotel for our upcoming conference events designed to inspire, educate, and connect professionals from various industries! Experience a series of engaging keynote speeches, interactive workshops, and networking opportunities from [insert date] to [insert date], starting each day at 9:00 am and concluding at 5:00 pm. Enjoy delicious catered meals throughout the event, including breakfast, lunch, and afternoon refreshments. Take advantage of our special group rates for accommodations and exclusive packages that include access to all sessions and materials. Don’t miss this chance to elevate your skills, share insights, and forge valuable connections in a stunning coastal setting. Register now to secure your spot and be part of this transformative experience!
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