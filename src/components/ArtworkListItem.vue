<template>
  <div class="artwork-list-item-container">
    <p class="artistName">{{artistName}}</p>
    <p class="artworkTitle">{{artworkTitle}}</p>
    <img
      v-for="(imageurl, key) in imageurls"
      :src="imageurl"
      :key="key"
    />
  </div>
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
    }
  }
}
</script>

<style>
  .artwork-list-item-container{
    max-width: 100vw;
    max-height: 100vh;
    display: block;
  }
  .artwork-list-item-container > img{
    width: 100%;
    display: inline-block;
    padding-bottom: 9em;
  }
  .artistName, .artworkTitle {
    text-align: left;
    padding-right: 1em;
  }
  .artworkTitle {
    font-family: 'Happy Times Italic';
    padding-top: none;
    line-height: 0;
  }
</style>
