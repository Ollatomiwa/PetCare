<script setup>
import { ref } from 'vue'

import photo from '../assets/img/dognew.png';
import img from '../assets/img/hunky.jfif';
import imgCat from '../assets/img/cat.jfif';
import floritz from '../assets/img/floritz.jfif';


const image = ref(photo);
const dog = ref(img);
const cat = ref(imgCat);
const dog2 = ref(floritz);
</script>

<template>
   <div class="container text-center ">
        <div class="row justify-content-center  ">
            <div class=" col col-md-8 py-2 ">
                <h2 class=" title text-warning py-1">Find Your Perfect Pet Buddy Today!</h2>
                <h6 class=" text-subject  text-black">Discover adorable pets waiting to brighten your life. 
                </h6>
            </div>
        </div>
        <div class="d-flex  buttons justify-content-center">
          <RouterLink to="/adopt" class="btn btn-primary btn-lg text-center me-3">Adopt</RouterLink>
          <RouterLink to="/donate" class="btn btn-outline-primary btn-lg text-center ">Donate</RouterLink>
        </div>
    </div>
  
    <!-- Adopt-Section Content -->
    <div class="container">
    <div class="row text-center">
      <div class="col-md-4">
        <div class="card border-0">
          <img :src="cat" class="card-img-top" alt="Image 1">
          <div class="card-body">
            <button class="btn btn-warning btn-lg">Adopt Swarter</button>
          </div>
        </div>
      </div>
      <div class="col-md-4 big-dog">
        <div class="card border-0">
          <img :src="dog" class="card-img-top" alt="Image 2">
          <div class="caraged-body">
            <button class="btn btn-warning btn-lg mb-3">Adopt Hunky</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0">
          <img :src="dog2" class="card-img-top" alt="Image 3">
          <div class="card-body">
            <button class="btn btn-warning">Adopt Floritz</button>
          </div>
        </div>
      </div>
    </div>
    </div>
     <!-- Adopt-Section Content -->

     <!-- Footer -->
  <footer class="bg-dark text-light py-4">
    <div class="container">
      <!-- Footer Content -->
      <div class="row text-center text-md-start">
           <!-- Social Media Links -->
           <div class="col-12 col-md-4 mb-3">
          <h5>Follow Us</h5>
          <RouterLink to="#" class="text-light d-block mb-1 text-decoration-none">
            <i class="bi bi-twitter me-2  text-warning"></i> Twitter
          </RouterLink>
          <RouterLink to="#" class="text-light d-block mb-1 text-decoration-none">
            <i class="bi bi-facebook me-2 text-warning"></i> Facebook
          </RouterLink>
          <RouterLink to="#" class="text-light d-block text-decoration-none">
            <i class="bi bi-instagram me-2 text-warning"></i> Instagram
          </RouterLink>
        </div>

        <!-- Quick Links -->
        <div class="col-12 col-md-4 mb-3">
          <h5>Quick Links</h5>
          <ul class="list-unstyled">
            <li><RouterLink to="/about" class=" text-decoration-none d-block mb-1 text-warning">About</RouterLink></li>
            <li><RouterLink to="/donate" class=" text-decoration-none d-block mb-1 text-warning">Donate</RouterLink></li>
            <li><RouterLink to="/resources" class="text-decoration-none d-block mb-1 text-warning">Resources </RouterLink></li>
            <li><RouterLink to="/volunteer" class=" text-decoration-none d-block text-warning">Volunteers</RouterLink></li>
          </ul>
        </div>

        <!-- Footer Message -->
        <div class="col-12 col-md-4 mb-3">
          <h5>Contact</h5>
          <p class="mb-1">
            121-123 High Drive, Lagos, Nigeria
          </p>
          <p class="mb-1">
            Email: <RouterLink to="#" class="text-light text-decoration-none">computlifecom@gmail.com</RouterLink>
          </p>
          <p>
            Phone: +234 812 630 7855
          </p>
        </div>
      </div>

      <!-- Footer Bottom -->
      <hr class="border-light">
      <div class="text-center">
        <p class="mb-0">&copy; 2025 Pet-Care. All Rights Reserved.</p>
      </div>
    </div>
  </footer>

</template>

<style scoped>
  
  .container {
    width:100vw;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-top: 15%;
  }

    .title {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: bold;
    }

    .text-subject {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 10px;      
    }
   

    @media (min-width: 1024px)  {
    .container {
      
      text-align: center;
      
    }
    .title {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: bold;
      
      text-align: center;
      font-size: 50px;
    }

    .text-subject {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      text-align: center;
      font-size: 22px;
    }

    .buttons {
      text-align: center;
    }
  }

  @media (max-width: 430px)  {
   
    .title {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: bold;
      text-align: center;
      
    }

    .text-subject {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      text-align: center;
    }

    .buttons {
      text-align: center;
    }
  }

  @media (min-width: 768px) and (max-width: 982px) {
  
    .title {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: bold;
      text-align: center;
      font-size: 40px;
    }

    .text-subject {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      text-align: center;
     
    }

    .buttons {
      text-align: center;
    }
  }


    @media (min-width: 660px)  {
    .container {
      
      text-align: center;
      
    }
    .title {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: bold;
      text-align: center;
      font-size: 40px;
    }

    .text-subject {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      text-align: center;
      font-size: 22px;
    }

    .buttons {
      text-align: center;
    }
  }

  @media (min-width: 1024px)  {
    .container-1 {
      width: 100vw;
      margin-left: 20%;
    }
  }

  /* Default RouterLink Styling */
:deep(router-link) {
  color: #ffffff;
  text-decoration: none;
}

/* Hover Effect for RouterLink */
:deep(router-link:hover) {
  color: #f8c471;
  text-decoration: underline;
}

/* Optional: Adjust icon size for smaller devices */
@media (max-width: 768px) {
  :deep(.fab) {
    font-size: 1.2rem; /* Reduce icon size for smaller screens */
  }
}
</style>
