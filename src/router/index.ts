import HomePage from "@/components/Pages/HomePage.vue";
import JobResultsPage from "@/components/Pages/JobResultsPage.vue";
import JobDetailsPage from "@/components/Pages/JobDetailsPage.vue";
import TeamsPage from "@/components/Pages/TeamsPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/jobs/results", name: "JobResults", component: JobResultsPage },
  { path: "/jobs/results/:id", name: "JobDetails", component: JobDetailsPage },
  { path: "/teams", name: "Teams", component: TeamsPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
