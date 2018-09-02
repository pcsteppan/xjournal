<template>
  <div class="container">
    <ArtworkItem
      v-touch="touch"
      :artwork="currentArtwork">
    </ArtworkItem>
  </div>
</template>

<script>
import sourceData from '@/data'
import ArtworkItem from '@/components/ArtworkItem'

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
    ArtworkItem
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

</style>
