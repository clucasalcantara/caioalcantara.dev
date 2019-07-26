const initialState = {
  config: {
    name: 'caioalcantara',
    title: 'caio alcantara',
    subtitle: 'Software Engineer',
    nav: [
      {
        id: 'home-item',
        text: 'HOME',
        path: '/about'
      },
      {
        id: 'about-item',
        text: 'SOBRE MIM',
        path: '/projects'
      },
      {
        id: 'projects-item',
        text: 'PROJETOS',
        path: '#posts'
      },
      {
        id: 'posts-item',
        text: 'Posts',
        path: '#posts'
      },
      {
        id: 'contact-item',
        text: 'Contato',
        path: '/contato'
      }
    ],
    social: [
      {
        id: 'linkedin',
        name: 'LinkedIn',
        path: '#'
      },
      {
        id: 'github',
        name: 'github',
        path: '#'
      },
      {
        id: 'instagram',
        name: 'Instagram',
        path: '#'
      }
    ]
  },
  theme: {
    fontFamily: 'Bio Sans',
    colors: {
      darkBackground: '#26282E',
      lightBackground: '#F5F5FD',
      light: '#F5F5FD',
      dark: '#26282E',
      yellow: '#fff746',
      active: '#F5F5FD',
      inactive: '#26282E'
    }
  },
  getParticles: theme => ({
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          value_area: 1000
        }
      },
      color: {
        value: theme.colors.yellow
      },
      shape: {
        type: 'star',
        stroke: {
          width: 0.07,
          color: theme.colors.light
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
        color: theme.colors.yellow,
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
