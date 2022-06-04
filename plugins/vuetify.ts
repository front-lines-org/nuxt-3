// plugins/vuetify.js
import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
      background: '#FFFFFF',
      'background-color': '#FFFFFF',
      'on-surface-variant': '#FFFFFF',
      surface: '#FFFFFF',
      'primary-darken-1': '#3700B3',
      'secondary-darken-1': '#018786',
      error: '#B00020',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
      primary: '#000000',
      secondary: '#ffba74',
      accent: '#8bc34a',
      anchor: '#8c9eff'
    },
    variables: {
      'body-font-family': "'Libre Franklin', sans-serif"
    }
  }

  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme
      }
    },
    defaults: {
      global: {
        ripple: false
      },
      VSheet: {
        elevation: 0
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
