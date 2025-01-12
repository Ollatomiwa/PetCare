<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const navbarCollapse = ref(null);
    let bootstrapCollapseInstance = null;

    onMounted(() => {
      // Get the DOM element for the navbar collapse
      navbarCollapse.value = document.querySelector(".navbar-collapse");
      if (navbarCollapse.value) {
        // Initialize the Bootstrap Collapse instance
        bootstrapCollapseInstance = new bootstrap.Collapse(navbarCollapse.value, {
          toggle: false, // Prevent immediate toggle
        });
      }
    });

    const closeNavbar = () => {
      // Check if the navbar is open and hide it
      if (navbarCollapse.value && navbarCollapse.value.classList.contains("show")) {
        bootstrapCollapseInstance.hide();
      }
    };

    return {
      closeNavbar,
    };
  },
};


</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand fw-bolder text-warning" href="#">Pet-Care</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center my-8 mx-8" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/" @click="closeNavbar">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/adopt" @click="closeNavbar">Adopt</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/volunteer" @click="closeNavbar">Volunteer</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/resources" @click="closeNavbar">Resources</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/about" @click="closeNavbar">About</RouterLink>
          </li>
        </ul>
        <RouterLink to="/donate" @click="closeNavbar" class="btn btn-primary">Donate</RouterLink>
      </div>
    </div>
  </nav>
</template>


<style scoped>

</style>
