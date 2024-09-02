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
	<img src='https://cdn.encoreglobal.com/wp-content/uploads/sites/2/2020/10/06204130/Omni_Cancun_2012-601.jpg'/>
</div>
<div class="row" id="events">
	<div class="col-lg-4 col-md-4 col-sm-12">
		
	</div>
	<div class="col-lg-4 col-md-4 col-sm-12">

	</div>
	<div class="col-lg-4 col-md-4 col-sm-12">

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
		background-image: url("https://c0dingforfun.github.io/node-images/Images/Footer/background.jpg");
	}
	
	25%{
		background-image: url("https://c0dingforfun.github.io/node-images/Images/Home/Carousel/One/one.jpg");
	}	
	
	50%{
		background-image: url("https://c0dingforfun.github.io/capstone-images/Contact/contact.jpg");
	}
	
	100%{
		background-image: url("https://c0dingforfun.github.io/node-images/Images/Home/Carousel/Five/five.jpg");
	}
}

.bannertxt{
	position: relative;
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
}
.banner2 img{
	width:99vw;
	height:55vh;
	border-radius:20px;
}
</style>
