import { About, Home, NotFound } from 'pages'

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
    component: NotFound
  }
]

export default routes
