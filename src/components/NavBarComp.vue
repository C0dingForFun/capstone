<template>   
    <nav class="navbar navbar-expand-lg fixed-top shadow">
                <div class="container-fluid" id="nav">
                    <router-link to="/"><img src="https://c0dingforfun.github.io/capstone-images/Logo/Capstone_Logo.png"/></router-link>
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
                            <router-link class="nav-link" aria-current="page" to="/"><button data-bs-dismiss="offcanvas" aria-label="Close">Home</button></router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/about" aria-current="page"><button data-bs-dismiss="offcanvas" aria-label="Close">About</button></router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/rooms" aria-current="page"><button data-bs-dismiss="offcanvas" aria-label="Close">Rooms</button></router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/events" aria-current="page"><button data-bs-dismiss="offcanvas" aria-label="Close">Events</button></router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/contact" aria-current="page"><button data-bs-dismiss="offcanvas" aria-label="Close">Contact</button></router-link>
                          </li>
                        </ul>                       
                        <ul class="navbar-nav justify-content-end flex-grow-1 p-3 f-3 px-2"> 
                          <li class="nav-item">
                            <router-link class="nav-link" to="/login" aria-current="page"><button data-bs-dismiss="offcanvas" aria-label="Close"><i class="las la-user"></i></button></router-link>
                          </li>
                        </ul>                    
                      </div>
                    </div>
                  </div>
              </nav>       
</template>
<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeMount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const nav = document.getElementsByClassName('navbar')[0];
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
  }
}
</script>
<style scoped>
    nav {
      background-color: transparent;
    }
    nav button {
      background-color: transparent;
      border:none;
      font-weight: bold;
      font-size:23px;
      color:whitesmoke;
      text-shadow: 1px 1px black;
      text-decoration: none;
      font-weight: 500;
      transition: 1s;
    }
    nav .nav-item button:hover{
      color:#93C572;
        
    }
    .nav-item button router-link-exact-active{
      color:#93C572;
    }
    nav button i{
      color:whitesmoke;
      transition: 1s;
    }
    nav button i:hover{
      color: #93C572;
    }
    .navbar.scrolled{
      background-color: #93C572;
      transition: 0.8s;
    }
    #nav img{
      width:140px;
      height:110px;
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
      text-shadow: 1px 1px black;
    }

</style>