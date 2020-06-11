<template>
  <div class="issue-container h-100 w-100">
    <section id="issue3--side-panel" class="fixed dn db-ns w-25-ns h-100 fl-ns b--solid b--black bw1 bb-0 bl-0 bt-0">
      <p class="sans-serif f5 f4-l lh-copy pt3 pl2 measure-narrow" style="min-height: 25vh;">
        welcome to the third issue of x!<br/>
        this is our first online issue! and also the first time we've accepted work from everyone who submitted.<br/><br/>
        thank you to all 30 artists who contributed,
        and special thanks to lily lauver for her poem.<br/><br/>
        <span class="i black-60 f5">odessa and patrick &#10086;<br/>&nbsp;</span>
      </p>
      <router-link class="black-80 link  db b--black-80 bw1 b--solid br-0 bl-0 h3" exact-active-class="b" to="/issue/3/poem">
        <span class="ttu pt3 db serif f3 pl2">poem &#8594;</span>
      </router-link>
      <router-link class="black-80 link f3 db b--black-80 bw1 b--solid br-0 bl-0 bt-0 h3" exact-active-class="b" to="/issue/3/artwork">
        <span class="ttu pt3 db serif f3 pl2">artwork &#8594;</span>
      </router-link>
      <router-link class="black-80 link f3 db b--black-80 h3" exact-active-class="b" to="/issue/3/artists">
        <span class="ttu pt3 db serif f3 pl2">artists &#8594;</span>
      </router-link>
      <div style="background: linear-gradient(var(--riso-kellygreen) 0%, rgba(240,240,240,0) 30%)" class="h4">
        &nbsp;
      </div>
    </section>
    <!-- Add green line here -->
    <section id="issue3--artworks-container" class="w-100 fr-ns w-75-ns" v-if="view.includes('artwork')">
      <Issue3ArtworkItem
        v-for="artwork in artworks"
        :id="artwork.pageNumber"
        :key="artwork.pageNumber"
        :artwork="artwork">
      </Issue3ArtworkItem>
    </section>
    <section id="issue3--artworks-container" class="w-100 fr-ns w-75-ns bg-light-gray" v-else-if="view=='poem'">
      <Issue3Poem />
      <p class="db red f6 f5-ns pt0 mt0 mb4 serif w-100 tc pt5-ns"><span class="ttl small-caps">LILY LAUVER,</span> &#39;21</p>
      <p class="sans-serif f5 pb7 black-60 w-100 tc">Source text from <span class="i">Tike &amp; Tiny in the Tetons</span> by Frances Joyce Farnsworth (University of New Mexico Press, 1954)</p>
    </section>
    <section id="issue3--artworks-container" class="w-100 fr-ns w-75-ns" v-else>
      <ArtistsView :issueIndex='"3"' />
    </section>
    <!--preloading-->
    <!-- <div
      v-if="isArtwork"
      class="dn">
      <ArtworkItem
        v-if="(artworkIndexN-1 > 0)"
        :artwork="previousArtwork"
        :pageNumber="(artworkIndexN-1)"
        :issueIndex="issueIndex"
        :preload=true>
      </ArtworkItem>
      <ArtworkItem
        v-if="(artworkIndexN+1 < artworks.length)"
        :artwork="nextArtwork"
        :pageNumber="(artworkIndexN+1)"
        :issueIndex="issueIndex"
        :preload=true>
      </ArtworkItem>
    </div> -->
    <!-- <p v-if="isArtwork" style="z-index:10;" class="f7 pageNumber fixed bottom-0 mb1 w-100 tc sans-serif b near-black v-mid dib h2">
      {{artworkIndexN}}
    </p> -->
  </div>
</template>

<script>
import sourceData from '@/data'
import Issue3ArtworkItem from '@/components/Issue3ArtworkItem.vue'
import Issue3Poem from '@/components/Issue3Poem.vue'
import ArtistsView from '@/components/ArtistsView.vue'

export default {
  name: 'Issue3Page',

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
    Issue3Poem,
    ArtistsView
  },

  computed: {
    artworks () {
      return Object.values(sourceData.artworks)
        .filter(x => x.issueId === '3') // this.issueIndex
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
      return sourceData.issues['3'].spotColor
    },

    hoverSpotColor () {
      return 'hover-' + this.spotColor
    }
  }
}
</script>

<style>
#issue3--artworks-container > div:first-child{
  border-top: none;
}
</style>
