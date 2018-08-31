<template>
  <section class="container">
    <p class="artworkInfo">
    {{artistName}}, {{yearMade}}<br/>
    {{artworkTitle}}
    </p>
    <img
      v-for="(imageurl, key) in imageurls"
      :src="imageurl"
      :key="key"
    />
  </section>
</template>

<script>
import sourceData from '@/data'

export default {
  props: {
    artwork: {
      required: true,
      type: Object
    }
  },

  data () {
    return {
      baseUrl: process.env.BASE_URL
    }
  },

  computed: {
    imageurls () {
      const imageurls = Object.values(this.artwork.images)
        .filter(image => image.type === 'Primary')
        .map(image => {
          return `${this.baseUrl}images/${image.url}`
        })
      return imageurls
    },
    artistName () {
      return sourceData.artists[Object.values(this.artwork.artistIds)[0]].name
    },
    artworkTitle () {
      return this.artwork.title
    },
    yearMade () {
      return this.artwork.yearMade
    }
  }
}
</script>

<style scoped>
  .container{
    max-width: 100vw;
    max-height: 100vh;
    display: block;
  }
  .artworkInfo {
    text-align: left;
    padding-left: 1rem;
    font-size: 1rem;
    font-family: 'Happy Times Italic';
    padding-top: none;
    line-height: 1.2rem;
    padding-bottom: 2rem;
  }
</style>
