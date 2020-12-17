import Vue from 'vue';
import VueRouter from 'vue-router';
import RedLight from './components/RedLight.vue';
import YellowLight from './components/YellowLight.vue';
import GreenLight from './components/GreenLight.vue';
import { Routes } from './const';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "",
            redirect: Routes.RED
        },
        {
            path: Routes.RED,
            component: RedLight,
        },
        {
            path: Routes.YELLOW,
            component: YellowLight,
        },
        {
            path: Routes.GREEN,
            component: GreenLight,
        }
    ]
});

export default router;