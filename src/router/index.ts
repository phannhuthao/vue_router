import {createRouter, createWebHistory} from "vue-router";
import About from "../page/About.vue";
import HomePage from "../page/HomePage.vue";
import Bt3 from "../Session17_18/Bt3.vue";
import Bt4 from "../Session17_18/Bt4.vue";
import Bt6 from "../Session17_18/Bt6.vue";
// import Admin from "../page/Admin.vue";

// import Admin from "../DemoHackton/Admin.vue";
// import Logo from "../DemoHackton/Logo.vue";
// import Category from "../DemoHackton/Category.vue";
// import Product from "../DemoHackton/Product.vue";

const routes  = [

    // {
    //     path: '/admin',
    //     component: Admin,
    //     name: 'admin',
    //     children: [
    //         {path: 'category', component: Category, name: 'admin-category'},
    //         {path: 'logo', component: Logo, name: 'admin-logo'},
    //         {path: 'product', component: Product, name: 'admin-product'},
    //
    //     ]
    // },

    // {path: '/admin', component: Admin, name:'admin'},

    {path: '/', component: About, name: 'about'},
    {path: '/home', component: HomePage, name: 'home'},

    {path: '/bt3', component: Bt3, name: 'bt3'},
    {path: '/bt4', component: Bt4, name: 'bt4'},
    {path: '/bt6', component: Bt6, name: 'bt6'},


]

const router = createRouter( {
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;


