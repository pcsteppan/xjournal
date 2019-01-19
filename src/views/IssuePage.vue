<template>
  <div class="issue-container">
    <PageTurner
      v-if="isArtwork"
      @turn-left="swipeRight"
      @turn-right="swipeLeft"
      />
    <ArtworkItem
      v-if="isArtwork"
      v-touch="touch"
      :artwork="currentArtwork"
      :pageNumber="artworkIndex">
    </ArtworkItem>
    <section v-else id="issue-nav-wrapper">
      <nav id="issue-nav">
        <ul class="lh-copy list">
          <li>
            <router-link class="link gray serif f3 near-black hover-red" to="./1/essay">essay</router-link></li>
          <li>
            <router-link class="link gray serif f3 near-black hover-red" to="./1/1">artwork</router-link>
          </li>
            <router-link class="link gray serif f3 near-black hover-red" to="./1/artists">artists</router-link>
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
        :artwork="previousArtwork"
        :pageNumber="(artworkIndexN-1).toString()">
      </ArtworkItem>
      <ArtworkItem
        :artwork="nextArtwork"
        :pageNumber="(artworkIndexN+1).toString()">
      </ArtworkItem>
    </div>
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

<style>
  #issue-nav-wrapper{
    position: absolute;
    top: 0;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto 1fr;
  }
  #issue-nav{
    grid-area: 2 / 2;
  }
</style>
