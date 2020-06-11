<template>
  <section class=" flex-ns justify-center-ns">
    <ul :class="spotColor" class="fr mt0 mt4-ns w-100 w-50-ns sans-serif pa0">
      <li
        v-for="artistId in issueArtistIds"
        :key="artistId"
        :id=artistBookmark(artistId)
        :class="bSpotColor"
        class="fl lh-copy cb w-100 mb4 bt-m bt-l bw1 b--solid br-0 bl-0 bb-0 artist-wrapper"
      >
        <p class="f6 f4-ns fl tl w-50 pr2 pt1 b ttl tr tl-ns">
          <span class="fr fn-ns">{{artistName(artistId)}}</span>
        </p>
        <ul>
          <!-- <a
            class="link fr cr w-50 pl1 f6 f5-ns black-80 b--solid artwork-listing pointer"
            :class="[bSpotColor, hoverSpotColor]"
            v-for="artworkId in artistsWorks(artistId)"
            :key="artworkId"
            :href="artworkLink(artworkId)"
            target="_blank"
          >
            <span class="fl w-70 db pl2 mb2">
              {{artworkTitle(artworkId)}}
            </span>
          </a> -->
          <router-link
            class="link fr cr w-50 pl1 f6 f5-ns black-80 b--solid artwork-listing pointer dib"
            :class="[bSpotColor, hoverSpotColor]"
            v-for="artworkId in artistsWorks(artistId)"
            :key="artworkId"
            :to="{ path: './artwork', hash: artworkPageNumber(artworkId)}"
          >
            <span class="fl w-70 db pl2 mb2">
              {{artworkTitle(artworkId)}}
            </span>
          </router-link>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
import sourceData from '@/data'

export default {
  props: {
    'issueIndex': {
      require: true,
      type: String
    }
  },
  computed: {
    artistIds () {
      return Object.keys(sourceData.artists)
    },
    issueArtistIds () {
      return this.artistIds.filter(x => sourceData.artists[x].issueIds.includes(this.issueIndex))
    },
    artworkIds () {
      return Object.keys(sourceData.artworks)
    },
    issueArtworkIds () {
      return this.artworkIds.filter(x => sourceData.artworks[x].issueId === this.issueIndex)
    },
    spotColor () {
      return sourceData.issues[this.issueIndex].spotColor
    },
    hoverSpotColor () {
      return 'hover-' + this.spotColor
    },
    bSpotColor () {
      return 'b--' + this.spotColor
    }
  },
  methods: {
    artistName (id) {
      return sourceData.artists[id].name
    },
    artistYear (id) {
      return sourceData.artists[id].graduationYear
    },
    artworkPageNumber (id) {
      return sourceData.artworks[id].pageNumber
    },
    artworkYear (id) {
      return sourceData.artworks[id].year
    },
    artworkTitle (id) {
      return sourceData.artworks[id].title
    },
    artworkLink (id) {
      return 'https://xjournal.work/images/compressed/1200/' + sourceData.artworks[id].imageNames[0]
    },
    artistsWorks (id) {
      return this.issueArtworkIds.filter((x) => {
        if (Array.isArray(sourceData.artworks[x].artistId)) {
          return sourceData.artworks[x].artistId.includes(id)
        } else {
          return sourceData.artworks[x].artistId === id
        }
      }) // new Set(Object.values(x.artistIds)).has(id))
    },
    artistBookmark (id) {
      return this.artistName(id).split(' ').join('_')
    },
    scrollFix: function (hashbang) {
      location.href = hashbang
    }
  }
}
</script>

<style>
ul > .artwork-listing{
  border-width: 0.1rem;
  border-right: 0;
  border-bottom: 0;
}

ul > .artwork-listing:first-child{
  border-width: 0.1rem;
  border-right: 0;
  border-bottom: 0;
  border-top: 0;
}
</style>
