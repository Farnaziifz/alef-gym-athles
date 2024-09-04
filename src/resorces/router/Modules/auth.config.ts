import Auth from '@/presentation/pages/Auth/index.vue';
import Login from '@/presentation/pages/Auth/Login/index.vue';
import OTP from '@/presentation/pages/Auth/OTP/index.vue';
export const AuthRouterConfig = {
  name: 'auth',
  path: 'auth',
  component: Auth,
  redirect: '/auth/login',
  children: [
    {
      name: 'Login',
      path: 'login',
      component: Login
    },
    {
      name: 'OTP',
      path: 'otp',
      component: OTP
    }
  ]
};
