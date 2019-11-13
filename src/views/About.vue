<template>
  <section id="about--container" class="sans-serif ma0-ns w-100 h-100 flex flex-column justify-center">
    <div id="about--information" class="">
      <h1 class="serif f3 f3-ns pl1">information</h1>
      <p class="exdent measure-narrow lh-copy f6 pl1">
        <span class="red">x journal</span> is an annual, visual arts publication created in 2017. x is proud to publish, share, and archive the work made by students at knox college. <br/><br/>contact us at <a class="link red" href="mailto: xjournal@knox.edu">xjournal@knox.edu</a>
      </p>
    </div>
    <div id="about--staff" class="">
      <StaffView>
      </StaffView>
    </div>
    <div id="about--legal" class="">
      <h1 class="serif f3 f3-ns">legal</h1>
      <p class="lh-copy measure-narrow f6 exdent">
        <span class="red">x journal</span> is a student-run publication from knox college. all works within are the intellectual property of the contributor and may not be reproduced without the written permission of the creator and journal editorial staff.
      </p>
    </div>
  </section>
</template>

<style>
.exdent {
  text-indent: -4.15em;
}
#about--container {
  display: grid;
  align-items: center;
  grid-row-gap: 2.5rem;
  grid-template-columns: 25% 75%;
  grid-template-rows: auto repeat(3, 25%) auto;
  grid-template-areas: ". ."
  ". information"
  "staff staff"
  ". legal"
  ". .";
}
#about--information {
  grid-area: information;
}
#about--staff {
  grid-area: staff;
}
#about--legal {
  grid-area: legal;
}
@media screen and (min-width: 30em) {
  #about--container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: auto 1fr 1fr 1fr auto; */
    grid-template-areas: "n information"
    "staff staff"
    "n legal";
  }
}
</style>

<script>
import StaffView from '@/components/StaffView.vue'

export default {
  components: {
    StaffView
  }
}
</script>
