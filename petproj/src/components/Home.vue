<script setup>

</script>

<template>
   <div class="container text-center ">
        <div class="row justify-content-md-center">
            <div class=" col col-lg-6   ">
                <h2 class=" title">Find Your Perfect Pet Companion Today!</h2>
                <h6 class=" text-subject subject">Discover adorable pets waiting to brighten your life. 
                  Explore a wide range of healthy and happy companions from trusted breeders and shelters.

                </h6>
            </div>
        </div>
        <div class="d-flex justify-content-center buttons">
          <RouterLink to="/adopt" class="btn btn-primary btn-lg text-center my-4 me-3">Adopt a Pet</RouterLink>
          <RouterLink to="/donate" class="btn btn-outline-primary btn-lg text-center my-4">Donate</RouterLink>
        </div>
    </div>
</template>

<style scoped>
  
  .container {
    margin-top: 8%;
    margin-bottom: 18%;
  }
  @media (max-width: 1024px) {
    .container {
      
      margin-right: 17%;
      
    }
    .title {
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
      width: 80%;
      text-align: start;
      color: #0cc443;
    }

    .subject {
      font-family: Arial, Helvetica, sans-serif;
      text-align: start;
      width: 53%;
      color: white;
    }

    .buttons {
      width: 52%;
    }
  }
</style>
