const initialState = {
  config: {
    name: 'caioalcantara',
    title: 'caio alcantara',
    subtitle: 'Software Engineer',
    nav: [
      {
        id: 'home-itrem',
        text: 'HOME',
        path: '/'
      },
      {
        id: 'about-itrem',
        text: 'SOBRE MIM',
        path: '/about'
      },
      {
        id: 'projects-itrem',
        text: 'PROJETOS',
        path: '#'
      },
      {
        id: 'posts-itrem',
        text: 'Posts',
        path: '#'
      },
      {
        id: 'contact-itrem',
        text: 'Contato',
        path: '#'
      }
    ],
    social: [
      {
        id: 'linkedin',
        name: 'LinkedIn',
        path: 'https://linkedin.com/in/clucasalcantara/'
      },
      {
        id: 'github',
        name: 'github',
        path: 'https://github.com/clucasalcantara'
      },
      {
        id: 'instagram',
        name: 'Instagram',
        path: 'https://instagram.com/clucasalcantara/'
      }
    ]
  },
  theme: {
    fontFamily: 'Bio Sans',
    colors: {
      light: '#F5F5FD',
      dark: '#26282E',
      black: '#151619',
      yellow: '#FFF746'
    }
  },
  getParticles: (theme, darkMode) => ({
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          value_area: 1000
        }
      },
      color: {
        value: darkMode ? theme.colors.yellow : theme.colors.dark
      },
      shape: {
        type: 'star',
        stroke: {
          width: 0.07,
          color: darkMode ? theme.colors.light : theme.colors.dark
        },
        polygon: {
          nb_sides: 2
        }
      },
      opacity: {
        value: 0.3,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 80,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 128.27296486924183,
        color: darkMode ? theme.colors.yellow : theme.colors.dark,
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'none',
        random: true,
        out_mode: 'bounce',
        bounce: false
      }
    },
    retina_detect: true
  })
}

export default initialState
