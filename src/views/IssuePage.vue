<template>
  <div class="issue-container">
    <PageTurner
      v-if="artworkIndex"
      @turn-left="swipeRight"
      @turn-right="swipeLeft"
      />
    <ArtworkItem
      v-if="artworkIndex"
      v-touch="touch"
      :artwork="currentArtwork"
      :pageNumber="artworkIndex">
    </ArtworkItem>
    <section v-else id="issue-nav-wrapper">
      <nav id="issue-nav">
        <ul>
          <li>
            <router-link to="./1/essay">essay</router-link></li>
          <li>
            <router-link to="./1/1">artwork</router-link>
          </li>
          <li>artists</li>
          <li>info</li>
        </ul>
      </nav>
    </section>
    <!-- <p
      v-if="artworkIndex"
      class="absolute bottom-0 left-50 pa1 w-100 center tc">
      {{artworkIndex}}
    </p> -->
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

    currentArtwork () {
      return this.artworks[this.artworkIndexN - 1]
    },

    artworkIndexN () {
      return Number(this.artworkIndex)
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
  li {
    font-size: 1.5rem;
  }
</style>
