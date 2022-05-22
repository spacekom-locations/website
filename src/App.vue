<template>
  <v-app>
    <main-app-bar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <main-footer />
  </v-app>
</template>

<script>
import MainAppBar from './components/appbar/MainAppBar.vue';
import MainFooter from './components/footer/MainFooter.vue';


export default {
  name: 'App',

  components: {
    MainAppBar,
    MainFooter
    
  },

  data: () => ({
    //
  }),
};
</script>
