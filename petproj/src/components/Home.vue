<script setup>

</script>

<template>
   <div class="container text-center ">
        <div class="row ">
            <div class=" col col-lg-6   ">
                <h2 class=" title">Find Your Perfect Pet Companion Today !</h2>
                <h6 class=" text-subject  text-black">Discover adorable pets waiting to brighten your life. 
                  Explore a wide range of healthy and happy companions from trusted breeders and shelters.

                </h6>
            </div>
        </div>
        <div class="d-flex  buttons ">
          <RouterLink to="/adopt" class="btn btn-primary btn-lg text-center my-4 me-3">Adopt</RouterLink>
          <RouterLink to="/donate" class="btn btn-outline-primary btn-lg text-center my-4">Donate</RouterLink>
        </div>
    </div>
</template>

<style scoped>
  
  .container {
    margin-top: 8%;
    margin-bottom: 18%;
  }

  .title {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: bold;
      color: #b5c204;
    }

    .text-subject {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      
    }
    @media (min-width: 1024px)  {
    .container {
      
      text-align: left;
      
    }
    .title {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: bold;
      width: 90%;
      text-align: start;
      color: #b5c204;
      font-size: 50px;
    }

    .text-subject {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      text-align: start;
      width: 65%;
      color: white;
      font-size: 22px;
    }

    .buttons {
      text-align: start;
     
      max-width: 80%;
    }
  }

  @media (max-width: 430px)  {
    .container {
      
      margin-right: 17%;
      
    }
    .title {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: bold;
      width: 100%;
      text-align: start;
      color: #b5c204;
    }

    .text-subject {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      text-align: start;
      width: 73%;
      color: white;
    }

    .buttons {
      text-align: start;
     
      max-width: 60%;
    }
  }

  @media (min-width: 768px) and (max-width: 982px) {
    .container {
      height: fit-content;
      margin-right: 17%;
      
    }
    .title {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: bold;
      width: 60%;
      text-align: start;
      color: #b5c204;
    }

    .text-subject {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      text-align: start;
      width: 60%;
      color: white;
    }

    .buttons {
      text-align: start;
     
      max-width: 50%;
    }
  }
</style>
