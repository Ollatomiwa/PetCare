<script setup></script>

<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Pet-Care</a>
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
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/adopt">Adopt</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/volunteer">Volunteer</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/resources">Resources</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li>
      </ul>
      <RouterLink to="/donate" class="btn btn-primary ms-auto">Donate</RouterLink>
    </div>
  </div>
</nav>

</template>

