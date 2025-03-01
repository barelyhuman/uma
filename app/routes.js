export default [
  {
    path: '/',
    component: () => import('./routes/index.jsx'),
  },
  {
    path: '/changelogs',
    component: () => import('./routes/changelogs.jsx'),
  },
  {
    path: '/blog',
    component: () => import('./routes/blog.jsx'),
  },
  {
    path: '/blog/:slug*',
    component: () => import('./routes/blog-post.jsx'),
  },
  {
    path: '/app',
    component: () => import('./routes/app.jsx'),
  },
  {
    path: '/login',
    component: () => import('./routes/login.jsx'),
  },
  {
    path: '/dashboard',
    component: () => import('./routes/dashboard.jsx'),
  },
  {
    path: '/account',
    component: () => import('./routes/account.jsx'),
  },
]
