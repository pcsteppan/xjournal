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
        .filter(image => image.type === 'Primary')
        .map(image => {
          return {
            'srcset': `${this.baseUrl}images/400/${image.url.replace('.png', '.jpg')} 400w,
              ${this.baseUrl}images/768/${image.url.replace('.png', '.jpg')} 768w,
              ${this.baseUrl}images/1200/${image.url.replace('.png', '.jpg')} 1200w`,
            'sizes': `(max-width: 400px) 400px,
              (max-width: 768px) 768px,
              1200px`
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
    padding: 0 2.5vw;
    display: grid;
    grid-template-columns: 100vw;
    position: relative;
    height: calc(100vh - 1.5rem);
  }
  .image-container{
    display: grid;
    grid-auto-columns: auto;
    grid-auto-rows: auto;
    height: inherit;
  }
  .artwork-info {
    font-size: 0.75rem;
    font-family: 'Happy Times';
    line-height: 1rem;
    padding-bottom: 2rem;
    border-top: 1px solid orangered;
  }
  .italic{
    font-family: 'Happy Times Italic'
  }
  @media (min-width: 768px) {
    .artwork-container{
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
