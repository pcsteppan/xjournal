<template>
  <section id="issue-nav-wrapper">
      <router-link class="b pl2 pl4-ns link bw1 b--solid b--riso-red riso-red sans-serif f1 tl" id="issue-1-essay" to="/issue/1/essay">
        essay
      </router-link>
      <router-link class="b pl2 pl4-ns link bw1 b--solid b--riso-red riso-red sans-serif f1 tl bt-0 bb-0" id="issue-1-artworks" to="/issue/1/1">
        artwork
      </router-link>
      <router-link class="b pl2 pl4-ns link bw1 b--solid b--riso-red riso-red sans-serif f1 tl" id="issue-1-artists" to="/issue/1/artists">
        artists
      </router-link>
      <div id="link-wrapper-1" class="flex items-center h-100">
        <p class="tc link f-banner f-banner-l f-banner-m display lh-none riso-red h-100 v-mid w-auto">
          issue 1
        </p>
      </div>
      <router-link class="b pl2 pl4-ns link f1 sans-serif bw1 b--solid riso-fedblue b--riso-fedblue" id="issue-2-essay" to="/issue/2/essay">
        essay
      </router-link>
      <router-link class="b pl2 pl4-ns link f1 sans-serif bw1 b--solid riso-fedblue b--riso-fedblue bt-0 bb-0" id="issue-2-artworks" to="/issue/2/1">
        artwork
      </router-link>
      <router-link class="b pl2 pl4-ns link f1 sans-serif bw1 b--solid riso-fedblue b--riso-fedblue" id="issue-2-artists" to="/issue/2/artists">
        artists
      </router-link>
      <div id="link-wrapper-2" class="flex items-center h-100">
        <p class="tc link f-banner f-banner-l f-banner-m display lh-none riso-fedblue h-100 v-mid w-auto">
          issue 2
        </p>
      </div>
    </section>
</template>

<style>
  #link-wrapper-1{
    background: linear-gradient(90deg, var(--riso-red), rgba(0,0,0,0) 30%);
    grid-area: iss1;
    writing-mode: vertical-lr;
  }
  #link-wrapper-2{
    background: linear-gradient(90deg, var(--riso-fedblue), rgba(0,0,0,0) 30%);
    grid-area: iss2;
    writing-mode: vertical-lr;
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
      "iss2 ppl2";
  }
  @media screen and (min-width: 60rem){
    #link-wrapper-1{
      background: linear-gradient(90deg, var(--riso-red), rgba(0,0,0,0) 30%);
      grid-column-start: 2;
      grid-row: 1/4;
      writing-mode: vertical-lr;
    }
    #link-wrapper-2{
      background: linear-gradient(90deg, var(--riso-fedblue), rgba(0,0,0,0) 30%);
      grid-column-start: 4;
      grid-row: 1/4;
      writing-mode: vertical-lr;
    }
    #issue-1-essay{
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
    }
    #issue-nav-wrapper{
      top: 0;
      display: grid;
      grid-auto-flow: column;
      width: 100%;
      height: 100%;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      /* grid-template-rows: 1fr auto 1fr; */
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-areas:
      "e1     iss1  e2    iss2"
      "work1  iss1  work2 iss2"
      "ppl1   iss1  ppl2  iss2";
    }
  }
</style>
