<template>
  <footer class="footer-section">
    <v-container>
      <v-row>
        <v-col cols="12" md="3" class="text-center text-md-left">
          <h3 class="text-h4 font-weight-bold mb-4" style="color: #F20000;">RED1</h3>
          <p class="text-body-2">
            Conectando comunidades rurales con internet de calidad.
          </p>
        </v-col>
        
        <v-col cols="12" md="3" class="text-center">
          <h4 class="text-h6 font-weight-bold mb-4">Enlaces Rápidos</h4>
          <div class="d-flex flex-column align-center">
            <v-btn variant="text" color="white" @click="scrollTo('inicio')" class="mb-2">Inicio</v-btn>
            <v-btn variant="text" color="white" @click="scrollTo('paquetes')" class="mb-2">Paquetes</v-btn>
            <v-btn variant="text" color="white" @click="scrollTo('nosotros')" class="mb-2">Nosotros</v-btn>
          </div>
        </v-col>

        <v-col cols="12" md="3" class="text-center">
          <h4 class="text-h6 font-weight-bold mb-4">Documentos</h4>
          <div class="d-flex flex-column align-center">
          
            <v-btn 
              variant="text" 
              color="white" 
              href="/docs/terminos-condiciones.pdf" 
              target="_blank" 
              class="mb-2"
            >
              <v-icon start>mdi-download</v-icon>
              Términos y Condiciones
            </v-btn>
          
          </div>
        </v-col>
        
        <v-col cols="12" md="3" class="text-center text-md-right">
          <h4 class="text-h6 font-weight-bold mb-4">Horario de Atención</h4>
          <p class="text-body-2 mb-2">Lunes a Viernes: 9:00 - 18:00</p>
          <p class="text-body-2 mb-2">Sábados: 9:00 - 14:00</p>
          <p class="text-body-2">Soporte técnico 24/7</p>
        </v-col>
      </v-row>
      
      <v-divider class="my-6" color="white" opacity="0.3"></v-divider>
      
      <v-row>
        <v-col cols="12" class="text-center">
          <p class="text-body-2">
            &copy; 2025 RED1. Todos los derechos reservados.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script setup>
const scrollTo = (section) => {
  const element = document.getElementById(section);
  if (element) {
    const offset = 64;
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
.footer-section {
  background-color: #000000;
  color: white;
  padding: 3rem 0;
}

.v-btn {
  text-transform: none !important;
  justify-content: flex-start;
}
</style>


