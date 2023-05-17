import Vue from 'vue'
import Router from 'vue-router'
import IssuesPage from './views/IssuesPage.vue'
import IssuePage from './views/IssuePage.vue'
import ArtistsPage from './views/ArtistsPage.vue'
import SubmissionPage from './views/SubmissionPage.vue'
import DocumentationGuidePage from './views/DocumentationGuidePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/issues'
      // name: 'Cover',
      // component: CoverPage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/issue/3/:view',
      name: 'Issue3Page',
      props: true,
      component: () => import('@/views/Issue3Page.vue')
    },
    {
      path: '/issue/4/:view',
      name: 'Issue4Page',
      props: true,
      component: () => import('@/views/Issue4Page.vue')
    },
    {
      path: '/issue/5/:view',
      name: 'Issue5Page',
      props: true,
      component: () => import('@/views/Issue5Page.vue')
    },
    {
      path: '/issue/:issueIndex/essay',
      name: 'EssayPage',
      props: true,
      component: () => import('@/views/EssayPage.vue')
    },
    {
      path: '/issue/:issueIndex/artists',
      name: 'ArtistsPage',
      props: true,
      component: ArtistsPage
    }, // note that essay and artists must stay above the :issueIndex to preserve routing
    {
      path: '/issues/',
      name: 'IssuesPage',
      props: true,
      component: IssuesPage
    },
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
    },
    {
      path: '/submit/guide',
      name: 'DocumentationGuidePage',
      props: true,
      component: DocumentationGuidePage
    }
  ],
  scrollBehavior: function (to, from, savePosition) {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    
    /* Not sure what all this means, but it causes the app to keep the scroll position
    from previous link, as opposed to starting at the top of each page
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 10 }
      }
    }
    */
  }
})
