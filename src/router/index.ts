import ContactDetail from '@/views/ContactDetail.vue'
import ContactList from '@/views/ContactList.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ContactList',
      component: ContactList,
    },
    {
      path: '/contact/:id',
      name: 'ContactDetail',
      component: ContactDetail,
      props: true,
    },
  ],
})

export default router
