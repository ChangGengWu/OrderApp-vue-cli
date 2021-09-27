import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/avaiable.vue"),
  },
  {
    path: "/avaiable",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/avaiable.vue"),
  },
  {
    path: "/groups",
    name: "group",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/group.vue"),
  },
  {
    path: "/history",
    name: "history",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/history.vue"),
  },
  {
    path: "/hostEvent",
    name: "hostEvent",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/hostEvent.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/product.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/signup.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
