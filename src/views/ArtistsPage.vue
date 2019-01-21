<template>
  <section class=" flex-ns justify-center-ns">
    <ul class="fr mt3 mt4-ns w-100 w-50-ns sans-serif pa0 red">
      <li
        v-for="artistId in artistIds"
        v-bind:key="artistId"
        :id=artistBookmark(artistId)
        class="fl lh-copy cb w-100 mb4 bt-m bt-l bw2 artist-wrapper"
      >
        <p class="f7 f4-ns fl tl w-40 pr3 b ttl tr tl-ns"><span class="fr fn-ns">{{artistName(artistId)}}</span></p>
        <ul>
          <router-link
            class="fr cr w-50-ns w-60 pl1 bt bt-0-m bt-0-l mt2 mt1-ns"
            v-for="artwork in artistsWorks(artistId)"
            v-bind:key="artwork"
            :to="{path:`${artwork.pageNumber}`}"
            tag="li"
          >
            <a class="f7 f6-ns black-70 hover-red link">
              <span class="fl w-30 db">{{artwork.yearMade}}</span>
              <span class="fl w-70 db">{{artwork.title}}</span>
            </a>
          </router-link>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
import sourceData from '@/data'

export default {
  computed: {
    artistIds () {
      return Object.keys(sourceData.artists)
    },
    artworks () {
      return Object.values(sourceData.artworks)
    }
  },
  methods: {
    artistName (id) {
      return sourceData.artists[id].name
    },
    artistYear (id) {
      return sourceData.artists[id].graduationYear
    },
    artistsWorks (id) {
      return this.artworks.filter(x => x.artistIds[id] === id) // new Set(Object.values(x.artistIds)).has(id))
    },
    artistBookmark (id) {
      return this.artistName(id).split(' ').join('_')
    }
  }
}
</script>
