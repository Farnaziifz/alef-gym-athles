import { createWebHistory, RouterOptions } from 'vue-router';
import { AuthRouterConfig } from './Modules/auth.config';
import { InfoRouterConfig } from './Modules/Info.config';
import Main from '@/presentation/pages/Main.vue';

const config: RouterOptions = {
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: '/auth/login',
      children: [AuthRouterConfig, InfoRouterConfig]
    }
  ],
  history: createWebHistory(import.meta.env.BASE_URL)
};

export default config;
