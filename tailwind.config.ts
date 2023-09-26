import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#cf5345',
        success: '#348755',
        warning: '#f9c000',
        info: '#0d6efd',
        shaows: '#f8f9fa',
        seconary: '#cfd4da',
        'dark-gray': '#6d757d',
        'light-gray': '#a1a6ab',
      },
    },
  },
  plugins: [],
}
export default config
