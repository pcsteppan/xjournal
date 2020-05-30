<template>
  <div id="app" class="bg-light-gray">
    <nav id="nav" class="sticky top-0 bg-light-gray">
      <router-link id="nav--btn_issues" class="ttu pt1 link f4 f3-m f3-l black-80 serif lh-solid pl2 pl0-ns" active-class="b" to="/issues/">issues</router-link>
      <router-link class="ttu pt1 link f4 f3-m f3-l black-80 serif lh-solid b--solid bw1 bl-0 bb-0 br-0 b--none-ns pl2 pl0-ns" active-class="b" to="/about">about</router-link>
      <router-link class="ttu pt1 link f4 f3-m f3-l black-80 serif lh-solid b--solid bw1 br-0 bb-0 b--none-ns pl2 pl0-ns" active-class="b" to="/submit">submit</router-link>
      <router-link class="ttu pt1 link f4 f3-m f3-l black-80 serif lh-solid pr1 tr b--solid bw1 b--none-ns dn db-ns pl2 pl0-ns" exact-active-class="b" to="/">x</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      baseUrl: process.env.BASE_URL
    }
  }
}
</script>

<style>
/* @font-face {
  font-family: 'Happy Times';
  src: url('static/fonts/happy-times-at-the-ikob-webfont.woff2') format('woff2'),
       url('static/fonts/happy-times-at-the-ikob-webfont.woff') format('woff');
}

@font-face {
  font-family: 'Happy Times Italic';
  src: url('static/fonts/happy-times-at-the-ikob_italic-webfont.woff2') format('woff2'),
       url('static/fonts/happy-times-at-the-ikob_italic-webfont.woff') format('woff');
} */
  /* @media (min-width: 768px) {
    html{font-size: 12px;}
  }
  @media (min-width: 992px) {
    html{font-size: 14px;}
  }
  @media (min-width: 1200px) {
    html{font-size: 16px;}
  } */
:root{
  --riso-red:        #ff4c65;
  --riso-sunflower:  #ffb511;
  --riso-kellygreen: #67b346;
  --riso-fedblue:    #235ba8;
  --riso-burgundy:   #914e72;
  --main-bg-color:   #eee;
}

*{
  box-sizing: border-box;
  vertical-align: baseline;
}

html{
  overflow-x: hidden;
}

ul, ol {
  list-style: none;
}

html, body, div, span, object, iframe, h1, h2, h3, .splash, .error, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video {
  outline: 0;
  padding: 0;
  border: 0;
  margin: 0;
  background: transparent;
}

::selection {
  color: white;
  background-color: blue;
}

img {
  max-width: 100%;
  /* height: auto; */
  /* cursor: zoom-in; */
}

#app {
  /* font-family: georgia, 'Happy Times', 'Happy Times Italic', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  position: relative;
  display: grid;
  grid-template-rows: 5rem 1fr;
  /* grid-row-gap: 1.5rem; */
}

#nav {
  /* position: relative; */
  z-index: 20;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

#nav--btn_issues{
  grid-column: 1/3;
}

/* div#app nav#nav a:first-child{
  font-style: normal !important;
} */

@media screen and (min-width: 30em){
  #app{
    grid-template-rows: 2.5rem 1fr;
    /* grid-row-gap: 0.5rem; */
  }
  #nav{
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    box-shadow:  0px 1px 6px #ffffff;
  }
  #nav--btn_issues{
    grid-column: inherit;
  }
}
</style>
