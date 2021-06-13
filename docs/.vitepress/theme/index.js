import DefaultTheme from 'vitepress/theme'
import DarkModeSwitch from './components/DarkModeSwitch.vue'


export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('DarkModeSwitch', DarkModeSwitch)
  }
}
