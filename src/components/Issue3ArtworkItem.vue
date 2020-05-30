<template>
  <div class="w-100 relative bw1 b--black b--solid br-0 bl-0 bb-0"
  @click="expand">
    <div
      style="z-index: 12;"
      :class="bSpotColor"
      class="black-80 sans-serif cb relative gradientHighlight h-auto h4-ns pt2">
      <!-- Artwork Title -->
      <div class="w-50 fl w-33-ns">
        <span
          :class="bSpotColor"
          class="w-100 dib pl1 pr2 i f6 f4-ns mb2 dib">
          {{artworkTitle}}
        </span>
        <!-- <router-link
          :class="[hoverSpotColor,bSpotColor]"
          class="w-100 dib bw2 di pl1 link black-80 f6 f5-ns"
          :to=artistPageBookmark>
          {{artistName}}
        </router-link> -->
        <span
          class="w-100 pl1 f6 f4-ns dib">
          {{artistName}}
        </span>
      </div>
      <!-- Artist and Media -->
      <div class="w-50 fl w-33-ns">
        <!-- <span
          v-if="artworkMeasurements"
          v-html="artworkMeasurements"
          :class="bSpotColor"
          class="bt-l w-100 pl1-ns dib">
        </span> -->
        <span
          :class="bSpotColor"
          class="w-60 dib f6 f4-ns">
          {{artworkDescription}}
        </span>
        <svg class="absolute right-1" style="top: 1em" :class="{'rotate-180' : isExpanded}" width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5114 18.7369L1.41457 0.183044L0.96875 0.814622L14.5116 20L27.6084 1.44617L27.1626 0.814589L14.5114 18.7369Z" fill="#111111"/>
        </svg>
      </div>
      <div class="cb">&nbsp;</div>
    </div>
    <div class="issue3--image-container h-auto db dib-ns w-100" v-if="isExpanded" :class="layout">
      <img
        v-for="(data, key) in imagesrcsandsrcsets"
        class="db di-ns w-100 w-auto-ns"
        :srcset="data.srcset"
        :sizes="data.sizes"
        :key="key"
      />
    </div>
  </div>
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
    },
    preload: {
      type: Boolean
    }
  },

  data () {
    return {
      baseUrl: process.env.BASE_URL,
      isExpanded: false
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
            'sizes': `(min-width: 30em) ${this.intendedImageWidth / 2}vw,
              ${this.intendedImageWidth}vw`
          }
        })
    },
    // alternative for loading lower res first, does not work
    // imagesrcsandsrcsets () {
    //   return this.images
    //     .map(image => {
    //       return {
    //         'srcset': `${this.baseUrl}images/compressed/400/${image} 400w,
    //           ${this.baseUrl}images/compressed/768/${image} 768w` +
    //           (this.preload ? '' : `,${this.baseUrl}images/compressed/1200/${image} 1200w`),
    //         'sizes': `(min-width: 30em) ${this.intendedImageWidth / 2}vw,
    //           ${this.intendedImageWidth}vw`
    //       }
    //     })
    // },
    intendedImageWidth () {
      return 100
    },
    artworkDescription () {
      return this.artwork.description
    },
    // artworkMeasurements () {
    //   return this.artwork.size && this.artwork.size !== 'none' ? this.artwork.size
    //     .split('x')
    //     .join(
    //       '<span class="' + this.spotColor + '"> &times; </span>'
    //     ) : ''
    // },
    artistPageBookmark () {
      return `artists#${this.artistName.split(' ').join('_')}`
    },
    artistName () {
      // fix for gabi's team
      if (Array.isArray(this.artwork.artistId)) {
        const names = this.artwork.artistId.map(function (x) {
          return sourceData.artists[x].name
        })
        return names.join(', ').trim()
      }
      return sourceData.artists[this.artwork.artistId].name
    },
    artworkTitle () {
      return this.artwork.title
    },
    yearMade () {
      return this.artwork.yearMade
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
  },
  methods: {
    expand: function (event) {
      this.isExpanded = !this.isExpanded
      // event.target.scrollIntoView()
      // const delta = (this.isExpanded ? 50 : -50)
      // window.scrollBy({
      //   top: delta,
      //   left: 0,
      //   behavior: 'smooth'
      // })
    }
  }
}
</script>

<style>
@media screen and (min-width: 60rem){
  .gradientHighlight:hover{
    background: linear-gradient(270deg,var(--riso-kellygreen) 0%,rgba(245,245,245,0) 50%);
  }
  .issue3--image-container{
    max-height: 70vh;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
  }
  .issue3--image-container > img{
    max-height: 70vh;
    max-width: 100%;
    vertical-align: top;
    padding-left: 2em;
  }
  .issue3--image-container > img:first-child{
    max-height: 70vh;
    max-width: 100%;
    vertical-align: top;
    padding-left: 0;
  }
}
</style>
