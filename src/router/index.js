import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/events",
    component: () => import("../views/Events.vue"),
    children: [
      {
        path: "",
        name: "MainEvent",
        component: () => import("../views/MainEvents.vue"),
      },
      {
        path: ":theme",
        name: "MainTheme",
        component: () => import("../views/Theme.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
