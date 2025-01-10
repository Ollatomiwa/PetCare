<script setup>

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
    height:100vh;
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
</style>
