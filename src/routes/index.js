import { About, Home, NotFound, Projects } from 'pages'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    exact: true,
    component: About
  },
  {
    path: '/projects',
    exact: true,
    component: Projects
  },
  {
    exact: true,
    component: NotFound
  }
]

export default routes
