<template>
  <section class="artwork-container w-100 pt2-ns">
    <div class="w-100 pr3-l">
      <div
        style="z-index: 12;"
        :class="bSpotColor"
        class="relative artwork-info sans-serif fr w-100 w-60-l f7 f6-l lh-copy bt bt-0-l mb3 black-80 bw3 pt1 pt0-ns bw1-ns">
        <div class="fl w-50 pr2 pl2 pl0-ns w-100-l">
          <router-link
            :class="[hoverSpotColor,bSpotColor]"
            class="bt-l w-100 dib pl1 bw2 di link black-80"
            :to=artistPageBookmark>
            {{artistName}}, {{yearMade}}
          </router-link>
          <span
            :class="bSpotColor"
            class="bt-l w-100 dib pl1 i">
            {{artworkTitle}}
          </span>
        </div>
        <div class="fl w-50 pr2 ml0-l w-100-l">
          <span
            v-if="artworkMeasurements"
            v-html="artworkMeasurements"
            :class="bSpotColor"
            class="bt-l w-100 pl1-ns dib">
          </span>
          <span
            :class="bSpotColor"
            class="bt-l w-100 pl1-ns dib truncate ws-normal-ns visible-ns">
            {{artworkDescription}}
          </span>
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
    issueIndex: {
      require: true,
      type: String
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
      return this.artwork.imageNames
    },
    imagesrcsandsrcsets () {
      return this.images
        .map(image => {
          return {
            'srcset': `${this.baseUrl}images/compressed/400/${image} 400w,
              ${this.baseUrl}images/compressed/768/${image} 768w,
              ${this.baseUrl}images/compressed/1200/${image} 1200w`,
            'sizes': `(min-width: 600px) ${this.intendedImageWidth / 2}vw,
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
      return this.artwork.size && this.artwork.size !== 'none' ? this.artwork.size
        .split('x')
        .join(
          '<span class="' + this.spotColor + '"> &times; </span>'
        ) : ''
      // return [this.artwork.size.width, this.artwork.size.depth, this.artwork.size.height]
      //   .filter(x => typeof x !== 'undefined' && x !== 'none')
      //   .join(
      //     '<span class="red"> &times; </span>'
      //   )
    },
    artistPageBookmark () {
      return `artists#${this.artistName.split(' ').join('_')}`
    },
    artistName () {
      return sourceData.artists[this.artwork.artistId].name
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
    },
    spotColor () {
      return this.issueIndex ? sourceData.issues[this.issueIndex].spotColor : 'riso-red'
    },
    hoverSpotColor () {
      return 'hover-' + this.spotColor
    },
    bSpotColor () {
      return 'b--' + this.spotColor
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

  @media screen and (min-width: 60em) {
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
      justify-self: start;
    }

    section.image-container.mono img{
      grid-column: 2 / span 3;
      justify-self: start;
    }
  }
</style>
