<script setup>

</script>

<template>
   <div class="container text-center ">
        <div class="row ">
            <div class=" col col-lg-6   ">
                <h2 class=" title text-warning">Find Your Perfect Pet Companion Today !</h2>
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
    /* Footer section *\
    <div class="container-1">
      <div class="row">
        <div class="col col-md-6">
          <h1 class="text-light justify-content-center">PET-CARE</h1>
        </div>
      </div>
    </div>
</template>

<style scoped>
  
  .container {
   
    margin-bottom: 18%;
    background-image: url('../assets/img/dognew.png');
    background-repeat: no-repeat;
    background-size: cover;
    height:100vh;
    width:100vw;
    background-color: gray;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
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
      
      text-align: left;
      
    }
    .title {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: bold;
      width: 90%;
      text-align: start;
      font-size: 50px;
    }

    .text-subject {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      text-align: start;
      width: 65%;
      font-size: 22px;
    }

    .buttons {
      text-align: start;
     
      max-width: 80%;
    }
  }

  @media (max-width: 430px)  {
    .container {
      background-size:contain;
      margin-right: 35%;
      
    }
    .title {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: bold;
      width: 73%;
      text-align: start;
      
    }

    .text-subject {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      text-align: start;
      width: 53%;
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
    }

    .text-subject {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      text-align: start;
      width: 50%;
    }

    .buttons {
      text-align: start;
     
      max-width: 50%;
    }
  }


    @media (min-width: 660px)  {
    .container {
      
      text-align: left;
      
    }
    .title {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: bold;
      width: 70%;
      text-align: start;
      font-size: 50px;
    }

    .text-subject {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      text-align: start;
      width: 65%;
      font-size: 22px;
    }

    .buttons {
      text-align: start;
     
      max-width: 80%;
    }
  }
</style>
