<template>
  <div class="issue-container h-100">
    <PageTurner
      v-if="isArtwork"
      @turn-left="swipeRight"
      @turn-right="swipeLeft"
      />
    <ArtworkItem
      v-if="isArtwork"
      v-touch="touch"
      :artwork="currentArtwork"
      :pageNumber="artworkIndexN"
      :issueIndex="issueIndex">
    </ArtworkItem>
    <section v-else id="issue-nav-wrapper">
      <nav id="issue-nav">
        <ul class="lh-copy list">
          <li>
            <router-link :class="hoverSpotColor" class="link gray display f0 near-black pb1 db w-50 bt" to="./essay" append>essay</router-link></li>
          <li>
            <router-link :class="hoverSpotColor" class="link gray display f0 near-black pb1 db w-50 bt" to="./1" append>artwork</router-link>
          </li>
          <li>
            <router-link :class="hoverSpotColor" class="link gray display f0 near-black pb1 db w-50 bt" to="./artists" append> artists</router-link>
          </li>
          <!-- <li>
            <router-link class="link gray serif f3 hover-red" to="./1/colophon">colophon</router-link>
          </li> -->
        </ul>
      </nav>
    </section>
    <!--preloading-->
    <div
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
    </div>
    <p v-if="isArtwork" style="z-index:10;" class="f7 pageNumber fixed bottom-0 mb1 w-100 tc sans-serif b near-black v-mid dib h2">{{artworkIndexN}}</p>
  </div>
</template>

<script>
import sourceData from '@/data'
import ArtworkItem from '@/components/ArtworkItem.vue'
import PageTurner from '@/components/PageTurner.vue'

export default {
  name: 'IssuePage',

  props: {
    artworkIndex: {
      type: [String, Number]
    },
    issueIndex: {
      type: String
    }
  },

  components: {
    ArtworkItem,
    PageTurner
  },

  data () {
    return {
      x: false,
      y: false
    }
  },

  computed: {
    artworks () {
      return Object.values(sourceData.artworks)
        .filter(x => x.issueId === this.issueIndex)
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
      return sourceData.issues[this.issueIndex].spotColor
    },

    hoverSpotColor () {
      return 'hover-' + this.spotColor
    },

    touch () {
      return {
        methods: true
      }
    }
  },

  methods: {
    swipeLeft () {
      this.$router.push({name: 'IssuePageWithArtwork',
        params: {
          artworkIndex: (this.artworkIndexN === (this.artworks.length))
            ? 1
            : (this.artworkIndexN + 1),
          issueIndex: this.issueIndex
        }})
    },

    swipeRight () {
      this.$router.push({name: 'IssuePageWithArtwork',
        params: {
          artworkIndex: (this.artworkIndexN === 1)
            ? this.artworks.length
            : (this.artworkIndexN - 1),
          issueIndex: this.issueIndex
        }})
    }
  }
}
</script>
