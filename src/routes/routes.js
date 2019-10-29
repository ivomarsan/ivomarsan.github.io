/**
 * Import Utils
 */
import { route } from '@/lib/utils'

/**
 * Import Template
 */
const DefaultTemplate = () => import('@/templates/Default.vue')

/**
 * Definitely our routes
 * @returns { Array }
 */
export default [
  {
    path: '*',
    redirect: '/'
  },

  route('/', {
    component: DefaultTemplate,
    redirect: {
      name: 'Home'
    },
    children: [route('home'), route('about'), route('/about/:id')]
  }),

  route('/test/:id', { redirect: '/about/:id' })
]
