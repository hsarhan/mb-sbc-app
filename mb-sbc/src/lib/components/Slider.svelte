<script>
  import { Carousel, CarouselTransition } from 'flowbite-svelte'
  import { entries } from './imageData/+server.js';

  let images = entries

  let showThumbs=false
  let showCaptions=false
  let slideControls=false
  let showIndicators=false
  let divClass='overflow-hidden relative aspect-square'
  let duration = 5000
</script>

<div class="max-w-4xl">
    <CarouselTransition {divClass} {images} loop {showCaptions} {showThumbs} {slideControls} {showIndicators} transitionType="fade" transitionParams="{{ duration: 1000 }}" {duration} />
</div>