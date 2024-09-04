import { createWebHistory, RouterOptions } from 'vue-router';
import { AuthRouterConfig } from './Modules/auth.config';
import Main from '@/presentation/pages/Main.vue';

const config: RouterOptions = {
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: '/auth/login',
      children: [AuthRouterConfig]
    }
  ],
  history: createWebHistory(import.meta.env.BASE_URL)
};

export default config;
