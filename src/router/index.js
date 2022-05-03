import { createRouter, createWebHashHistory } from 'vue-router'
import login from '@/views/login/login'
import home from '@/views/home/home'
import activity from '@/views/home/activity/activity'
import clue from '@/views/home/clue/clue'
import contacts from '@/views/home/contacts/contacts'
import customer from '@/views/home/customer/customer'
import tran from '@/views/home/tran/tran'
import ActivityView from '@/views/home/statistics/activityView'
import ClueView from '@/views/home/statistics/clueView'
import ContactsView from '@/views/home/statistics/contactsView'
import CustomerView from '@/views/home/statistics/customerView'

const routes = [
  {
    path: '/',
    component: login
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/activity',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: home,
    children: [
      {
        path: 'activity',
        name: 'activity',
        component: activity
      },
      {
        path: 'clue',
        name: 'clue',
        component: clue
      },
      {
        path: 'contacts',
        name: 'contacts',
        component: contacts
      },
      {
        path: 'customer',
        name: 'customer',
        component: customer
      },
      {
        path: 'tran',
        name: 'tran',
        component: tran
      },
      {
        path: 'activityView',
        name: 'activityView',
        component: ActivityView
      },
      {
        path: 'clueView',
        name: 'clueView',
        component: ClueView
      },
      {
        path: 'contactsView',
        name: 'contactsView',
        component: ContactsView
      },
      {
        path: 'customerView',
        name: 'customerView',
        component: CustomerView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const tokenSre = localStorage.getItem('token')
  console.log(to.path.indexOf('/home'))
  // 用户要访问后台主页
  if (to.path.indexOf('/home') === 0) {
    if (tokenSre) {
      next()
    } else {
      next('/login')
    }
  } else {
    // 访问的不是主页
    next()
  }
})
export default router
