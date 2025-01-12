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
  <!-- Donstr-Section Content -->
  <div class="container">
    <div class="row text-center mt-5">
      <div class="col-md-4">
        <div class="card border-5">
            <h3 class="card-title ">Does He Deserve a Chance?</h3>
            <img :src="cat" class="card-img-top" alt="Image 1" />
          <div class="card-body">
            <h4> Help us save Swarter from the streets. He deserves a loving home.</h4> 
            <button class="btn btn-warning btn-lg">DONATE</button>
          </div>
        </div>
      </div>
      <div class="col-md-4 big-dog">
        <div class="card border-35">
            <h3 class="card-title ">Does He Deserve a Chance?</h3>
          <img :src="dog" class="card-img-top" alt="Image 2" />
          <div class="caraged-body">
            <h4> Help us save Hunky from the streets. He deserves a loving home.</h4> 
            <button class="btn btn-warning btn-lg mb-3">Adopt Hunky</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-5">
            <h3 class="card-title ">Does He Deserve a Chance?</h3>  
          <img :src="dog2" class="card-img-top" alt="Image 3" />
          <div class="card-body">
            <h4> Help us save Floritz from the streets. He deserves a loving home.</h4> 
            <button class="btn btn-warning">Adopt Floritz</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Donate-Section Content -->
</template>