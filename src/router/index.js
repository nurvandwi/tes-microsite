import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import SellingDetail from "../views/SellingDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sellingdetail",
    name: "SellingDetail",
    component: SellingDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
