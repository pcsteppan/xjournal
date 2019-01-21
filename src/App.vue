<template>
  <div id="app">
    <nav id="nav" class="mt1">
      <router-link class="hover-red black-80 link f5 f4-m f4-l serif" exact-active-class="red i" to="/"><span class="red">x</span> journal</router-link>
      <router-link class="hover-red black-80 link f5 f4-m f4-l serif" active-class="red i" to="/about">about</router-link>
      <router-link class="hover-red black-80 link f5 f4-m f4-l serif" active-class="red i" to="/issue/1">issue 1</router-link>
      <router-link class="hover-red black-80 link f5 f4-m f4-l serif" active-class="red i" to="/submit">submit</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
// import tachyons from 'tachyons'

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
  background-color: #ff4136;
}

img {
  max-width: 100%;
  /* height: auto; */
  cursor: zoom-in;
}

#app {
  /* font-family: georgia, 'Happy Times', 'Happy Times Italic', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-rows: 1.5rem 1fr;
  grid-row-gap: 1.5rem;
}
#nav {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
#nav a.router-link-active{
  font-style: italic;
}
div#app nav#nav a:first-child{
  font-style: normal !important;
}
</style>
