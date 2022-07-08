<template>
  <div class="issue-container h-100 w-100">
    <section id="issue4--side-panel" class="fixed dn db-ns w-25-ns h-100 fl-ns b--solid b--black bw1 bb-0 bl-0 bt-0">
      <p class="sans-serif f5 f4-l lh-copy pt3 pl2 measure-narrow" style="min-height: 25vh;">
        the fourth issue of x<br/>
        the print edition of issue 4 contains both the work from 2020, and 2022. work from 2020 can be found in the <a href="../../../issue/3/artwork">online issue 3</a><br/><br/>
        thank you to all 28 artists who contributed,
        and special thanks to alyx farris for her essay.<br/><br/>
        <span class="i black-60 f5">The xJournal team &#10086;<br/>&nbsp;</span>
      </p>
      <router-link class="black-80 link  db b--black-80 bw1 b--solid br-0 bl-0 h3" exact-active-class="b" to="/issue/4/essay">
        <span class="ttu pt3 db serif f3 pl2">essay &#8594;</span>
      </router-link>
      <router-link class="black-80 link f3 db b--black-80 bw1 b--solid br-0 bl-0 bt-0 h3" exact-active-class="b" to="/issue/4/artwork">
        <span class="ttu pt3 db serif f3 pl2">artwork &#8594;</span>
      </router-link>
      <router-link class="black-80 link f3 db b--black-80 h3" exact-active-class="b" to="/issue/4/artists">
        <span class="ttu pt3 db serif f3 pl2">artists &#8594;</span>
      </router-link>
      <div style="background: linear-gradient(var(--riso-kellygreen) 0%, rgba(240,240,240,0) 30%)" class="h4">
        &nbsp;
      </div>
    </section>
    <!-- Add green line here -->
    <section id="issue4--artworks-container" class="w-100 fr-ns w-75-ns" v-if="view.includes('artwork')">
      <Issue3ArtworkItem
        v-for="artwork in artworks"
        :id="artwork.pageNumber"
        :key="artwork.pageNumber"
        :artwork="artwork">
      </Issue3ArtworkItem>
    </section>
    <section id="issue4--artworks-container" class="w-100 fr-ns w-75-ns bg-light-gray" v-else-if="view=='essay'">
      <Issue4Essay :issueIndex='"4"'/>
    </section>
    <section id="issue4--artworks-container" class="w-100 fr-ns w-75-ns" v-else>
      <ArtistsView :issueIndex='"4"' />
    </section>
  </div>
</template>

<script>
import sourceData from '@/data'
import Issue3ArtworkItem from '@/components/Issue3ArtworkItem.vue'
import ArtistsView from '@/components/ArtistsView.vue'
import Issue4Essay from '@/views/EssayPage.vue'

export default {
  name: 'Issue4Page',

  props: {
    artworkIndex: {
      type: [String, Number]
    },
    issueIndex: {
      type: String
    },
    view: {
      type: String
    }
  },

  components: {
    Issue3ArtworkItem,
    Issue4Essay,
    ArtistsView
  },

  computed: {
    artworks () {
      return Object.values(sourceData.artworks)
        .filter(x => x.issueId === '4') // this.issueIndex
      // TODO: add issue filtering
    },

    previousArtwork () {
      return this.artworks[this.artworkIndexN - 2]
    },

    currentArtwork () {
      return this.artworks[this.artworkIndexN - 1]
    },

    nextArtwork () {
      return this.artworks[this.artworkIndexN]
    },

    artworkIndexN () {
      return Number(this.artworkIndex)
    },

    isArtwork () {
      return !isNaN(this.artworkIndexN)
    },

    spotColor () {
      return sourceData.issues['4'].spotColor
    },

    hoverSpotColor () {
      return 'hover-' + this.spotColor
    }
  }
}
</script>

<style>
#issue4--artworks-container > div:first-child{
  border-top: none;
}
</style>
