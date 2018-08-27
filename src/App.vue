<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">x</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/issue/1">Issue 1</router-link>
    </div>
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

#app {
  font-family: 'Happy Times', 'Happy Times Italic', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1d1d1d;
}
#nav {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}

#nav a {
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #ff2b60;
}
</style>
