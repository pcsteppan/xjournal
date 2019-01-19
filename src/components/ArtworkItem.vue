<template>
  <section class="artwork-container w-100">
    <div class="w-100 pr3-ns">
      <div class="artwork-info sans-serif fr w-100 w-auto-l f7 f6-l lh-copy bt bt-0-ns bw2 b--red mb3 black-80 mw5-ns">
        <div class="fl w-45 w-100-ns">
          <span class="bt-ns b--red w-100 dib pl1 bw2">{{artistName}}, {{yearMade}}</span>
          <span class="bt-ns b--red w-100 dib pl1 i">{{artworkTitle}}</span>
        </div>
        <div class="fl w-40 ml3 ml0-ns w-100-ns">
          <span v-if="artworkMeasurements" v-html="artworkMeasurements" class="bt-ns b--red w-100 dib pl1"></span>
          <span class="bt-ns b--red w-100 dib pl1 truncate ws-normal-ns visible-ns">{{artworkDescription}}</span>
        </div>
      </div>
    </div>
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
            'srcset': `${this.baseUrl}images/compressed/400/${image.url} 400w,
              ${this.baseUrl}images/compressed/768/${image.url} 768w,
              ${this.baseUrl}images/compressed/1200/${image.url} 1200w`,
            'sizes': `(min-width: 400px) ${this.intendedImageWidth / 2}vw,
              (min-width: 768px) ${this.intendedImageWidth}vw,
              ${this.intendedImageWidth}vw`
          }
        })
    },
    intendedImageWidth () {
      return 100
    },
    artworkDescription () {
      return this.artwork.description
    },
    artworkMeasurements () {
      return [this.artwork.size.width, this.artwork.size.depth, this.artwork.size.height]
        .filter(x => typeof x !== 'undefined' && x !== 'none')
        .join(
          '<span class="red"> &times; </span>'
        )
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
      switch (this.images.length) {
        case 1:
          return 'mono'
        case 2:
          return 'dyptych'
        default:
          return 'collection'
      }
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
  section.image-container{
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2px;
    max-height: calc(100vh - 4rem - 4rem);
  }

  section.image-container img {
    justify-self: center;
    max-width: 100%;
    grid-column: 1 / span 4;
  }

  @media (min-width: 768px) {
    .artwork-container{
      /* padding: 0 2.5vw; */
      grid-template-columns: 25vw 50vw 25vw;
      width: 100%;
    }

    section.image-container img {
      max-height: calc(100vh - 8rem);
    }

    section.image-container.dyptych img {
      grid-column: 3 / span 2;
      justify-self: start;
      z-index: 2;
    }

    section.image-container.collection img {
      grid-column: 4 / span 1;
      justify-self: start;
      z-index: 2;
    }

    section.image-container.dyptych img:first-child,
    section.image-container.collection img:first-child {
      grid-column: 1 / span 2;
      grid-row: 1 / span 2;
      justify-self: end;
    }

    section.image-container.mono img{
      grid-column: 2 / span 2;
      justify-self: center;
    }
  }
</style>
