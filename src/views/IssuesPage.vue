<template>
  <section id="issue-nav-wrapper">
      <router-link class="b pl2 pl4-ns link bw1 b--solid b--riso-red riso-red sans-serif f1 tl br-0 bb-0" id="issue-1-essay" to="/issue/1/essay">
        essay
      </router-link>
      <router-link class="b pl2 pl4-ns link bw1 b--solid b--riso-red riso-red sans-serif f1 tl br-0 bb-0" id="issue-1-artworks" to="/issue/1/1">
        artwork
      </router-link>
      <router-link class="b pl2 pl4-ns link bw1 b--solid b--riso-red riso-red sans-serif f1 tl bb-0" id="issue-1-artists" to="/issue/1/artists">
        artists
      </router-link>
      <div id="link-wrapper-1" class="flex items-center h-100">
        <p class="tc f-banner f-banner-l f-banner-m display riso-red h-100 center">
          1
        </p>
      </div>
      <router-link class="b pl2 pl4-ns link f1 sans-serif bw1 b--solid riso-fedblue b--riso-fedblue br-0 bb-0" id="issue-2-essay" to="/issue/2/essay">
        essay
      </router-link>
      <router-link class="b pl2 pl4-ns link f1 sans-serif bw1 b--solid riso-fedblue b--riso-fedblue br-0 bb-0" id="issue-2-artworks" to="/issue/2/1">
        artwork
      </router-link>
      <router-link class="b pl2 pl4-ns link f1 sans-serif bw1 b--solid riso-fedblue b--riso-fedblue bb-0" id="issue-2-artists" to="/issue/2/artists">
        artists
      </router-link>
      <div id="link-wrapper-2" class="flex items-center h-100">
        <p class="tc f-banner f-banner-l f-banner-m display riso-fedblue h-100 center">
          2
        </p>
      </div>
      <router-link class="b pl2 pl4-ns link f1 sans-serif bw1 b--solid riso-kellygreen b--riso-kellygreen br-0 bb-0" id="issue-3-poem" to="/issue/3/poem">
        poem
      </router-link>
      <router-link class="b pl2 pl4-ns link f1 sans-serif bw1 b--solid riso-kellygreen b--riso-kellygreen br-0 bb-0" id="issue-3-artworks" to="/issue/3/artwork">
        artwork
      </router-link>
      <router-link class="b pl2 pl4-ns link f1 sans-serif bw1 b--solid riso-kellygreen b--riso-kellygreen bb-0" id="issue-3-artists" to="/issue/3/artists">
        artists
      </router-link>
      <div id="link-wrapper-3" class="flex items-center h-100">
        <p class="tc f-banner f-banner-l f-banner-m display riso-kellygreen h-100 center">
          3
        </p>
      </div>
      <router-link class="b pl2 pl4-ns link f1 sans-serif bw1 b--solid riso-burgundy b--riso-burgundy br-0 bb-0" id="issue-4-essay" to="/issue/4/essay">
        essay
      </router-link>
      <router-link class="b pl2 pl4-ns link f1 sans-serif bw1 b--solid riso-burgundy b--riso-burgundy br-0 bb-0" id="issue-4-artworks" to="/issue/4/artwork">
        artwork
      </router-link>
      <router-link class="b pl2 pl4-ns link f1 sans-serif bw1 b--solid riso-burgundy b--riso-burgundy bb-0" id="issue-4-artists" to="/issue/4/artists">
        artists
      </router-link>
      <div id="link-wrapper-4" class="flex items-center h-100">
        <p class="tc f-banner f-banner-l f-banner-m display riso-burgundy h-100 center">
          4
        </p>
      </div>
      <!-- Change colors of text here                                   V   -->
      <router-link class="b pl2 pl4-ns link f1 sans-serif bw1 b--solid riso-sunflower b--riso-sunflower br-0 bb-0" id="issue-5-essay" to="/issue/5/essay">
        essay
      </router-link>
      <router-link class="b pl2 pl4-ns link f1 sans-serif bw1 b--solid riso-sunflower b--riso-sunflower br-0 bb-0" id="issue-5-artworks" to="/issue/5/artwork">
        artwork
      </router-link>
      <router-link class="b pl2 pl4-ns link f1 sans-serif bw1 b--solid riso-sunflower b--riso-sunflower bb-0" id="issue-5-artists" to="/issue/5/artists">
        artists
      </router-link>
      <div id="link-wrapper-5" class="flex items-center h-100">
        <p class="tc f-banner f-banner-l f-banner-m display riso-sunflower h-100 center">
          5
        </p>
      </div>
    </section>
</template>

<style>
  #link-wrapper-1{
    background: linear-gradient(90deg, var(--riso-red), rgba(0,0,0,0) 30%);
    grid-area: iss1;
  }
  #link-wrapper-2{
    background: linear-gradient(90deg, var(--riso-fedblue), rgba(0,0,0,0) 30%);
    grid-area: iss2;
  }
  #link-wrapper-3{
    background: linear-gradient(90deg, var(--riso-kellygreen), rgba(0,0,0,0) 30%);
    grid-area: iss3;
  }
  #link-wrapper-4{
    background: linear-gradient(90deg, var(--riso-burgundy), rgba(0,0,0,0) 30%);
    grid-area: iss4;
  }
  #link-wrapper-5{
    background: linear-gradient(90deg, var(--riso-sunflower), rgba(0,0,0,0) 30%);
    grid-area: iss5;
  }
  #issue-1-essay{
    grid-area: e1;
  }
  #issue-1-artworks{
    grid-area: work1;
  }
  #issue-1-artists{
    grid-area: ppl1;
  }
  #issue-2-essay{
    grid-area: e2;
  }
  #issue-2-artworks{
    grid-area: work2;
  }
  #issue-2-artists{
    grid-area: ppl2;
  }
  #issue-3-poem{
    grid-area: p3;
  }
  #issue-3-artworks{
    grid-area: work3;
  }
  #issue-3-artists{
    grid-area: ppl3;
  }

  #issue-4-poem{
    grid-area: p4;
  }
  #issue-4-artworks{
    grid-area: work4;
  }
  #issue-4-artists{
    grid-area: ppl4;
  }
  #issue-5-poem{
    grid-area: p5;
  }
  #issue-5-artworks{
    grid-area: work5;
  }
  #issue-5-artists{
    grid-area: ppl5;
  }

  #issue-nav-wrapper{
    top: 0;
    display: grid;
    grid-auto-flow: column;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: 1fr auto 1fr; */
    grid-template-rows: repeat(1fr, 6);
    grid-template-areas:
      "iss1 e1"
      "iss1 work1"
      "iss1 ppl1"
      "iss2 e2"
      "iss2 work2"
      "iss2 ppl2"
      "iss3 p3"
      "iss3 work3"
      "iss3 ppl3"
      "iss4 p4"
      "iss4 work4"
      "iss4 ppl4"
      "iss5 p5"
      "iss5 work5"
      "iss5 ppl5";
  }
  @media screen and (min-width: 60rem){
    #link-wrapper-1{
      background: linear-gradient(90deg, var(--riso-red), rgba(240,240,240,0) 30%);
      /* grid-column-start: 2;
      grid-row: 1/4; */
      /* writing-mode: vertical-lr; */
    }
    #link-wrapper-2{
      background: linear-gradient(90deg, var(--riso-fedblue), rgba(240,240,240,0) 30%);
      /* grid-column-start: 4;
      grid-row: 1/4; */
      /* writing-mode: vertical-lr; */
    }
    #link-wrapper-3{
      background: linear-gradient(90deg, var(--riso-kellygreen), rgba(240,240,240,0) 30%);
      /* grid-column-start: 4;
      grid-row: 1/4; */
      /* writing-mode: vertical-lr; */
    }
    #link-wrapper-4{
      background: linear-gradient(90deg, var(--riso-burgundy), rgba(240,240,240,0) 30%);
      /* grid-column-start: 4;
      grid-row: 1/4; */
      /* writing-mode: vertical-lr; */
    }
    #link-wrapper-5{
      background: linear-gradient(90deg, var(--riso-sunflower), rgba(240,240,240,0) 30%);
      /* grid-column-start: 4;
      grid-row: 1/4; */
      /* writing-mode: vertical-lr; */
    }
    /* #issue-1-essay{
      grid-column: 1;
      grid-row: 1;
    }
    #issue-1-artworks{
      grid-column: 1;
      grid-row: 2;
    }
    #issue-1-artists{
      grid-column: 1;
      grid-row: 3;
    }
    #issue-2-essay{
      grid-column: 3;
      grid-row: 1;
    }
    #issue-2-artworks{
      grid-column: 3;
      grid-row: 2;
    }
    #issue-2-artists{
      grid-column: 3;
      grid-row: 3;
    } */
    #issue-nav-wrapper{
      top: 0;
      display: grid;
      grid-auto-flow: column;
      width: 100%;
      height: 100%;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      /* grid-template-rows: 1fr auto 1fr; */
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-template-areas:
      "iss1   e1    work1 ppl1"
      "iss2   e2    work2 ppl2"
      "iss3   p3    work3 ppl3"
      "iss4   p4    work4 ppl4"
      "iss5   p5    work5 ppl5";
    }
  }
</style>
