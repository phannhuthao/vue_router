import About from "../page/About.vue";
import HomePage from "../page/HomePage.vue";
import {createRouter, createWebHistory} from "vue-router";
import InfoPage from "../page/InfoPage.vue";
import Bt1 from "../Session15_16/bt1.vue";
import Bt2 from "../Session15_16/bt2.vue";
import Bt3 from "../Session15_16/bt3.vue";
import Bt4 from "../Session15_16/bt4.vue";
import Bt5 from "../Session15_16/bt5.vue";
import Bt7 from "../Session15_16/bt7.vue";
import Product from "../page/Product.vue";
import ProductDetail from "../page/ProductDetail.vue";

const routes  = [
    {path: '/about', component: About, name: 'about'},
    {path: '/', component: HomePage, name: 'home'},
    {path: '/info', component: InfoPage, name: 'info'},
    {path: '/bt1', component: Bt1, name: 'bt1'},
    {path: '/contact', component: Bt2, name: 'contact'},
    {path: '/register', component: Bt3, name: 'register'},
    {path: '/login', component: Bt4, name: 'login'},
    {path: '/product', component: Product, name: 'product'},
    {path: '/login', component: Bt4, name: 'login'},
    {path: '/productdetail', component: ProductDetail, name: 'productdetail'},
    { path: '/:catchAll(.*)', component: Bt5 },
    {path: '/bt7', component: Bt7, name: 'bt7'},

]

const router = createRouter( {
    history: createWebHistory(),
    routes
})

export default router;


