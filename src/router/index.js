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
        name: 'home',
        component: () => import('../views/frontend/HomeView.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/frontend/AboutView.vue'),
        meta: {
          title: '關於',
        },
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/frontend/ProductsView.vue'),
        meta: {
          title: '美味餐點',
        },
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/frontend/ProductView.vue'),
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('../views/frontend/SearchView.vue'),
        meta: {
          title: '搜尋',
        },
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/frontend/CartView.vue'),
        meta: {
          title: '購物車',
        },
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import('../views/frontend/CheckoutView.vue'),
        meta: {
          title: '訂單資訊',
        },
      },
      {
        path: 'checkorder/:id',
        name: 'checkorder',
        component: () => import('../views/frontend/CheckorderView.vue'),
        meta: {
          title: '確認訂單',
        },
      },
      {
        path: 'complete/:id',
        name: 'complete',
        component: () => import('../views/frontend/CompleteView.vue'),
        meta: {
          title: '完成訂單',
        },
      },
      {
        path: 'articles',
        name: 'articles',
        component: () => import('../views/frontend/ArticlesView.vue'),
        meta: {
          title: '最新消息',
        },
      },
      {
        path: 'article/:id',
        name: 'article',
        component: () => import('../views/frontend/ArticleView.vue'),
      },
    ],
  },
  // 登入
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/frontend/LoginView.vue'),
    meta: {
      title: '登入',
    },
  },
  // 後台
  {
    path: '/admin',
    name: 'back',
    component: () => import('../views/backend/BackView.vue'),
    children: [
      {
        path: 'products',
        name: 'backProducts',
        component: () => import('../views/backend/ProductsView.vue'),
        meta: {
          title: '後台商品',
        },
      },
      {
        path: 'order',
        name: 'backOrder',
        component: () => import('../views/backend/OrderView.vue'),
        meta: {
          title: '後台訂單',
        },
      },
      {
        path: 'coupon',
        name: 'backCoupon',
        component: () => import('../views/backend/CouponView.vue'),
        meta: {
          title: '後台優惠券',
        },
      },
      {
        path: 'articles',
        name: 'backArticles',
        component: () => import('../views/backend/ArticlesView.vue'),
        meta: {
          title: '後台文章',
        },
      },
    ],
  },
  // 404
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/NotFound.vue'),
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
