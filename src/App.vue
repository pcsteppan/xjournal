<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">x journal</router-link>
      <router-link to="/about">about</router-link>
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
@font-face {
  font-family: 'Happy Times';
  src: url('static/fonts/happy-times-at-the-ikob-webfont.woff2') format('woff2'),
       url('static/fonts/happy-times-at-the-ikob-webfont.woff') format('woff');
}

@font-face {
  font-family: 'Happy Times Italic';
  src: url('static/fonts/happy-times-at-the-ikob_italic-webfont.woff2') format('woff2'),
       url('static/fonts/happy-times-at-the-ikob_italic-webfont.woff') format('woff');
}
  @media (min-width: 768px) {
    html{font-size: 16px;}
  }
  @media (min-width: 992px) {
    html{font-size: 20px;}
  }
  @media (min-width: 1200px) {
    html{font-size: 24px;}
  }

*{
  box-sizing: border-box;
  vertical-align: baseline;
}

html, body, div, span, object, iframe, h1, h2, h3, .splash, .error, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video {
  outline: 0;
  padding: 0;
  border: 0;
  margin: 0;
  background: transparent;
}

img {
  max-width: 100%;
  height: auto;
}

#app {
  font-family: 'Happy Times', 'Happy Times Italic', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  position: relative;
  display: grid;
  grid-template-rows: 1.5rem 1fr;
  grid-row-gap: 3rem;
}
#nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

#nav a {
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.5rem;
}

#nav a.router-link-exact-active {
  color: #f32458;
}
</style>
