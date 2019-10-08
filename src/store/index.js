const initialState = {
  config: {
    name: 'caioalcantara',
    github_username: 'clucasalcantara',
    metas: {
      title: 'Caio Alcantara - Software Engineer',
      description: 'Personal blog page and website',
      subtitle: 'Software Engineer',
      canonical: 'https://new.caioalcantara.dev'
    },
    skills: [
      {
        id: 0,
        skill: 'JavaScript',
        level: '99%'
      },
      {
        id: 1,
        skill: 'NodeJS',
        level: '80%'
      },
      {
        id: 2,
        skill: 'Go',
        level: '60%'
      },
      {
        id: 3,
        skill: 'React',
        level: '99%'
      },
      {
        id: 4,
        skill: 'React Native',
        level: '99%'
      },
      {
        id: 5,
        skill: 'Styled Components',
        level: '90%'
      },

      {
        id: 6,
        skill: 'Microservices',
        level: '80%'
      },
      {
        id: 7,
        skill: 'GraphQL',
        level: '75%'
      },
      {
        id: 8,
        skill: 'NoSQL',
        level: '80%'
      },
      {
        id: 9,
        skill: 'DevOps (CI/CD, Docker, Jenkins, Rancher)',
        level: '60%'
      }
    ],
    nav: [
      {
        id: 'home-item',
        text: 'HOME',
        path: '/'
      },
      {
        id: 'about-item',
        text: 'SOBRE MIM',
        path: '/about'
      },
      {
        id: 'projects-item',
        text: 'PROJETOS',
        path: '/projects'
      },
      {
        id: 'posts-item',
        text: 'Posts',
        path: '#'
      },
      {
        id: 'contact-item',
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
      yellow: '#FFF746',
      darkYellow: '#FFEF9B'
    }
  },
  getParticlesConfig: (theme, darkMode) => ({
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
