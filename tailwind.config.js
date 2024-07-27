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
