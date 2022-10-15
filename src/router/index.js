import { createRouter, createWebHistory } from 'vue-router';
import IssuesPage from '../views/IssuesPage.vue';

const routes = [
  {
    path: '/',
    name: 'IssuesPage',
    component: IssuesPage,
  },
  {
    path: '/issue-details/:issueNumber/',
    name: 'IssueDetailsPage',
    component: () => import(/* webpackChunkName: "IssueDetailsPage" */ '../views/IssueDetailsPage.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
