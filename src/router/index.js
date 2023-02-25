import HomePage from "@/components/pages/HomePage.vue";
import JobResultsPage from "@/components/pages/JobResultsPage.vue";
import JobDetailsPage from "@/components/pages/JobDetailsPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/jobs/results", name: "JobResults", component: JobResultsPage },
  { path: "/jobs/results/:id", name: "JobDetails", component: JobDetailsPage },
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
