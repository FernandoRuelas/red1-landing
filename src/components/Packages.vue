<template>
  <section id="paquetes" class="py-16" style="background-color: black;">
    <v-container>
      <h2 class="section-title mb-8">Nuestros Paquetes</h2>
      <p class="text-center text-h6 text-grey-darken-1 mb-12">
        Elige el plan perfecto para ti
      </p>
      
      <v-row>
        <v-col v-for="pkg in packages" :key="pkg.name" cols="12" md="4">
          <v-card class="package-card" elevation="3" style="position: relative; height: 100%;">
            <div v-if="pkg.featured" class="featured-badge">
              POPULAR
            </div>
            
            <v-card-text class="text-center pa-8">
              <div class="text-h2 mb-4">{{ pkg.icon }}</div>
              <h3 class="text-h4 font-weight-bold mb-4 text-grey">{{ pkg.name }}</h3>
              <div class="price-tag mb-2">{{ pkg.price }}</div>
              <p class="text-subtitle-1 text-grey mb-6">MXN/mes</p>
              <p class="text-h6 font-weight-bold mb-6 text-white">{{ pkg.speed }}</p>
              
              <v-divider class="my-4 text-white"></v-divider>
              
              <v-list class="transparent" density="compact" style="background-color: #212121;">
                <v-list-item v-for="benefit in pkg.benefits" :key="benefit">
                  <template v-slot:prepend>
                    <v-icon color="red">mdi-check-circle</v-icon>
                  </template>
                  <v-list-item-title style="color: white;">{{ benefit }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
            
            <v-card-actions class="pa-6">
              <v-btn block size="x-large" class="contact-btn" @click="scrollTo('contacto')">
                Contratar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <small class="text-center text-white">
         Los precios pueden variar dependiendo de la zona en la que se encuentre el cliente, ya que factores como la disponibilidad del servicio, la infraestructura local, la demanda en la región y los costos operativos específicos de cada área influyen directamente en el costo final. Por esta razón, es importante considerar que el valor mostrado es una referencia general y puede ajustarse según las condiciones particulares de cada localidad.
        </small>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const packages = ref([
  {
    name: 'ILIMITADO 10',
    price: '$450',
    speed: '10 Mbps',
    benefits: ['Navega sin preocupaciones', 'Comparte momentos especiales', 'Conexión estable'],
    icon: '🌐',
    featured: false
  },
  {
    name: 'ILIMITADO 20',
    price: '$650',
    speed: '20 Mbps',
    benefits: ['Velocidad eficiente', 'Conexión estable', 'Perfecto para uso familiar'],
    icon: '⚡',
    featured: true
  },
  {
    name: 'ILIMITADO 30',
    price: '$750',
    speed: '30 Mbps',
    benefits: ['Velocidad potente', 'Conexión ilimitada', 'Videoconferencias en alta resolución'],
    icon: '🚀',
    featured: false
  }
]);

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
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #F20000;
  text-align: center;
}

.package-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
background: #212121;
}

.package-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(242, 0, 0, 0.2) !important;
}

.featured-badge {
  position: absolute;
  top: -2px;
  right: -2px;
  background: #F20000;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  z-index: 1;
}

.price-tag {
  font-size: 3rem;
  font-weight: 700;
  color: #F20000;
}

.contact-btn {
  background-color: #F20000 !important;
  color: white;
  transition: background-color 0.3s ease;
}

.contact-btn:hover {
  background-color: #F20505 !important;
}
</style>