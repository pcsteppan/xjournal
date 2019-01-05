<template>
  <section class="artwork-container">
    <p class="artwork-info serif">
    {{artistName}}, {{yearMade}}<br/>
    <span class="serif i">{{artworkTitle}}</span>
    </p>
    <section class="image-container" :class="layout">
      <img
        v-for="(data, key) in imagesrcsandsrcsets"
        class="z-2 mh-100"
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
    },
    pageNumber: {
      require: true,
      type: Number
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
            'sizes': `(max-width: 400px) ${this.intendedImageWidth},
              (max-width: 768px) ${this.intendedImageWidth},
              ${this.intendedImageWidth}`
          }
        })
    },
    intendedImageWidth () {
      return '100vw'
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
      return this.images.length === 1 ? 'mono' : 'dyptych'
    }
  }
}
</script>

<style>
  .artwork-container{
    width: 100vw;
    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: auto 1fr;
    position: relative;
    /* height: calc(100vh - 4.5rem); */
  }
  .image-container{
    display: grid;
    grid-auto-rows: auto;
    grid-gap: 10px;
  }
  .artwork-info {
    font-size: 0.75rem;
    /* font-family: 'Happy Times'; */
    line-height: 1rem;
    border-top: 1px solid orangered;
    padding-bottom: 1rem;
  }
  @media (min-width: 768px) {
    .artwork-container{
      padding: 0 2.5vw;
      grid-template-columns: 10vw 1fr 10vw;
      grid-gap: 5vw;
      width: 100%;
    }
    section.image-container.dyptych, section.image-container.mono{
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 2px;
      max-height: calc(100vh - 4rem - 4rem);
    }

    section.image-container > img {
      justify-self: center;
      max-height: 100%;
    }

    section.image-container.dyptych > img {
      grid-column: 3 / span 2;
      justify-self: start;
      z-index: 2;
    }
    section.image-container.dyptych>img:first-child {
      grid-column: 1 / span 2;
      justify-self: end;
    }

    section.image-container.mono > img{
      grid-column: 2 / span 2;
      justify-self: center;
    }
  }
</style>
