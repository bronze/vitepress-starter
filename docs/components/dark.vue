import { isDark, toggleDark } from '~/logic'

<a class="icon-btn mx-2" :title="t('button.toggle_dark')" @click="toggleDark">
  <carbon-moon v-if="isDark" />
  <carbon-sun v-else />
</a>