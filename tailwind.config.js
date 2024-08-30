/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#1c1c1c',
      },
      borderWidth: {
        '1': '1px'
      },
      height: {
        '120': "30rem"
      },
      width: {
        '120': "30rem"
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to left, rgba(255, 255, 255, 0) 10%, #fb7185 50%, #fff 90%);',
        'infinite-logos-gradient-left': 'linear-gradient(to left,rgba(255,255,255,0), #fff)',
        'infinite-logos-gradient-right': 'linear-gradient(to right,rgba(255,255,255,0), #fff)',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.container-fluid': {
          width: '100%',
          maxWidth: '100%',
          paddingLeft: '5rem',
          paddingRight: '5rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        '.drag-none': {
          '-webkit-user-drag': 'none',
          '-khtml-user-drag': 'none',
          '-moz-user-drag': 'none',
          '-o-user-drag': 'none',
          'user-drag': 'none'
        }
      });
    },

  ],
};
