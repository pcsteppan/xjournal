<template>
  <li class="cb item pl1 h-auto-ns item bt bw1 b--riso-kellygreen bw0-ns f6 f4-ns">
    <span class="ttl fl tr-ns w-50 b riso-kellygreen pr2">{{member.name}}</span>
    <span class="ttl fl w-50 i bt bw0 bw1-l b--riso-kellygreen">{{member.role}}</span>
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
