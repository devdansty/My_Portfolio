/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0f12',
        'panel': '#0f1720',
        neon: '#00f6ff',
        accent: '#7C5CFF'
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular']
      },
      boxShadow: {
        neon: '0 6px 30px rgba(124,92,255,0.12), 0 0 18px rgba(0,246,255,0.05)'
      }
    }
  },
  plugins: []
}
