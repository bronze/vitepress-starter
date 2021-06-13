import DefaultTheme from 'vitepress/theme'
import DarkModeSwitch from './components/DarkModeSwitch.vue'
import 'windi.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('DarkModeSwitch', DarkModeSwitch)
  }
}
