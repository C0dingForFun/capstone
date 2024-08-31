<template>   
    <nav class="navbar navbar-expand-lg fixed-top shadow">
                <div class="container-fluid" id="nav">
                    <router-link to="/"><img src="https://c0dingforfun.github.io/node-images/Images/Logo/Logo.png" class="logo" alt="My Logo" loading="lazy"></router-link>
                    <button class="navbar-toggler mx-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">                    
                      <span class="text-white p-2" style="font-size:30px;">&#9776;</span>                      
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style="width:50vw;background-color: rgb(150 197, 114, 0.7)">
                      <div class="offcanvas-header">
                        <h1>MENU</h1>
                        <button type="button" class="btn-close bg-white pt-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                      </div>
                      <div class="offcanvas-body text-center">                   
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 p-3 f-3">                     
                          <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" to="/"><button data-bs-dismiss="offcanvas" aria-label="Close"><i class="las la-home"></i>Home</button></router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/about" aria-current="page"><button data-bs-dismiss="offcanvas" aria-label="Close"><i class="las la-users"></i>About</button></router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/activities" aria-current="page"><button data-bs-dismiss="offcanvas" aria-label="Close"><i class="las la-store-alt"></i>Activities</button></router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/contact" aria-current="page"><button data-bs-dismiss="offcanvas" aria-label="Close"><i class="las la-phone-square"></i>Contact</button></router-link>
                          </li>
                        </ul>                       
                        <ul class="navbar-nav justify-content-end flex-grow-1 p-3 f-3 px-2">                     
                          <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" to="/search"><button data-bs-dismiss="offcanvas" aria-label="Close"><i class="las la-search"></i></button></router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/users" aria-current="page"><button data-bs-dismiss="offcanvas" aria-label="Close"><i class="las la-user"></i></button></router-link>
                          </li>
                        </ul>                    
                      </div>
                    </div>
                  </div>
              </nav>       
</template>
<script>
export default {
  
}
</script>
<style scoped>
    nav {
      /* background: rgb(236, 233, 233); */
      background-color: transparent;
    }
    nav button {
      background-color: transparent;
      border:none;
      font-weight: bold;
      font-size:18px;
      color:#403a3a;
      text-decoration: none;
      font-weight: 200;
      transition: 1s;
    }
    nav button:hover{
        color:#93C572;
        /* text-shadow:4px 4px #a4d414; */
    }
    nav button i{
      transition: 1s;
    }
    nav button i:hover{
      color:#93C572;
    }
    #nav .logo{
      width:140px;
      height:120px;
    }
    nav img{
      width:50px;
      height:50px;
    }
    nav i{
      font-size: 25px;
      color:black;
    }
    h1{
      color:#93C572;
    }

</style>