<template>
  <section class="artwork-container">
    <p class="artwork-info">
    {{artistName}}, {{yearMade}}<br/>
    <span class="italic">{{artworkTitle}}</span>
    </p>
    <section class="image-container" :class="layout">
      <img
        v-for="(data, key) in imagesrcsandsrcsets"
        :srcset="data.srcset"
        :sizes="data.sizes"
        :key="key"
      />
    </section>
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
    images () {
      return Object.values(this.artwork.images)
    },
    imagesrcsandsrcsets () {
      return this.images
        .filter(image => image.type === 'Primary' || true)
        .map(image => {
          return {
            'srcset': `${this.baseUrl}images/400/${image.url} 400w,
              ${this.baseUrl}images/768/${image.url} 768w,
              ${this.baseUrl}images/1200/${image.url} 1200w`,
            'sizes': `(max-width: 400px) 100vw,
              (max-width: 768px) 100vw,
              100vw`
          }
        })
    },
    artistName () {
      return sourceData.artists[Object.values(this.artwork.artistIds)[0]].name
    },
    artworkTitle () {
      return this.artwork.title
    },
    yearMade () {
      return this.artwork.yearMade
    },
    layout () {
      return 'dyptych'
    }
  }
}
</script>

<style scoped>
  .artwork-container{
    width: 100vw;
    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: auto 1fr;
    position: relative;
    height: calc(100vh - 4.5rem);
  }
  .image-container{
    display: grid;
    grid-auto-rows: auto;
    grid-gap: 10px;
  }
  .artwork-info {
    font-size: 0.75rem;
    font-family: 'Happy Times';
    line-height: 1rem;
    border-top: 1px solid orangered;
    padding-bottom: 1rem;
  }
  .italic{
    font-family: 'Happy Times Italic'
  }
  @media (min-width: 768px) {
    .artwork-container{
      padding: 0 2.5vw;
      grid-template-columns: 10vw 1fr;
      grid-gap: 5vw;
      width: 100%;
    }
    section.image-container.dyptych{
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
    }
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
</style>
