<template>
  <div class="home">
	<div class="bannertxt">
		<h3>Your Getaway to</h3>
		<h1>Comfort & Relaxation</h1>
	</div>
  </div>
</template>

<script>

export default {
}
</script>
<style scoped>
  .home{
	display:flex;
	justify-content: center;
	align-items: center;
	position:absolute;
	width:100vw;
	/* height:80vh; */
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
    	height:80vh;
	}
	
	25%{
		background-image: url("https://c0dingforfun.github.io/node-images/Images/Home/Carousel/One/one.jpg");
    	height:80vh;
	}	
	
	50%{
		background-image: url("https://c0dingforfun.github.io/node-images/Images/Home/Carousel/Two/Two.jpg");
    	height:80vh;
	}	
	
	75%{
		background-image: url("https://c0dingforfun.github.io/node-images/Images/Home/Carousel/Two/Two.jpg");
    	height:80vh;
	}
	
	100%{
		background-image: url("https://c0dingforfun.github.io/node-images/Images/Home/Carousel/Five/five.jpg");
    	height:80vh;
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
</style>
