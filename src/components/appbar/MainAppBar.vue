<template>
  <v-app-bar app elevate-on-scroll class="px-4" >
    <router-link :to="{ name: 'Home' }" style="text-decoration: none;">
      <div class="d-flex align-center">
        <span class="blue--text display-1 font-weight-bold">
          Space</span><span class="orange--text display-1 font-weight-black">Kom
          
        </span>
      </div>
    </router-link>

    <v-spacer></v-spacer>

    <v-btn route :to="{name: 'Login'}" large color="info" text>Login</v-btn>
    <span class="mx-1"></span>
    <v-btn large color="info" text outlined>SingUp</v-btn>

  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
</style>