<template>
  <ul class="ma3 w-100 serif pa0 mla mra">
  <li
    v-for="artistId in artistIds"
    v-bind:key="artistId"
    class="lh-copy cb w-50-ns pt4">
    <p class="f6 f5-ns fl tl w-40">
      {{artistName(artistId)}}
    </p>
    <ul>
      <router-link
        class="fr cr w-60 pl2"
        v-for="artwork in artistsWorks(artistId)"
        v-bind:key="artwork"
        :to="{path:`${artwork.pageNumber}`}"
        tag="li">
        <a class="f6 f5-ns">{{artwork.title}}</a>
      </router-link>
    </ul>
  </li>
  </ul>
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
    }
  }
}
</script>

<style>
  @media screen and (min-width: 30em){
    .col-2-ns {
      columns: 2 auto;
    }
  }
  /* .o > p:nth-child(2) {
    text-decoration: overline;
  } */
</style>
