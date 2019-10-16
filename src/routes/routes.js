/**
 * Import Utils
 */
import { route } from '@/lib/utils'

/**
 * Example from Manual Import
 */
const Home = () => import('@/views/Home.vue')

/**
 * Definitely our routes
 * @returns { Array }
 */
export default [
  // Example of JSON Object Route (Natural)
  {
    path: '*',
    redirect: '/'
  },
  // Example of Route with Redirect
  route('/', { redirect: '/vue' }),
  // Example of Route with Component setted up manually
  route('/vue', { name: 'Home', component: Home }),
  // Example of Route with Component setted up Automatically
  route('/about'),
  // Example of AutoRoute with Property
  route('/about/:id'),
  // On this case, Redirect will delete Route component Object
  route('/test', { redirect: '/about', component: Home }),
  // Example of redirect with Property
  route('/test/:id', { redirect: '/about/:id' })
]
