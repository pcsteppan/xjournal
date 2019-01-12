<template>
  <section class="bg-red">
    <ul class="fr ma0 w-75 w-50-ns serif pa0 white ttl">
      <li
        v-for="artistId in artistIds"
        v-bind:key="artistId"
        class="fl lh-copy cb w-100 mt4 bt artist-wrapper"
      >
        <p class="f5 f3-ns fl tl w-40">{{artistName(artistId)}}</p>
        <ul>
          <router-link
            class="fr cr w-50 pl2"
            v-for="artwork in artistsWorks(artistId)"
            v-bind:key="artwork"
            :to="{path:`${artwork.pageNumber}`}"
            tag="li"
          >
            <a class="f6 f5-ns white link">
              <span class="fl w-20 db">{{artwork.yearMade}}</span>
              &nbsp;<span class="fl w-70 db">{{artwork.title}}</span>
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
    }
  }
}
</script>

<style>
@media screen and (min-width: 30em) {
  .col-2-ns {
    columns: 2 auto;
  }
}
.artist-wrapper {
  min-height: 4rem;
}
/* .o > p:nth-child(2) {
    text-decoration: overline;
  } */
</style>
