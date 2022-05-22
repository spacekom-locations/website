<template>
  <v-app-bar app elevate-on-scroll >
    <router-link :to="{ name: 'Home' }">
      <div class="d-flex align-center">
        <v-img
          alt="Wayn Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/wayn-mini-logo.png')"
          transition="scale-transition"
          width="40"
          route
          :to="{ name: 'Home' }"
        />
        <span class="blue--text display-1 font-weight-bold">
          Space</span><span class="orange--text display-1 font-weight-black">Kom
          
        </span>
      </div>
    </router-link>

    <v-spacer></v-spacer>

    <v-btn large color="success" text>Login</v-btn>
    <span class="mx-1"></span>
    <v-btn large color="success" text outlined>SingUp</v-btn>

  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
</style>