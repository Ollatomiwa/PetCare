<script setup>
    import { ref } from 'vue'


import imgCat from '../assets/img/straydogs.jfif';
import veganism from '../assets/img/Veganism.jfif';




const cat = ref(imgCat);

const man = ref(veganism);
</script>

<template>
  <!-- Donstr-Section Content -->
  <div class="container">
    <div class="row text-center mt-5">
      <div class="col-md-12">
        <div class="card border-5 bg-black"> 
            <h1 class="card-title text-light fw-bold ">Does He Deserve a Chance?</h1>
            <img :src="cat" class="card-img-top" alt="Image 1" />
          <div class="card-body">
            <h4 class="text-light fw-bold "> Help Vulnerable Animals Now </h4> 
            <button class="btn btn-warning btn-lg">DONATE</button>
          </div>
        </div>
      </div> 
      
      <div class="col-md-12 my-4">
        <div class="card border-5 bg-black">
            <h3 class="card-title text-light fw-bold ">Can't Adopt Now?</h3>
            <h4 class="text-light fw-bold "> Contribute By Wearing Your Love For Animals Instead!</h4>
            <img :src="man" class="card-img-top" alt="Image 2" />
          <div class="card-body">
            <button class="btn btn-warning btn-lg mb-3 mt-4">Shop Now</button>
          </div>
        </div>
      </div>
      <div class="col-md-12 mb-3">
        <div class="card border-5 bg-black">
            <h2 class="card-title text-light fw-bold  text-start  ">Other Ways to Help: </h2>  
            <RouterLink to="#" class="text-warning text-start d-block mb-1 text-decoration-none">
              <h3>Become a Monthly Member <i class="bi bi-arrow-right fs-3"></i></h3>
          </RouterLink>
          <RouterLink to="#" class="text-warning text-start d-block mb-1 text-decoration-none">
              <h3>Advocate For Animals <i class="bi bi-arrow-right fs-3"></i></h3>
          </RouterLink> <RouterLink to="#" class="text-warning text-start d-block mb-1 text-decoration-none">
             <h3>Volunteer or Foster <i class="bi bi-arrow-right fs-3"></i></h3>
          </RouterLink>
          
            
        </div>
      </div>
    </div>
  </div>
  <!-- Donate-Section Content -->

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
            <li><RouterLink to="/volunteers" class=" text-decoration-none d-block text-warning">Volunteers</RouterLink></li>
          </ul>
        </div>

        <!-- Footer Message -->
        <div class="col-12 col-md-4 mb-3">
          <h5>Contact</h5>
          <p class="mb-1">
            121-123 High Drive, Lagos, Nigeria
          </p>
          <p class="mb-1">
            Email: <RouterLink to="mailto:computlifecom@gmail.com" class="text-light text-decoration-none">computlifecom@gmail.com</RouterLink>
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
