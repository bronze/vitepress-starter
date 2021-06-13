// vite.config.js
import Vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'

export default {
  plugins: [
    Vue(),
    ViteComponents({
      extensions: ['vue', 'md'],
      globalComponentsDeclaration: true,
      customLoaderMatcher: path => path.endsWith('.md'),
      customComponentResolvers: ViteIconsResolver({
        componentPrefix: '',
      }),
    }),
    ViteIcons()
  ],
};
