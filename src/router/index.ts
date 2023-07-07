import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Crafer',
      component: () => import('@/views/welcome/Crafter.vue'),
      meta: {
        title: 'Crafer',
        affix: true
      }
    },
    {
      path: '/Home',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/layout/Home.vue'),
      meta: {
        title: 'Home'
      },
      children: [
        {
          path: '/workbench',
          name: 'workbench',
          component: () => import('@/views/workbench/workbench.vue'),
          meta: {
            title: 'workbench'
          }
        },
        {
          path: '/messages',
          name: 'messages',
          component: () => import('@/views/messages/messages.vue'),
          meta: {
            title: 'messages'
          }
        },
        {
          path: '/market',
          name: 'maarket',
          component: () => import('@/views/market/market.vue'),
          meta: {
            title: 'market'
          }
        },
        {
          path: '/machine',
          name: 'machine',
          component: () => import('@/views/machine/machine.vue'),
          meta: {
            title: 'machine'
          }
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('@/views/profile/profile.vue'),
          meta: {
            title: 'profile'
          }
        },

      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
