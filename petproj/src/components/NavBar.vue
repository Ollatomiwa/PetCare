<script setup></script>

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
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center my-8 mx-8" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" to="/adopt">Adopt</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" to="/volunteer">Volunteer</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" to="/resources">Resources</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" to="/about">About</RouterLink>
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
