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
      <div class="col-md-12">
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
</template>
