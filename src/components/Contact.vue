<template>
  <section id="contacto" class="contact-section py-16">
    <v-container>
      <h2 class="section-title mb-8">Contáctanos</h2>
      <p class="text-center text-h6 text-grey-darken-1 mb-12">
        Estamos listos para conectarte
      </p>

      <v-row justify="center">

        <!-- Teléfono -->
        <v-col cols="12" md="4">
          <v-card class="pa-6 text-center contact-card" elevation="3">
            <v-icon size="60" color="#F20000" class="mb-4">mdi-phone</v-icon>
            <h3 class="text-h6 font-weight-bold mb-2">Teléfono</h3>
            <a href="tel:6655210758" class="contact-link">
              <p class="text-h6">66-5521-0758</p>
            </a>
          </v-card>
        </v-col>

        <!-- Email -->
        <v-col cols="12" md="4">
          <v-card class="pa-6 text-center contact-card" elevation="3">
            <v-icon size="60" color="#F20000" class="mb-4">mdi-email</v-icon>
            <h3 class="text-h6 font-weight-bold mb-2">Email</h3>
            <a href="mailto:soporte@red1.com.mx" class="contact-link">
              <p class="text-body-1">soporte@red1.com.mx</p>
            </a>
          </v-card>
        </v-col>

        <!-- WhatsApp -->
        <v-col cols="12" md="4">
          <v-card class="pa-6 text-center contact-card" elevation="3" @click="goWhatsApp" style="cursor:pointer">
            <v-icon size="60" color="#25D366" class="mb-4">mdi-whatsapp</v-icon>
            <h3 class="text-h6 font-weight-bold mb-2">WhatsApp</h3>
            <p class="text-body-1 contact-link">664 766 3103</p>
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </section>
</template>

<script setup>
function goWhatsApp() {
  const phone = "526647663103"; 
  const message = encodeURIComponent("Hola, me gustaría solicitar información sobre el servicio de internet RED1.");

  // Detectar si es dispositivo móvil
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const url = isMobile
    ? `https://wa.me/${phone}?text=${message}`
    : `https://web.whatsapp.com/send?phone=${phone}&text=${message}`;

  window.open(url, "_blank");
}
</script>

<style scoped>
.contact-section {
  background-color: #f5f5f5;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #F20000;
  text-align: center;
}

.contact-card {
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-link {
  text-decoration: none;
  color: #707070;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #F20000;
}
</style>
