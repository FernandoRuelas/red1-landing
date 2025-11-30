<template>
  <v-app>
    <Navbar />
    <v-main>
      <Hero />
      <Advantage />
      <Packages />
      <AboutUs />
      <Contact />
      <Footer />
    </v-main>
  </v-app>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Packages from './components/Packages.vue';
import Advantage from './components/Advantages.vue';
import AboutUs from './components/AboutUs.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>