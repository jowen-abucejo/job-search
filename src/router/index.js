import HomePage from "@/components/pages/HomePage.vue";
import JobResultsPage from "@/components/pages/JobResultsPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/job-results", name: "JobResults", component: JobResultsPage },
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
