const { colors, screens, height, minHeight } = require('tailwindcss/defaultTheme');

module.exports = {
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      'xxs' : {'min':'75px', 'max': '374px'},
      'xs' : {'min':'375px', 'max':'639px'},
      'sm': {'min':'640px', 'max':'767px'},
      'md': {'min':'768px', 'max':'1023px'},
      '1080': '1920px',
      'lg': {'min': '1024px', 'max': '1079px'},
      'reno': {'min':'1080px', 'max': '1279px'},
      ...screens
    },
    colors: {
      ...colors,
      heading: '#2b2b2b',
      subheading: '#616161',
      skBlue: '#0080F6',
      skBlueInactive: '#B8DDFF',
      lightGray: '#B5B5B5'
    },
    fontFamily: {
      avenir: 'Avenir'
    },
    extend: {
      container: {
        center: true,
        screens: {
          lg: '1024px',
          xl: '1280px',
        },
      },
      width: {
        'height':'100vh'
      },
      height: {
        'content': 'calc(100vh - var(--navbar-height))',
      },
      minHeight: {
        'content': 'calc(100vh - var(--navbar-height))',
      },
      top: {
        'navbar': 'var(--navbar-height))'
      }
    },
  },
  variants: {
    extend: {
      opacity:['disabled'],
      backgroundColor: ['disabled'],
      display: ['hover', 'group-hover']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
