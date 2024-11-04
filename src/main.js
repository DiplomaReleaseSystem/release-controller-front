import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomeView from "./views/HomeView.vue";
import SettingsView from "./views/SettingsView.vue";
import SettingsProfileView from "./views/SettingsProfileView.vue";
import UserView from "./views/UserView.vue";
import NotFoundView from "./views/NotFoundView.vue";
import RedmineView from "./views/RedmineView.vue";
import GitlabView from "./views/GitlabView.vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const router = createRouter({
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/redmine",
            name: "redmine",
            component: RedmineView,
        },
        {
            path: "/gitlab",
            name: "gitlab",
            component: GitlabView,
        },
        {
            path: "/settings",
            name: "settings",
            component: SettingsView,
            children: [
                {
                    path: "profile",
                    name: "settings-profile",
                    component: SettingsProfileView,
                    meta: { requiresAuth: true },
                },
            ],
        },
        {
            path: "/user/:id",
            name: "user",
            component: UserView,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "404",
            component: NotFoundView,
        },
    ],
    history: createWebHistory(),
});

const isAuthenticated = false;

router.beforeEach((to) => {
    if (to.meta.requiresAuth && !isAuthenticated) {
        return { name: "home" };
    }
});

const app = createApp(App);
app.use(router);
// Make BootstrapVue available throughout your project
app.mount("#app");
