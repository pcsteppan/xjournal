<template>
  <section class="container">
    <p class="artworkInfo">
    {{artistName}}, {{yearMade}}<br/>
    <span class="italic">{{artworkTitle}}</span>
    </p>
    <img
      v-for="(data, key) in imagesrcsandsrcsets"
      :src="data.src"
      :srcset="data.srcset"
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
    imagesrcsandsrcsets () {
      const imageurls = Object.values(this.artwork.images)
        .filter(image => image.type === 'Primary')
        .map(image => {
          return {
            'src': `${this.baseUrl}images/1200/${image.url}`,
            'srcset': `${this.baseUrl}images/400/${image.url} 400w,
              ${this.baseUrl}images/768/${image.url} 768w,
              ${this.baseUrl}images/1200/${image.url} 1200w`
          }
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
    font-family: 'Happy Times';
    padding-top: none;
    line-height: 1.2rem;
    padding-bottom: 2rem;
  }
  .italic{
    font-family: 'Happy Times Italic'
  }
</style>
