import Vue from "vue";
import VueRouter, { RouteConfig }  from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'home',
        component: () => import("@/views/Home.vue")
    },
    {
        path: '/gdp1',
        name: 'gdp1',
        component: () => import("@/views/GdpVisualization1.vue")
    },
    {
        path: '/sunburst',
        name: 'sunburst',
        component: () => import("@/views/SunburstChartView.vue")
    }
]

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});