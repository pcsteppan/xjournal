<template>
  <div>
      <!-- idea: large large type for header -->
      <h1 id="title" class="f1 fessay-ns display lh-display pb1 mb0 pt7-ns">
        {{essayData.title}}
      </h1>
      <span class="db red f6 f5-ns pt0 mt0 mb4">
        <span class="ttl small-caps">{{essayData.author}},</span> &#39;{{essayData.graduationYear}}</span>
      <div id="essay--body-wrapper" class="w-100-ns lh-copy sans-serif f4 f3-ns pb3 near-black">
        <p v-for="(p, i) in this.essayData.paragraphs" :key="i" class="measure pb4">
          {{p}}
        </p>
      </div>
  </div>
</template>

<script>
import sourceData from '@/data'

export default {
  props: {
    issue: {
      required: true,
      type: String
    }
  },
  computed: {
    essayData () {
      console.log(this.issue)
      return sourceData.essays[this.issue]
      //return sourceData.essays["dans"]

    }
  }
}
</script>
