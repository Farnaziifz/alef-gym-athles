import { createWebHistory } from 'vue-router'
import About from '@/presentation/pages/AboutView.vue'
const config = {
    routes: [
        {path:'/about', component : About }
       
    ],
    history: createWebHistory()
}

export default config