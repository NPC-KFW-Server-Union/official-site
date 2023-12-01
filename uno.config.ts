import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
} from 'unocss'
import { presetForms } from '@julr/unocss-preset-forms'
import { logo } from './src/shortcuts/logo'

export default defineConfig({
  theme: {
    fontFamily: {
      modern: 'Orbitron'
    },
  },
  rules: [
    ['h-10v', { height: "10vh" }],
    ['h-40v', { height: "40vh" }],
    ['h-70v', { height: "70vh" }]
  ],
  shortcuts: [
    logo,
    { 'styled-input': 'rounded-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50' },
  ],
  presets: [
    presetUno(),
    presetForms(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // these will extend the default theme
        // sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
  ],
  safelist: ['bg-orange-300', 'prose', 'styled-input'],
})
