module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
   theme: {
    extend: {
      keyframes: {
        'pillow-flip': {
          '0%': { transform: 'rotateY(0deg) scale3d(1, 1, 1)' },
          '50%': { transform: 'rotateY(90deg) scale3d(1.1, 1.1, 1.2)' },
          '100%': { transform: 'rotateY(180deg) scale3d(1, 1, 1)' },
        }
      },
      animation: {
        'pillow-flip': 'pillow-flip 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards'
      }
    }
  },
  plugins: [],
};
