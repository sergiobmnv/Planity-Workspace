
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'wave-fast': 'wave-animation 15s linear infinite',
        'wave-slow': 'wave-animation 30s linear infinite',
      },
      keyframes: {
        'wave-animation': {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(-2000px)' }, // Ajusta esto según el ancho total de tu ola
        },
      },
    },
  },
  plugins: [],
}