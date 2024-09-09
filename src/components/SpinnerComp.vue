<template>
  <div class="container">
    <div class="spinner">
    </div>

  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.container{
  width: 100vw;
  height: 100vh;
  display:flex;
  align-items: center;
  justify-content: center;

}
.spinner {
 --size-of-spinner: 100px;
 --spinner-border-width: 6px;
 --spinner-color: #93C572;
 --circle-color: #bae39e;
 --speed-of-animation: 1.9s;
 --scale: 1.7;
 width: var(--size-of-spinner);
 height: var(--size-of-spinner);
 background: var(--circle-color);
 border-radius: 50%;
 position: relative;
}

.spinner::after {
 content: "";
 display: block;
 position: absolute;
 border-radius: 50%;
 inset: 0;
 border: var(--spinner-border-width) solid var(--spinner-color);
 border-left-color: transparent;
 border-right-color: transparent;
 animation: spinny var(--speed-of-animation) linear infinite;
}

@keyframes spinny {
 0% {
  transform: rotate(0deg) scale(1)
 }

 50% {
  transform: rotate(45deg) scale(var(--scale))
 }

 100% {
  transform: rotate(360deg) scale(1)
 }
}
</style>