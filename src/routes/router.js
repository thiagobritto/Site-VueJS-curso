import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// imports component ...
import Home from '@/pages/Home';
import Portfolio from '@/pages/Portfolio';
import Sobre from '@/pages/Sobre';
import Contato from '@/pages/Contato';

// add routes
const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/sobre', component: Sobre },
    { path: '/contato', component: Contato }
];

// config new instance vue-router
const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;