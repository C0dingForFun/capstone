<template lang="">
	<div>
		<div class="home-banner">
		  <div class="bannertxt mt-5 pt-5">
			  <h3>Your Getaway to</h3>
			  <h1>Comfort & Relaxation</h1>
			  <div class="book row">
				  <div class="col-lg-2 col-md-2 col-sm-12 pt-1">
					  <label>Check in:</label><br>
					  <input type="date">
				  </div>
				  <div class="col-lg-2 col-md-2 col-sm-12 pt-1">
					  <label>Check out:</label><br>
					  <input type="date">
				  </div>
				  <div class="col-lg-2 col-md-2 col-sm-12 pt-1">
					  <label>Adult(s):</label><br>
					  <input type="number" placeholder="2">
				  </div>
				  <div class="col-lg-2 col-md-2 col-sm-12 pt-1">
					  <label>Kid(s):</label><br>
					  <input type="number" placeholder="1">
				  </div>
				  <div class="col-lg-2 col-md-2 col-sm-12 align-content-center pt-1" >
					  <button class="btn">Book Now</button>
				  </div>
			  </div>
		  </div>
		</div>
	</div>
  <div class="mt-3" id="popular">  
	<h2>Popular Rooms & Suites:</h2>
	<div class="row justify-content-around pt-5">
		<div class="col-lg-4 col-md-4 col-sm-12 mt-2" style="width:300px; height:300px;background-color:green">
			kjfbrk
		</div>
		<div class="col-lg-4 col-md-4 col-sm-12 mt-2" style="width:300px; height:300px; background-color:green">
			lb
  		</div>
		<div class="col-lg-4 col-md-4 col-sm-12 mt-2" style="width:300px; height:300px; background-color:green">v                                                                                                                                                 7
			ljjvvk
		</div>
	</div>
</div>
<div class="banner2 mt-5">
	<div class="row">
		<div class="col-lg-6 col-md-6 col-sm-12">
			<div class="text">
				<h1 class="text-center">Our Events</h1>
			</div>
		</div>
		<div class="col-lg-6 col-md-6 col-sm-12"></div>
	</div>
</div>
<div id="events">
	<div class="mt-3 events">
		<div class="col-lg-4 col-md-4 col-sm-12 px-5 mx-1 mt-2">
			<div class="card" style="width: 18rem;">
				<img src="https://c0dingforfun.github.io/capstone-images/Home/fireworks.jpeg" class="card-img-top" alt="..." loading="lazy">
				<div class="card-body">
					<h5 class="card-title">News Years Eve Event</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<router-link class="btn btn-primary" to="/activities">See More</router-link>
				</div>
			</div>
		</div>
		<div class="col-lg-4 col-md-4 col-sm-12 px-5 mx-1 mt-2">
			<div class="card" style="width: 18rem;">
				<img src="https://c0dingforfun.github.io/capstone-images/Home/christmas.jpg" class="card-img-top" alt="..." loading="lazy">
				<div class="card-body">
					<h5 class="card-title">Christmas Party</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<router-link class="btn btn-primary" to="/activities">See More</router-link>
				</div>
			</div>
		</div>
		<div class="col-lg-4 col-md-4 col-sm-12 px-5 mx-1 mt-2">
			<div class="card" style="width: 18rem;">
				<img src="https://c0dingforfun.github.io/capstone-images/Home/conference.jpg" class="card-img-top" alt="..." loading="lazy">
				<div class="card-body">
					<h5 class="card-title">Conference events</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<router-link class="btn btn-primary" to="/activities">See More</router-link>
				</div>
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
  .home-banner{
	display:flex;
	justify-content: center;
	align-items: center;
	width:100vw;
	height:80vh;
	background-color: gray;
	
	z-index:0;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	
	/*animation for background-images*/ 
  	background-image: url("https://c0dingforfun.github.io/node-images/Images/Footer/background.jpg");
	animation-name:slideshow;
	animation-duration:10s;
	animation-timing-function:ease-in-out;
	animation-iteration-count:infinite;
}

/*slideshow*/
@keyframes slideshow{
	0%{
		background-image: url("https://c0dingforfun.github.io/node-images/Images/Home/Carousel/One/one.jpg");
	}
	
	25%{
		background-image: url("https://c0dingforfun.github.io/capstone-images/Home/Slide1.jpg");
	}	
	
	50%{
		background-image: url("https://c0dingforfun.github.io/capstone-images/Contact/contact.jpg");
	}
	
	100%{
		background-image: url("https://c0dingforfun.github.io/node-images/Images/Home/Carousel/One/one.jpg");
	}
}

.bannertxt{
	position: relative;
	color:whitesmoke;
	text-shadow: 3px 3px black;
}

.bannertxt h3{
	font-size:3vw;
}

.bannertxt h1{
	font-size: 8vw;
}
.book{
	border-radius:20px;
	color:whitesmoke;
	padding:1em;
	display:flex;
	position: relative;
	justify-content: space-around;
	background-color: #51b112;
}
.book input{
	width:150px;
	border-radius:20px;
	text-align: center;
}
.book button{
	border-radius:20px;
	color:whitesmoke;
	background-color: #bae39e;
	color:black;
	transition:0.5s;
}
.book button:hover{
	box-shadow:2px 2px 2px #bae39e;
	background-color: #93C572;
	color: whitesmoke;
}
#popular{
	margin: auto;
	position: relative;
	width:70vw;
}
.banner2{
	position: relative;
	width:100vw;
	height:60vh;
	display:flex;
	justify-content: center;
	align-items: center;
	background-image: url('https://c0dingforfun.github.io/capstone-images/Home/banner.png');
	background-size: cover;
	background-attachment: fixed;
}
.text{
	width:150px;
	color:whitesmoke;
	text-shadow: 2px 2px black;
}
.text h1{
	padding-right:2vw ;
	font-size:50px;
}
#events .events{
	width: 98vw;
	/* margin: auto; */
	display:grid;
	grid-template-columns: repeat(auto-fill,minmax(340px, 1fr));
	place-items:center;
}
.card{
	border:none !important;
}
.card img{
	height:30vh;
	border-radius:50% 50% 0 0;
}
</style>
