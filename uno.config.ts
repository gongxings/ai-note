// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      green: {
        DEFAULT: '#3BA676',
        '50': '#B4E4CF',
        '100': '#A5DFC5',
        '200': '#87D4B2',
        '300': '#69CA9E',
        '400': '#4BBF8B',
        '500': '#3BA676',
        '600': '#2C7D59',
        '700': '#1E533B',
        '800': '#0F2A1E',
        '900': '#000000',
      },
      blue: {
        DEFAULT: '#0096FF',
        '50': '#B8E2FF',
        '100': '#A3D9FF',
        '200': '#7AC8FF',
        '300': '#52B8FF',
        '400': '#29A7FF',
        '500': '#0096FF',
        '600': '#0075C7',
        '700': '#00548F',
        '800': '#003357',
        '900': '#00121F',
      },
      red: {
        DEFAULT: '#FF6464',
        '50': '#FFFFFF',
        '100': '#FFFFFF',
        '200': '#FFDEDE',
        '300': '#FFB6B6',
        '400': '#FF8D8D',
        '500': '#FF6464',
        '600': '#FF2C2C',
        '700': '#F30000',
        '800': '#BB0000',
        '900': '#830000',
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
