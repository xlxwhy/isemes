<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
}

main {
  min-height: calc(100vh - 140px);
  transition: padding-top 0.3s ease;
}

/* Add padding when navbar is fixed */
.navbar-scrolled + main {
  padding-top: 90px; /* Adjust based on navbar height */
}
</style>
