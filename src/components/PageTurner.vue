<template>
  <div class="page-turner">
    <button class="page-turner--left" v-on:click="$emit('turn-left')"></button>
    <button class="page-turner--right" v-on:click="$emit('turn-right')"></button>
  </div>
</template>

<style>
  .page-turner {
    position: absolute;
    width: 100%;
    height: calc(100vh - 5rem);
    z-index:1;
  }
  .page-turner--left, .page-turner--right {
    width: 50%;
    height: 100%;
    float: left;
    opacity: 0%;
    background-color: transparent;
    border: none;
  }
  .page-turner--left {
    cursor: url("../static/left.svg"), auto;
  }
  .page-turner--right {
    cursor: url("../static/right.svg"), auto;
  }
</style>
