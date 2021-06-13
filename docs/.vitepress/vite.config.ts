// vite.config.js
import { UserConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'

const config: UserConfig = {
  plugins: [
    Vue(),
    ViteComponents({
      extensions: ['vue', 'md'],
      globalComponentsDeclaration: true,
      customComponentResolvers: ViteIconsResolver({
        componentPrefix: '',
      }),
    }),
    ViteIcons()
  ],
};

export default config