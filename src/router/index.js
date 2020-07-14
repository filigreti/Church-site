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
    path: "/contact-us",
    name: "ContactUS",
    component: () => import("../views/ContactUs.vue"),
  },
  {
    path: "/live",
    name: "live",
    component: () => import("../views/live.vue"),
  },
  {
    path: "/testimonies",
    name: "Testimonies",
    component: () => import("../views/Testimonies.vue"),
  },
  {
    path: "/donations",
    name: "Donations",
    component: () => import("../views/Donations.vue"),
  },
  {
    path: "/media",
    component: () => import("../views/AllMedia.vue"),
    redirect: {
      name: "Audios",
    },
    children: [
      {
        path: "audio",
        name: "Audios",
        component: () => import("../components/Audio.vue"),
      },
      {
        path: "videos",
        name: "Videos",
        component: () => import("../components/Videos.vue"),
      },
      {
        path: "articles",
        name: "Articles",
        component: () => import("../components/Articles.vue"),
      },
      {
        path: "books",
        component: () => import("../components/Books.vue"),
        children: [
          {
            path: "",
            name: "Books",
            component: () => import("../components/AllBooks.vue"),
          },
          {
            path: "view-book",
            name: "ViewBook",
            component: () => import("../components/ViewBook.vue"),
          },
          {
            path: "cart",
            name: "Cart",
            component: () => import("../views/Cart.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/bible-school",
    name: "BibleSchool",
    component: () => import("../views/BibleSchool.vue"),
  },
  {
    path: "/auth",
    component: () => import("../components/AuthModal.vue"),
    redirect: {
      name: "Login",
    },
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("../views/Login.vue"),
      },
      {
        path: "register",
        name: "Register",
        component: () => import("../views/Register.vue"),
      },
    ],
  },
  {
    path: "/about-us",
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
