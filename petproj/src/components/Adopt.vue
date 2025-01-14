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
  <!-- Adopt-Section Content -->
  <div class="container">
    <div class="row text-center mt-5">
      <div class="col-md-4">
        <div class="card border-5">
            <h3 class="card-title ">Does He Deserve a Chance?</h3>
            <img :src="cat" class="card-img-top" alt="Swartzer" />
          <div class="card-body">
            <h4> Help us save Swartzer from the streets. He deserves a loving home.</h4> 
            <button class="btn btn-warning btn-lg">Adopt Swartzer</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-5">
            <h3 class="card-title ">Does He Deserve a Chance?</h3>
          <img :src="dog" class="card-img-top" alt="Hunky" />
          <div class="caraged-body">
            <h4> Help us save Hunky from the streets. He deserves a loving home.</h4> 
            <button class="btn btn-warning btn-lg mb-3">Adopt Hunky</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-5">
            <h3 class="card-title ">Does He Deserve a Chance?</h3>  
          <img :src="dog2" class="card-img-top" alt="Floritz" />
          <div class="card-body">
            <h4> Help us save Floritz from the streets. He deserves a loving home.</h4> 
            <button class="btn btn-warning">Adopt Floritz</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Adopt-Section Content -->

  <footer class="bg-dark text-light py-4 mt-3">
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
        <div class="col-12 col-md-4">
          <h5>Quick Links</h5>
          <ul class="list-unstyled">
            <li><RouterLink to="/about" class=" text-decoration-none d-block mb-1 text-warning">About</RouterLink></li>
            <li><RouterLink to="/donate" class=" text-decoration-none d-block mb-1 text-warning">Donate</RouterLink></li>
            <li><RouterLink to="/adopt" class=" text-decoration-none d-block mb-1 text-warning">Adopt</RouterLink></li>
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