<template>
  <router-link
      :to="{ name: 'Home' }"
      style="text-decoration: none"
    >
      <div class="d-flex align-center">
        <span class="blue--text display-1 font-weight-bold"> Space</span
        ><span class="orange--text display-1 font-weight-black">Kom </span>
      </div>
    </router-link>

    <v-spacer></v-spacer>

    <v-btn route :to="{ name: 'Authenticate', query: { action: 'login' } }" large color="info" text>Login</v-btn>
    <span class="mx-1"></span>
    <v-btn route :to="{ name: 'Authenticate', query: { action: 'signup' } }" large color="info" text outlined>SingUp</v-btn>
    
</template>

<script>
export default {

}
</script>

<style>

</style>