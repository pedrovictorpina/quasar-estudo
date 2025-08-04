import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'components', component: () => import('pages/ComponentsPage.vue') },
      { path: 'forms', component: () => import('pages/FormsPage.vue') },
      { path: 'layout', component: () => import('pages/LayoutPage.vue') },
      { path: 'navigation', component: () => import('pages/NavigationPage.vue') },
      { path: 'data-display', component: () => import('pages/DataDisplayPage.vue') },
      { path: 'feedback', component: () => import('pages/FeedbackPage.vue') },
      { path: 'animations', component: () => import('pages/AnimationsPage.vue') },
      { path: 'plugins', component: () => import('pages/PluginsPage.vue') },
      { path: 'utilities', component: () => import('pages/UtilitiesPage.vue') },
      { path: 'icons', component: () => import('pages/IconsPage.vue') },
      { path: 'themes', component: () => import('pages/ThemesPage.vue') },
      { path: 'responsive', component: () => import('pages/ResponsivePage.vue') },
      { path: 'directives', component: () => import('pages/DirectivesPage.vue') },
      { path: 'composables', component: () => import('pages/ComposablesPage.vue') }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
