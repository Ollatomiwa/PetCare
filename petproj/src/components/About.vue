<script setup>
import { ref } from 'vue';

import logos from '../assets/img/logo.png';

const logo = ref(logos);

</script>

<template>
  <div class="container text-center">
    <div class="row justify-content-md-center">
        <div class="col col-md-8">
            <h1 class="mt-3">Dogs & Puppies</h1>
            <p class="text-center text-primary">
              Welcome to our Dogs & Puppies articles, your one-stop resource for all
              things canine!. Whether you need training tips, advice on keeping your
              dog healthy and happy or information on finding a dog for adopton. we
              have got you covered. our experts provide valuable insights into all
              life stages of dogs, from small lap dogs to giant breeds. Explore our
              Dogs & Puppies articles to learn about the best care for your furry
              friend today.
            </p>
        </div>

        
    </div>
    <!-- Dog Adoption Section -->
<div class="container">
  <h1 class="mt-3">Dogs Adoption</h1>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card mb-3">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <img :src="logo" alt="" class="bg-dark me-3" style="width:40%; height:auto; object-fit:cover; border-radius:5%;">
            <div>
              <h5 class="card-title text-center">FINDING A DOG</h5>
              <p class="card-text text-center text-primary">Where Can You Adopt A Dog?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card mb-3">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <img :src="logo" alt="" class="bg-dark me-3" style="width:40%; height:auto; object-fit:cover; border-radius:5%;">
            <div>
              <h5 class="card-title text-center">FINDING A DOG</h5>
              <p class="card-text text-center text-primary">How to Adopt A Dog: Step-by-Step Guide?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card mb-3">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <img :src="logo" alt="" class="bg-dark me-3" style="width:40%; height:auto; object-fit:cover; border-radius:5%;">
            <div>
              <h5 class="card-title text-center">YOUR NEW DOG</h5>
              <p class="card-text text-center text-primary">How To Introduce A New Dog</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Dog Breeds Section -->
<div class="container">
  <h1 class="mt-3">Dogs Breeds</h1>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card mb-3">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <img :src="logo" alt="" class="bg-dark me-3" style="width:40%; height:auto; object-fit:cover; border-radius:5%;">
            <div>
              <h5 class="card-title text-center">AFFENPINSCHER</h5>
              <p class="card-text text-center text-primary">The Affenpinscher is a sturdy and lovely toy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card mb-3">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <img :src="logo" alt="" class="bg-dark me-3" style="width:40%; height:auto; object-fit:cover; border-radius:5%;">
            <div>
              <h5 class="card-title text-center">AFGHAN HOUND</h5>
              <p class="card-text text-center text-primary">The Beauty Queen of The Dog World.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card mb-3">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <img :src="logo" alt="" class="bg-dark me-3" style="width:40%; height:auto; object-fit:cover; border-radius:5%;">
            <div>
              <h5 class="card-title text-center">AIREDALE TERRIER</h5>
              <p class="card-text text-center text-primary">As The Largest Terrier Breed, The Airedale...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<!-- Dog Training -->
<div class="container">
  <h1 class="mt-3">Dogs Training</h1>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card mb-3">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <img :src="logo" alt="" class="bg-dark me-3" style="width:40%; height:auto; object-fit:cover; border-radius:5%;">
            <div>
              <h5 class="card-title text-center">OBEDIENCE TRAINING</h5>
              <p class="card-text text-center text-primary">How to Stop Dog from Jumping</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card mb-3">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <img :src="logo" alt="" class="bg-dark me-3" style="width:40%; height:auto; object-fit:cover; border-radius:5%;">
            <div>
              <h5 class="card-title text-center">SOCIALIZING</h5>
              <p class="card-text text-center text-primary">Pet-Friendly Hotel Etiquette</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card mb-3">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <img :src="logo" alt="" class="bg-dark me-3" style="width:40%; height:auto; object-fit:cover; border-radius:5%;">
            <div>
              <h5 class="card-title text-center">OBEDIENCE TRAINING</h5>
              <p class="card-text text-center text-primary">When Your Dog Won't Come When Called</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


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
p {
    font-size: large;
}
</style>
