import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "post.index",
    component: () =>
      import(/* webpackChunkName: "post.index" */ "@/views/post/IndexPost.vue"),
  },
  {
    path: "/create",
    name: "post.create",
    component: () =>
      import(/* webpackChunkName: "post.create" */ "@/views/post/CreatePost.vue"),
  },
  {
    path: "/edit/:id",
    name: "post.edit",
    component: () =>
      import(/* webpackChunkName: "post.edit" */ "@/views/post/EditPost.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
