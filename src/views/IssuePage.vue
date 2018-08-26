<template>
  <div class="container">
    <h1>Issue {{issueNumber}}</h1>
    <ArtworkListItem
      v-for="(value, key) in artworks"
      :artwork="value"
      :key="key">
    </ArtworkListItem>
  </div>
</template>

<script>
import sourceData from '@/data'
import ArtworkListItem from '@/components/ArtworkListItem'

export default {
  components: {
    ArtworkListItem
  },

  props: {
    issueNumber: {
      required: true,
      type: String
    }
  },

  computed: {
    artworks () {
      return Object.values(sourceData.artworks)
    }
  }
}
</script>

<style>

</style>
