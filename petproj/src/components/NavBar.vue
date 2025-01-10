<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const navbarCollapse = ref(null);

    // Ensure we have access to the DOM element
    onMounted(() => {
      navbarCollapse.value = document.querySelector(".navbar-collapse");
    });

    const closeNavbar = () => {
      if (navbarCollapse.value && navbarCollapse.value.classList.contains("show")) {
        const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse.value, {
          toggle: true,
        });
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
  <div class="container-fluid w-100">
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
      <span class="navbar-toggler-icon" ></span>
    </button>
    <div class="collapse navbar-collapse  justify-content-center my-8 mx-8" id="navbarNav" @click="closeNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" @click="closeNavbar"  to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" @click="closeNavbar" to="/adopt">Adopt</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" @click="closeNavbar" to="/volunteer">Volunteer</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" @click="closeNavbar" to="/resources">Resources</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" to="/about" @click="closeNavbar">About</RouterLink>
        </li>
      </ul>
        <RouterLink to="/donate" class="btn btn-primary">Donate</RouterLink>
    </div>
  </div>
</nav>

</template>
<style scoped>

.navbar {
  border-width: 40%;
}
</style>
