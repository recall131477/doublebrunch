import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  // 前台
  {
    path: '/',
    name: 'front',
    component: () => import('../views/frontend/FrontView.vue'),
    children: [
      {
        path: '/',
        name: '首頁',
        component: () => import('../views/frontend/HomeView.vue'),
      },
      {
        path: 'about',
        name: '關於我們',
        component: () => import('../views/frontend/AboutView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
