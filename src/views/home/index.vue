<template>
  <div>
    <intro />
    <div class="my-6 py-6" style="visibility: hidden;"> 
    -- separator --
    </div>
  </div>
</template>

<script>
import Intro from "./intro.vue";

export default {
  name: "Home",

  components: {
    Intro,
  },
};
</script>