<template>
  <div>
    <v-row v-for="i in 1" :key="i">
      <v-col cols="12" sm="1">
        <v-avatar >
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
      </v-col>
      <v-col>
        John Doe
        <v-rating
          color="orange"
          hover
          length="5"
          size="20"
          :value="4"
          dense
          background-color="grey"
          small
          readonly
          style="display: inline-block"
        ></v-rating>
        <p class="mt-3">
          The space was perfect for our needs. As a small crew we were easily
          able to find setups that truly looked like the middle of nowhere.
          Richard was helpful and communicative. It wasn't an issue for us, but
          it is worth noting that that there is some kind of small village
          nearby, some vistas that are spoiled by power lines (if you are
          looking to avoid that), and some debris
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>