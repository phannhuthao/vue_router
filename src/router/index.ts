import {createRouter, createWebHistory} from "vue-router";

import Admin from "../DemoHackton/Admin.vue";
import Logo from "../DemoHackton/Logo.vue";
import Category from "../DemoHackton/Category.vue";
import Product from "../DemoHackton/Product.vue";

const routes  = [

    {
        path: '/admin',
        component: Admin,
        name: 'admin',
        children: [
            {path: 'category', component: Category, name: 'admin-category'},
            {path: 'logo', component: Logo, name: 'admin-logo'},
            {path: 'product', component: Product, name: 'admin-product'},

        ]
    },



]

const router = createRouter( {
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;


