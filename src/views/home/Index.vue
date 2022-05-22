<template>
  <div>
    <intro />
    <div class="my-6" style="visibility: hidden;"> 
    -- separator --
    </div>
    <categories />
    <div class="my-6" style="visibility: hidden;"> 
    -- separator --
    </div>
    <popular-locations />
  </div>
</template>

<script>
import Categories from './Categories.vue';
import Intro from "./Intro.vue";
import PopularLocations from './PopularLocations.vue';

export default {
  name: "Home",

  components: {
    Intro,
    Categories,
    PopularLocations,
  },
};
</script>,
    PopularLocations