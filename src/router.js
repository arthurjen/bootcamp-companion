import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Workspaces from './components/Workspaces.vue';
import Advice from './components/Advice.vue';
import Resources from './components/Resources.vue';
import Dashboard from './components/Dashboard.vue';
import AppInfo from './components/AppInfo.vue';
import Us from './components/Us.vue';
import AuthForm from './components/AuthForm.vue';

export default new VueRouter({

  routes: [
    { path: '/', component: Home },
    { path: '/about',
      component: About,
      children: [
        { path: 'app', component: AppInfo },
        { path: 'us', component: Us },
        { path: '', redirect: 'app' }
      ]
    },

    { path: '/workspaces', component: Workspaces },
    { path: '/advice', component: Advice },
    { path: '/resources', component: Resources },
    { path: '/dashboard', component: Dashboard },
    { path: '/auth', component: AuthForm }
  ]
});


