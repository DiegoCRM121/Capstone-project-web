
const routes = [
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('pages/Login.vue')
  },

  {
    path: '/detector',
    component: () => import('pages/MainPage.vue'),
    children: [
      { path: 'camera', component: () => import('components/util/DetectionCamera.vue')},
      { path: 'image', component: () => import('components/util/DetectionImage.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
