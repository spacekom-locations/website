<template>
  <div>
    <h1 class="display-1 font-weight-bold">Confirm and pay</h1>
    <div>
      <div>
        <p class="font-weight-bold">Card information</p>
        <v-text-field
          outlined
          prepend-inner-icon="mdi-credit-card"
          placeholder="1234 1234 1234 1234"
          prefix="   "
          :hide-details="true"
          class="rounded-0"
        />
      </div>
      <v-row class="ma-0 pa-0">
        <v-col class="ma-0 pa-0">
          <v-text-field outlined class="rounded-0" placeholder="MM / YY" />
        </v-col>
        <v-col class="ma-0 pa-0">
          <v-text-field outlined class="rounded-0" placeholder="CVC" />
        </v-col>
      </v-row>
      <div>
        <p class="font-weight-bold">Name on card</p>
        <v-text-field
          outlined
          
          placeholder="Name"
          prefix="   "
          :hide-details="true"
          class="rounded-0"
        />
      </div>
      <div class="my-2">
        <p class="font-weight-bold">country or region</p>
        <v-text-field
          outlined
          
          placeholder="Country"
          prefix="   "
          :hide-details="true"
          class="rounded-0"
        />
        <v-text-field
          outlined
          
          placeholder="Zip"
          prefix="   "
          :hide-details="true"
          class="rounded-0"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>