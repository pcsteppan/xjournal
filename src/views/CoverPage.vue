<template>
  <div id="cover" class="w-100 h-100 flex justify-center items-center">
    <canvas id="myCanvas" resize></canvas>
    <h1 class="serif w-50-ns w-90 f2-ns f3 lh-display near-black pa4">
    &ldquo;&hellip;the dual nature of 'X' urges us to look for visual intrigue where we least expect it, transitioning seamlessly from a senseless cog in a linguistic system to an icon with an independent meaning.&rdquo;
    </h1>
  </div>
</template>

<!-- Load the Paper.js library -->
<script type="text/javascript" src="js/paper.js"></script>
<!-- Load external PaperScript and associate it with myCanvas -->
<script type="text/paperscript" canvas="myCanvas">
  // Create a Paper.js Path to draw a line into it:
  var path = new Path();
  // Give the stroke a color
  path.strokeColor = 'black';
  var start = new Point(100, 100);
  // Move to start and draw a line from there
  path.moveTo(start);
  // Note the plus operator on Point objects.
  // PaperScript does that for us, and much more!
  path.lineTo(start + [ 100, -50 ]);
</script>

<script>

export default {

}
</script>

<style>
  div#cover svg{
    position: absolute;
    top: 4rem;
    width: 100%;
  }
  div#cover h1 {
    /* background: linear-gradient(0deg, rgba(255,20,20,0.9), rgba(255,20,20,0.75)); */
    z-index: 2;
  }
</style>
