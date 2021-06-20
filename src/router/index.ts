import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/user",
    name: "User",
    redirect: "/user/profile",
    component: () =>
      import(/* webpackchunkname: "user" */ "../views/user/User.vue"),
    children: [
      {
        path: "/user/profile",
        name: "Profile",
        component: () =>
          import(/* webpackchunkname: "user" */ "../views/user/Profile.vue"),
      },
      {
        path: "/user/settings",
        name: "Settings",
        component: () =>
          import(/* webpackchunkname: "user" */ "../views/user/Settings.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
