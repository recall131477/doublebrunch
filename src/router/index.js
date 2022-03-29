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
      {
        path: 'products',
        name: '前台產品列表',
        component: () => import('../views/frontend/ProductsView.vue'),
      },
      {
        path: 'product/:id',
        name: '前台產品細節',
        component: () => import('../views/frontend/ProductView.vue'),
      },
      {
        path: 'search',
        name: '搜尋產品列表',
        component: () => import('../views/frontend/SearchView.vue'),
      },
      {
        path: 'cart',
        name: '購物車',
        component: () => import('../views/frontend/CartView.vue'),
      },
      {
        path: 'checkout',
        name: '填寫資訊',
        component: () => import('../views/frontend/CheckoutView.vue'),
      },
      {
        path: 'checkorder/:id',
        name: '確認訂單',
        component: () => import('../views/frontend/CheckorderView.vue'),
      },
      {
        path: 'complete/:id',
        name: '完成購物',
        component: () => import('../views/frontend/CompleteView.vue'),
      },
      {
        path: 'articles',
        name: '部落格',
        component: () => import('../views/frontend/ArticlesView.vue'),
      },
      {
        path: 'article/:id',
        name: '文章內文',
        component: () => import('../views/frontend/ArticleView.vue'),
      },
    ],
  },
  // 登入
  {
    path: '/login',
    name: '登入',
    component: () => import('../views/frontend/LoginView.vue'),
  },
  // 後台
  {
    path: '/admin',
    name: 'back',
    component: () => import('../views/backend/BackView.vue'),
    children: [
      {
        path: 'products',
        name: '後台產品',
        component: () => import('../views/backend/ProductsView.vue'),
      },
      {
        path: 'order',
        name: '後台訂單',
        component: () => import('../views/backend/OrderView.vue'),
      },
      {
        path: 'coupon',
        name: '後台優惠券',
        component: () => import('../views/backend/CouponView.vue'),
      },
      {
        path: 'articles',
        name: '後台貼文',
        component: () => import('../views/backend/ArticlesView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // 切換網址自動回到頂部
    return {
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
