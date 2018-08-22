<template>
  <h1>Issue {{issueNumber}}</h1>
</template>

<script>
export default {
  props: {
    issueNumber: {
      required: true,
      type: String
    }
  }
}
</script>

<style>

</style>
