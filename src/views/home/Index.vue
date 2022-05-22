<template>
  <div>
    <intro />
    <div class="my-6" style="visibility: hidden;"> 
    -- separator --
    </div>
    <categories />
  </div>
</template>

<script>
import Categories from './Categories.vue';
import Intro from "./Intro.vue";

export default {
  name: "Home",

  components: {
    Intro,
    Categories,
  },
};
</script>