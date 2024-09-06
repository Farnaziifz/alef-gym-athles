import Info from '@/presentation/pages/Info/index.vue';
import BirthPicker from '@/presentation/pages/Info/BirthPicker/index.vue';

export const InfoRouterConfig = {
  name: 'info',
  path: 'info',
  component: Info,
  redirect: '/info/birth',
  children: [
    {
      name: 'birth',
      path: 'birth',
      component: BirthPicker
    }
  ]
};
