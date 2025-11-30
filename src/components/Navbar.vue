<template>
  <v-app-bar app color="white" elevation="2" fixed>
    <v-container class="d-flex align-center">
      <v-toolbar-title class="text-h4 font-weight-bold" style="color: #F20000; cursor: pointer" @click="scrollTo('inicio')">
        <img src="../assets/logo.png" alt="RED1 Logo" height="40" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
      <!-- Desktop Menu -->
      <div class="d-none d-md-flex">
        <v-btn variant="text" @click="scrollTo('inicio')">Inicio</v-btn>
        <v-btn variant="text" @click="scrollTo('paquetes')">Paquetes</v-btn>
        <v-btn variant="text" @click="scrollTo('ventajas')">Ventajas</v-btn>
        <v-btn variant="text" @click="scrollTo('nosotros')">Nosotros</v-btn>
        <v-btn variant="text" @click="scrollTo('contacto')">Contacto</v-btn>
      </div>
      
      <!-- Mobile Menu Icon -->
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list>
      <v-list-item @click="scrollTo('inicio'); drawer = false">
        <v-list-item-title>Inicio</v-list-item-title>
      </v-list-item>
      <v-list-item @click="scrollTo('paquetes'); drawer = false">
        <v-list-item-title>Paquetes</v-list-item-title>
      </v-list-item>
      <v-list-item @click="scrollTo('ventajas'); drawer = false">
        <v-list-item-title>Ventajas</v-list-item-title>
      </v-list-item>
      <v-list-item @click="scrollTo('nosotros'); drawer = false">
        <v-list-item-title>Nosotros</v-list-item-title>
      </v-list-item>
      <v-list-item @click="scrollTo('contacto'); drawer = false">
        <v-list-item-title>Contacto</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);

const scrollTo = (section) => {
  const element = document.getElementById(section);
  if (element) {
    const offset = 14;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
</script>

<style scoped>
.v-toolbar-title {
  transition: opacity 0.3s ease;
}

.v-toolbar-title:hover {
  opacity: 0.8;
}
</style>