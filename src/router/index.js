import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import UserProfile from "../views/UserProfile";
import Admin from "../views/Admin";
import store from '../store';
import {users} from '../assets/users';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/admin/:userId',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router guides.. run before or after router
router.beforeEach(async  (to,
                          from,
                          next) => {
  const user = store.state.user;

  if (!user) {
    // functions you use to run actions
    //console.log(users);
    await store.dispatch('setUser', users[0]);
  }

  const isAdmin = true;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  // Send them home if condition is met
  if (requiresAdmin && !isAdmin ) next({name: 'Home'})
  else next();
})

export default router
