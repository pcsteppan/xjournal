<template>
  <li class="cb item pl1 h-auto-ns item bt bw1 b--red bw0-ns">
    <span class="ttl fl tr-ns w-50 f6 b red pr2">{{member.name}}</span>
    <span class="ttl fl w-50 f6 i bt bw0 bw1-l b--red">{{member.role}}</span>
  </li>
</template>

<script>
export default {
  props: {
    'member': {
      required: true,
      type: Object
    }
  }
}
</script>

<style>

</style>
