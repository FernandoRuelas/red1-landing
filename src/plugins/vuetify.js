/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
 theme: {
    defaultTheme: "red1Theme",
    themes: {
      red1Theme: {
        dark: false,
        colors: {
          primary: "#F20000",
          secondary: "#707070",
          accent: "#FFFFFF",
          background: "#FFFFFF",
          surface: "#FFFFFF",
        },
      },
    },
  },
})
