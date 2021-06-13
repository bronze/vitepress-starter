import DefaultTheme from 'vitepress/theme'
import toggleTheme from '../../components/toggleTheme.vue'


export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('toggleTheme', toggleTheme)
  }
}
