<template>
  <div style="fixed dib z-index:20; background-color=rgba(255,255,255,0.7);" class="page-turner flex w-100 items-center justify-center absolute bottom-1 h-100 ma0 pa0 fixed pt1">
    <div class="w-50 h-100 absolute bottom-0 left-0 hover-red hover-b--red" v-on:click="$emit('turn-left')">
      <div class="page-turner--left bt bw1 w-third w-25-ns ma0 pa0 bg-transparent b--black-80 absolute bottom-0 right-0">
        <svg class="arrow-head" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.24 24.54"><line x1="3.25" y1="13.77" x2="3.25" y2="10.77"/><polygon points="13.19 24.54 15.24 22.34 4.41 12.27 15.24 2.2 13.19 0 0 12.27 13.19 24.54"/></svg>
      </div>
    </div>
    <div class="w-50 h-100 absolute bottom-0 right-0  hover-red hover-b--red" v-on:click="$emit('turn-right')">
      <div class="page-turner--right bt bw1 w-third w-25-ns ma0 pa0 bg-transparent b--black-80 absolute bottom-0 left-0">
        <svg class="arrow-head" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.24 24.54"><title>Asset 3</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><line x1="11.99" y1="10.77" x2="11.99" y2="13.77"/><polygon points="2.05 0 0 2.2 10.84 12.27 0 22.34 2.05 24.54 15.24 12.27 2.05 0"/></g></g></svg>
      </div>
    </div>
  </div>
</template>

<style>
  .page-turner {
    z-index:5;
  }
  .page-turner--left, .page-turner--right {
    border: none;
    border-top: 1px solid;
    fill: currentColor;
  }
  .page-turner--left svg, .page-turner--right svg{
    fill: currentColor;
  }
  .page-turner--left .arrow-head{
    height: 1rem;
    width: 1rem;
    position: absolute;
    left: -0.3rem;
    top: -0.505rem;
  }
  .page-turner--right .arrow-head {
    height: 1rem;
    width: 1rem;
    position: absolute;
    right: -0.3rem;
    top: -0.505rem;
  }
</style>
