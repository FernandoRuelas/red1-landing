<template>
  <section id="ventajas" class="advantages-section py-16">
    <v-container>
      <h2 class="section-title mb-8">¿Por qué elegir RED1?</h2>
      
      <v-row>
        <v-col v-for="advantage in advantages" :key="advantage.title" cols="12" md="4">
          <v-card class="advantage-card pa-6 text-center" elevation="0">
            <div class="advantage-icon">{{ advantage.icon }}</div>
            <h3 class="text-h5 font-weight-bold mb-3">{{ advantage.title }}</h3>
            <p class="text-body-1 text-grey-darken-1">{{ advantage.description }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const advantages = ref([
  {
    title: 'Atención Rápida',
    description: 'Técnicos en tu zona con visitas programadas',
    icon: '⏱️'
  },
  {
    title: 'Infraestructura Moderna',
    description: 'Estaciones base que aseguran conexión estable',
    icon: '📡'
  },
  {
    title: 'Calidad Humana',
    description: 'Honesto y orientado a solucionar tus necesidades',
    icon: '🤝'
  },
   {
    title: 'Permisos Federales',
    description: 'Contamos con permisos oficiales del Gobierno Federal que respaldan nuestro servicio',
    icon: '📜'
  },
   {
    title: 'Calidad Tecnológica',
    description: 'Implementamos soluciones innovadoras y equipos de última generación para garantizar excelencia en el servicio',
    icon: '💻'
  }
,
  {
    title: 'Cobertura',
    description: 'Red amplia que garantiza conexión en distintas zonas',
    icon: '🌐'
  },

]);
</script>

<style scoped>
.advantages-section {
  background-color: #f5f5f5;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #F20000;
  text-align: center;
}

.advantage-card {
  transition: all 0.3s ease;

  background-color: transparent;
}

.advantage-card:hover {
  background-color: white !important;
}

.advantage-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}
</style>