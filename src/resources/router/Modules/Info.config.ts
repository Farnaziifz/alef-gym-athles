import Info from '@/presentation/pages/Info/index.vue';
import BirthPicker from '@/presentation/pages/Info/BirthPicker/index.vue';
import WeightScale from '@/presentation/pages/Info/WeightScale/index.vue'
import HeightScale from '@/presentation/pages/Info/Height/index.vue'


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
    },
    {
      name: 'weight',
      path: 'weight',
      component: WeightScale
    },
    {
      name: 'height',
      path: 'height',
      component: HeightScale
    }
  ]
};
