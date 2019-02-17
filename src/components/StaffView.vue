<template>
  <section>
    <div class="w-100 w-50-ns fr">
      <h1 class="serif f3 f3-ns pl1 fl w-50">staff</h1>
      <div class="flex items-center justify-start w-50 dib">
        <button class="f7 dim hover-red link dib bg-white bw0 pa0 ma0 pr2 pointer" style="z-index: 2;" v-on:click="year=2018" v-bind:class="{ red: year===2018 }">2018</button>
        <button class="f7 dim hover-red link dib bg-white bw0 pa0 ma0 pr2 pointer" style="z-index: 2;" v-on:click="year=2019" v-bind:class="{ red: year===2019 }">2019</button>
      </div>
    </div>
    <ul class="pb4 lh-copy list relative w-100">
      <StaffMemberItem :member="member" v-for="member in staff" :key="member.name"/>
    </ul>
  </section>
</template>

<script>
import sourceData from '@/data'
import StaffMemberItem from '@/components/StaffMemberItem.vue'

export default {
  data () {
    return {
      year: 2019
    }
  },

  components: {
    StaffMemberItem
  },

  computed: {
    staff () {
      return sourceData.staff[this.year].staff
    }
  }
}
</script>
