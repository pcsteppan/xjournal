<template>
  <div id="essay--wrapper" class="serif pa3 pa0-ns mt0 ma0-ns">
    <div class="fl-ns w-25-ns w-0 ma0 pa0" style="height: 1px;">&nbsp;</div>
    <Essay class="fl-ns w-50-ns pb0-ns"
      id="essay--display-wrapper"
      :issue="issue.essayId"/>
  </div>
</template>

<script>
import Essay from '@/components/Essay.vue'
import sourceData from '@/data'

export default {
  props: {
    issueIndex: {
      require: true,
      type: String
    }
  },
  methods: {
    resetScrollToTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  components: {
    Essay
  },
  computed: {
    issue () {
      return sourceData.issues[this.issueIndex]
    }
  }
}
</script>
