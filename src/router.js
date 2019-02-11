import Vue from 'vue'
import Router from 'vue-router'
import CoverPage from './views/CoverPage.vue'
import IssuePage from './views/IssuePage.vue'
import ArtistsPage from './views/ArtistsPage.vue'
import SubmissionPage from './views/SubmissionPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Cover',
      component: CoverPage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/issue/:issueIndex/essay',
      name: 'EssayPage',
      component: () => import('@/views/EssayPage.vue')
    },
    {
      path: '/issue/:issueIndex/artists',
      name: 'ArtistsPage',
      props: true,
      component: ArtistsPage
    }, // note that essay and artists must stay above the :issueIndex to preserve routing
    {
      path: '/issue/:issueIndex',
      name: 'IssuePage',
      props: true,
      component: IssuePage
    },
    {
      path: '/issue/:issueIndex/:artworkIndex',
      name: 'IssuePageWithArtwork',
      props: true,
      component: IssuePage
    },
    {
      path: '/submit',
      name: 'SubmissionPage',
      props: true,
      component: SubmissionPage
    }
  ]
})
