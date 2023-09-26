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
        danger: '#dc3545',
        info: '#0d6efd',
        shadows: '#f8f9fa',
        secondary: '#cfd4da',
        'dark-gray': '#6d757d',
        'light-gray': '#a1a6ab',
      },
      strokeWidth: {
        '4': '4px',
      },
      gridTemplateColumns: {
        'fill-14': 'repeat(auto-fill, minmax(14rem, 1fr))',
      },
    },
  },
  plugins: [],
}
export default config
