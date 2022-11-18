import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ArticleView from "../views/articles/ArticleView.vue";
import ArticlesView from "../views/articles/ArticlesView.vue";
import ImpressumView from "../views/ImpressumView.vue";
import DatenschutzView from "../views/DatenschutzView.vue";
import DonateView from "../views/DonateView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/wir",
      name: "about",
      component: AboutView,
    },
    {
      path: "/aktuelles",
      name: "articles",
      component: ArticlesView,
    },
    {
      path: "/artikel/:id",
      name: "article",
      component: ArticleView,
    },
    {
      path: "/impressum",
      name: "impressum",
      component: ImpressumView,
    },
    {
      path: "/datenschutz",
      name: "datenschutz",
      component: DatenschutzView,
    },
    {
      path: "/spenden",
      name: "donations",
      component: DonateView,
    },
  ],
});

export default router;
