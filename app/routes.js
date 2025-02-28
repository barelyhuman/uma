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
    path: '/blog/*',
    component: () => import('./routes/blog-post.jsx'),
  },
]
