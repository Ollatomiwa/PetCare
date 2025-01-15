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
            <p class="text-center">
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
    <!--Dog Adoption-->

    <h1 class="mt-3">Dogs Adoption</h1>
    <div class="col col-md-12">
        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <!--image section-->
                    <img :src="logo" alt="" srcset="" class="bg-dark me-3" style="width:65%; height:auto; border-radius: 5px;
                    object-fit: cover; border-radius: 5%">
                    <!--Text section-->
                    <div>
                        <h5 class="card-title text-center">FINDING A DOG</h5>
                    <p class="card-text text-center text-primary">Where Can You Adopt A Dog?</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <!--image section-->
                    <img :src="logo" alt="logo" srcset="" class="bg-dark me-3" style="width:65%; height:auto; border-radius: 5px;
                    object-fit: cover; border-radius: 5%;">
                    <!--Text section-->
                    <div>
                        <h5 class="card-title text-center">FINDING A DOG</h5>
                    <p class="card-text text-center text-primary">How to Adopt A Dog: Step-by-Step Guide?</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-2">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <!--image section-->
                    <img :src="logo" alt="logo" srcset="" class="bg-dark me-3" style="width:65%; height:auto; border-radius: 5px;
                    object-fit: cover; border-radius: 5%;">
                    <!--Text section-->
                    <div>
                        <h5 class="card-title text-center">YOUR NEW DOG</h5>
                    <p class="card-text text-center text-primary">How To Introduce A New Dog</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Dog Breeds-->
    <h1 class="mt-3">Dogs Breeds</h1>
    <div class="col col-md-12">
        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <!--image section-->
                    <img :src="logo" alt="" srcset="" class="bg-dark me-3" style="width:70%; height:auto; border-radius: 5px;
                    object-fit: cover; border-radius: 5%">
                    <!--Text section-->
                    <div>
                        <h5 class="card-title text-center">AFFENPISCHER</h5>
                    <p class="card-text text-center text-primary">The Affenpischer is a study and lovely toy</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <!--image section-->
                    <img :src="logo" alt="" srcset="" class="bg-dark me-3" style="width:70%; height:auto; border-radius: 5px;
                    object-fit: cover; border-radius: 5%;">
                    <!--Text section-->
                    <div>
                        <h5 class="card-title text-center">AFGAN HOUND</h5>
                    <p class="card-text text-center text-primary">The Beauty Queen of The Dog World</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-2">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <!--image section-->
                    <img :src="logo" alt="" srcset="" class="bg-dark me-3" style="width:70%; height:auto; border-radius: 5px;
                    object-fit: cover; border-radius: 5%;">
                    <!--Text section-->
                    <div>
                        <h5 class="card-title text-center">AIREDALE TERRIER</h5>
                    <p class="card-text text-center text-primary">As The Largest Terrier Breed, The Airedale...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Dogs Behaviour-->
    <h1 class="mt-3">Dogs Behaviour</h1>
    <div class="col col-md-12">
        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <!--image section-->
                    <img :src="logo" alt="" srcset="" class="bg-dark me-3" style="width:70%; height:auto; border-radius: 5px;
                    object-fit: cover; border-radius: 5%">
                    <!--Text section-->
                    <div>
                        <h5 class="card-title text-center">CHEWING</h5>
                    <p class="card-text text-center text-primary">How to stop a Dog From Chewing...</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <!--image section-->
                    <img :src="logo" alt="" srcset="" class="bg-dark me-3" style="width:70%; height:auto; border-radius: 5px;
                    object-fit: cover; border-radius: 5%">
                    <!--Text section-->
                    <div>
                        <h5 class="card-title text-center">CHEWING</h5>
                    <p class="card-text text-center text-primary">Puppy Mouthing</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-2">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <!--image section-->
                    <img :src="logo" alt="" srcset="" class="bg-dark me-3" style="width:70%; height:auto; border-radius: 5px;
                    object-fit: cover; border-radius: 5%;">
                    <!--Text section-->
                    <div>
                        <h5 class="card-title text-center">CHEWING</h5>
                    <p class="card-text text-center text-primary">How to Help Puppy Teething</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!--Dog Health and Wellness-->
    <h1 class="mt-3">Dogs Health & Wellness</h1>
    <div class="col col-md-12">
        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <!--image section-->
                    <img :src="logo" alt="" srcset="" class="bg-dark me-3" style="width:30%; height:auto; border-radius: 5px;
                    object-fit: cover; border-radius: 5%">
                    <!--Text section-->
                    <div>
                        <h5 class="card-title text-center">SPAYING & NEUTERING</h5>
                    <p class="card-text text-center text-primary">Non-Surgical Dog & Cat Sterilization</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <!--image section-->
                    <img :src="logo" alt="" srcset="" class="bg-dark me-3" style="width:30%; height:auto; border-radius: 5px;
                    object-fit: cover; border-radius: 5%;">
                    <!--Text section-->
                    <div>
                        <h5 class="card-title text-center">SPAYING & NEUTERING</h5>
                    <p class="card-text text-center text-primary">When is a puppy or Kitten Old Enough</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <!--image section-->
                    <img :src="logo" alt="" srcset="" class="bg-dark me-3" style="width:30%; height:auto; border-radius: 5px;
                    object-fit: cover; border-radius: 5%;">
                    <!--Text section-->
                    <div>
                        <h5 class="card-title text-center">SEASONAL HEALTH</h5>
                    <p class="card-text text-center text-primary">How to Protect Dog Paws in Winter</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!--Dog Training-->
    <h1 class="mt-3">Dogs Training</h1>
    <div class="col col-md-12">
        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <!--image section-->
                    <img :src="logo" alt="" srcset="" class="bg-dark me-3" style="width:50%; height:auto; border-radius: 5px;
                    object-fit: cover; border-radius: 5%">
                    <!--Text section-->
                    <div>
                        <h5 class="card-title text-center">OBEDIENCE TRAINING</h5>
                    <p class="card-text text-center text-primary">How to Stop Dog from Jumping</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <!--image section-->
                    <img :src="logo" alt="" srcset="" class="bg-dark me-3" style="width:50%; height:auto; border-radius: 5px;
                    object-fit: cover; border-radius: 5%;">
                    <!--Text section-->
                    <div>
                        <h5 class="card-title text-center">SOCIALIZING</h5>
                    <p class="card-text text-center text-primary">Pet-Friendly Hotel Etiquette</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <!--image section-->
                    <img :src="logo" alt="" srcset="" class="bg-dark me-3" style="width:50%; height:auto; border-radius: 5px;
                    object-fit: cover; border-radius: 5%;">
                    <!--Text section-->
                    <div>
                        <h5 class="card-title text-center">OBEDIENCE TRAINING</h5>
                    <p class="card-text text-center text-primary">When Your Dog Won't Come When Called</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!--Feeding Your Dog-->
    <h1 class="mt-3">Feeding Your Dog</h1>
    <div class="col col-md-12">
        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <!--image section-->
                    <img :src="logo" alt="" srcset="" class="bg-dark me-3" style="width:50%; height:auto; border-radius: 5px;
                    object-fit: cover; border-radius: 5%">
                    <!--Text section-->
                    <div>
                        <h5 class="card-title text-center">DOG NUTRITION </h5>
                    <p class="card-text text-center text-primary">Are Antiers Safe for Dogs?</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-3">
            <div class="card-body mb-2">
                <div class="d-flex align-items-center">
                    <!--image section-->
                    <img :src="logo" alt="" srcset="" class="bg-dark me-3" style="width:50%; height:auto; border-radius: 5px;
                    object-fit: cover; border-radius: 5%;">
                    <!--Text section-->
                    <div>
                        <h5 class="card-title text-center">DOG NUTRITION</h5>
                    <p class="card-text text-center text-primary">Is Apple Cider</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <!--image section-->
                    <img :src="logo" alt="" srcset="" class="bg-dark me-3" style="width:50%; height:auto; border-radius: 5px;
                    object-fit: cover; border-radius: 5%;">
                    <!--Text section-->
                    <div>
                        <h5 class="card-title text-center">DOG NUTRITION</h5>
                    <p class="card-text text-center text-primary">What to Feed Your Dog</p>
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
