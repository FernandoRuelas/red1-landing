<template>
  <section id="nosotros" class="py-16">
    <v-container>
      <h2 class="section-title mb-12">Sobre Nosotros</h2>
      
      <v-row class="mb-12">
        <v-col cols="12" md="6">
          <!-- <div class="placeholder-img">
            <v-icon size="120" color="white">mdi-antenna</v-icon>
          </div> -->
          <img src="../assets/img1.png" height="580" width="450" alt="">
        </v-col>
      <v-col cols="12" md="6" class="d-flex flex-column justify-center">
  <h3 class="text-h4 font-weight-bold mb-4" style="color: #F20000;">
    Nuestra Historia
  </h3>
  <p class="text-h6 font-weight-medium mb-4" style="color: #707070;">
    "Convertimos las barreras en oportunidades, en zonas rurales donde la conexión es un desafío"
  </p>
  <p class="text-body-1 text-grey-darken-1 mb-3">
    RED1 nació de una necesidad real y una convicción profunda: la conectividad no debería ser un privilegio de las grandes ciudades. Fundada por personas que conocen de primera mano los desafíos de vivir en zonas rurales, nuestra empresa surgió cuando nos dimos cuenta de que miles de familias, estudiantes, emprendedores y comunidades enteras quedaban excluidas del mundo digital simplemente por su ubicación geográfica.
  </p>
  <p class="text-body-1 text-grey-darken-1 mb-3">
    Comenzamos con una misión clara: llevar internet de calidad a donde las grandes compañías consideraban "no rentable". Cada torre que instalamos, cada conexión que establecemos, representa el sueño de un estudiante que puede acceder a educación en línea, un emprendedor que puede hacer crecer su negocio, o una familia que puede mantenerse conectada con sus seres queridos.
  </p>
  <p class="text-body-1 text-grey-darken-1">
    En RED1, no solo instalamos equipos; construimos puentes digitales que transforman comunidades. Conocemos a nuestros clientes por nombre, entendemos sus necesidades y celebramos cada vez que la tecnología abre nuevas posibilidades en sus vidas. Porque para nosotros, cada conexión es una historia de inclusión, progreso y esperanza.
  </p>
</v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-card elevation="0" class="pa-8 about-card">
            <v-icon size="50" color="#F20000" class="mb-4">mdi-target</v-icon>
            <h3 class="text-h5 font-weight-bold mb-4">Misión</h3>
            <p class="text-body-1">
              Proporcionar conectividad confiable y de alta calidad a las comunidades rurales, donde las grandes marcas aún no han llegado, impulsando el desarrollo digital y económico local. Nos comprometemos a ofrecer soluciones de internet seguras y accesibles adaptadas a las necesidades de nuestros clientes, promoviendo así la inclusión digital y la igualdad de oportunidades en todo el país.
            </p>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="6">
          <v-card elevation="0" class="pa-8 about-card">
            <v-icon size="50" color="#F20000" class="mb-4">mdi-eye</v-icon>
            <h3 class="text-h5 font-weight-bold mb-4">Visión</h3>
            <p class="text-body-1">
              Conectar cada rincón del país con soluciones de internet innovadoras y accesibles, transformar las zonas rurales en comunidades digitalmente integradas y empoderadas, y fomentar un futuro donde la conectividad no sea un privilegio, sino un derecho para todos.
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
</script>

<style scoped>
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #F20000;
  text-align: center;
}

.placeholder-img {
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #707070 0%, #000000 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 8px;
}

.about-card {
  background-color: #f5f5f5;
  height: 100%;
}
</style>