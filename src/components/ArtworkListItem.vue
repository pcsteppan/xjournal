<template>
  <div class="artwork-list-item-container">
    <img :src="arturl"/>
  </div>
</template>

<script>
export default {
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
  .artwork-list-item-container{
    width: 5em;
  }
</style>
