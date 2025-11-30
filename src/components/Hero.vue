<template>
  <section id="inicio" class="hero-section">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <h1 class="hero-title">
            Conecta con el mundo,conecta con RED1
          </h1>
          <p class="hero-subtitle">
            Internet confiable y de alta calidad para comunidades rurales
          </p>
          <v-btn size="x-large" color="black" @click="scrollTo('paquetes')" class="mt-4">
            Ver Paquetes
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" md="6">
        
           <!-- <div class="placeholder-img"> 
            <img src="../assets/hero-2.png" height="500" width="500" alt="Hero Image" />
           
          </div>  -->
           <img src="../assets/hero-2.png" height="500" width="500" alt="Hero Image" />
        </v-col>
      </v-row>
    </v-container>
  </section>
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
.hero-section {
  background: linear-gradient(135deg, #F20000 0%, #F20505 100%);
  color: white;
  min-height: 90vh;
  display: flex;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
}

.placeholder-img {
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #707070 0%, #000000 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 8px;
}

@media (max-width: 960px) {
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-subtitle {
    font-size: 1.2rem;
  }
}
</style>