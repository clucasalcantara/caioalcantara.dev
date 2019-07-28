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
    exact: true,
    component: NotFound
  }
]

export default routes
