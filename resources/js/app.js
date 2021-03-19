/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");
require("admin-lte");
import VueRouter from "vue-router";

import Vue from "vue/dist/vue";
window.Vue = Vue;
import { Form, HasError, AlertError } from "vform";
window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

Vue.use(VueRouter);
import moment from "moment";

let routes = [
    {
        path: "/dashboard",
        component: require("./components/dashbaoard.vue").default,
    },
    {
        path: "/profile",
        component: require("./components/profile.vue").default,
    },
    {
        path: "/users",
        component: require("./components/users.vue").default,
    },
];

const router = new VueRouter({
    mode: "history", // short for `routes: routes`
    routes,
});

Vue.filter("propper", (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter("formattedDate", (value) => {
    return moment(value).format("YYYY MM DD");
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router,
}).$mount("#app");
