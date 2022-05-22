<template>
  <v-app>
    <main-app-bar />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import MainAppBar from './components/appbar/MainAppBar.vue';


export default {
  name: 'App',

  components: {
    MainAppBar
    
  },

  data: () => ({
    //
  }),
};
</script>
