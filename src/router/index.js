import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TheRecipe from '../views/TheRecipe.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/:recipeName',
      name: 'TheRecipe',
      component: TheRecipe,
    },
  ],
})

export default router
