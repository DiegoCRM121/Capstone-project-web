
const routes = [
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'camera', component: () => import('components/util/DetectionForm.vue')}
    ]
  },

  {
    path: '/',
    component: () => import('pages/Login.vue')
  },

  {
    path: '/detector',
    component: () => import('pages/MainPage.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
