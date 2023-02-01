const options = {
    moduleCache: {
        vue: Vue,
    },

    getFile(url) {
        return fetch(url).then((response) =>
            response.ok ? response.text() : Promise.reject(response)
        );
    },

    addStyle(styleStr) {
        const style = document.createElement("style");
        style.textContent = styleStr;
        const ref = document.head.getElementsByTagName("style")[0] || null;
        document.head.insertBefore(style, ref);
    },

    log(type, ...args) {
        console.log(type, ...args);
    },
};

const {
    loadModule,
    version
} = window["vue3-sfc-loader"];


const app = Vue.createApp({});



const routes = [{
        path: '/',
        name: '/',
        component: Vue.defineAsyncComponent(() => loadModule("./Components/Partials/Home.vue", options))

    },
    {
        path: '/home',
        name: 'home',
        component: Vue.defineAsyncComponent(() => loadModule("./Components/Partials/Home.vue", options)),
    },

    {
        path: '/about',
        name: 'about',
        component: Vue.defineAsyncComponent(() => loadModule("./Components/Partials/About.vue", options))
    },
    {
        path: '/services',
        name: 'services',
        component: Vue.defineAsyncComponent(() => loadModule("./Components/Partials/Service.vue", options))
    },
    {
        path: '/news',
        name: 'news',
        component: Vue.defineAsyncComponent(() => loadModule("./Components/Partials/News.vue", options))
    },
    {
        path: '/sports',
        name: 'sports',
        component: Vue.defineAsyncComponent(() => loadModule("./Components/Partials/Sports.vue", options))
    },

    //Post Route
    {
        path: '/addpost',
        name: 'addpost',
        component: Vue.defineAsyncComponent(() => loadModule("./Components/Post/AddPost.vue", options))

    },


]

const router = VueRouter.createRouter({
    //history: VueRouter.createWebHashHistory(), //createWebHashHistory use korle url # thakbe
    history: VueRouter.createWebHistory('/'), //createWebHistory use korleurl # thakbe na
    base: 'vuerouter',
    routes,
})
app.use(router);
app.mount("#app");