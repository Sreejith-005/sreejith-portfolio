/** Design tokens: defined once here + as CSS variables in index.css */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { bg: '#07090F', ink: '#E6EAF2', muted: '#8B93A7', cyan: { DEFAULT: '#22D3EE' }, violet: { DEFAULT: '#8B5CF6' } },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], head: ['"Space Grotesk"', 'Inter', 'sans-serif'] },
      maxWidth: { content: '1200px' },
    },
  },
  plugins: [],
}
