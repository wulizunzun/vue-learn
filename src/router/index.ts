import { createRouter, createWebHistory } from "vue-router";

const files: any = require.context("./modules", false, /\.ts$/);
const routingList: Array<any> = [];
files.keys().forEach((key: any) => {
  routingList.push(...files(key).default);
});


// import login from "./modules/login"
const routes = [
  {
    path: "/",
    name: "Home",
    component: import("../views/About.vue"),
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    ...routes,
    ...routingList
  ],
});

export default router;
