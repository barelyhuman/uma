export default [
  {
    path: '/',
    component: () => import('./routes/index.jsx'),
  },
  {
    path: '/changelogs',
    component: () => import('./routes/changelogs.jsx'),
  },
]
