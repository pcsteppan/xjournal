<template>
  <img :src="arturl"/>
</template>

<script>
export default {
  name: 'ArtworkPage',
  props: {
    artwork: {
      required: true,
      type: String
    }
  },

  data () {
    return {
      baseUrl: process.env.BASE_URL
    }
  },

  computed: {
    arturl () {
      return `${this.baseUrl}images/${this.artwork}.png`
    }
  }
}
</script>

<style>

</style>
