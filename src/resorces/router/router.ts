import { createWebHistory } from 'vue-router'
import About from '@/views/AboutView.vue'

const config = {
    routes: [
        {path:'/about', component : About }
       
    ],
    history: createWebHistory()
}

export default config