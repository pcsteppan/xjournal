<template>
  <div class="artwork-list-item-container">
    <img
      v-for="(imageurl, key) in imageurls"
      :src="imageurl"
      :key="key"
    />
  </div>
</template>

<script>
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
    imageurls () {
      console.log(Object.values(this.artwork.images))
      let imageurls = Object.values(this.artwork.images)
        .filter(image => image.type === 'Primary')
        .map(image => {
          return `${this.baseUrl}images/${image.url}`
        })
      console.log(imageurls)
      return imageurls
    }
  }
}
</script>

<style>
.artwork-list-item-container{
  max-width: 100vw;
  display: block;
}
  .artwork-list-item-container > img{
    width: 70%;
    display: inline-block;
    padding: 5%;
    padding-bottom: 9em;
  }
</style>
