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

  components: {
    ArtworkItem
  },

  data () {
    return {
      x: false,
      y: false,
      currentArtworkIndex: 0
    }
  },

  computed: {
    artworks () {
      return Object.values(sourceData.artworks)
    },

    currentArtwork () {
      return this.artworks[this.currentArtworkIndex]
    },

    touch () {
      return {
        methods: true
      }
    }
  },

  methods: {
    dblClick () {
      console.log('99')
    },

    swipeLeft () {
      (this.currentArtworkIndex === (this.artworks.length) - 1)
        ? this.currentArtworkIndex = 0
        : this.currentArtworkIndex++
    },

    swipeRight () {
      (this.currentArtworkIndex === 0)
        ? this.currentArtworkIndex = (this.artworks.length) - 1
        : this.currentArtworkIndex--
    }
  }
}
</script>

<style>

</style>
