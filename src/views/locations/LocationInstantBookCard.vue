<template>
  <v-card outlined class="pa-4" style="border: 1px solid orange">
    <v-card-title>
      <span class="font-weight-black">$50</span>/hr
      <v-spacer></v-spacer>
      <v-icon>mdi-timer-outline</v-icon>
      <span class="mx-2">2 hr minimum</span>
    </v-card-title>
    <v-card-actions>
      <v-datetime-picker outlined label="Start date" v-model="startDate">
        <template slot="dateIcon">
          <v-icon>mdi-calendar</v-icon>
        </template>
        <template slot="timeIcon">
          <v-icon>mdi-clock-outline</v-icon>
        </template>
      </v-datetime-picker>
      <v-spacer></v-spacer>
      <v-datetime-picker label="End date" v-model="endDate" />
    </v-card-actions>
    <v-card-text>
      <v-autocomplete
        v-model="eventCategory"
        :items="['Production', 'Event', 'Meeting']"
        label="Event"
        clearable
      ></v-autocomplete>

      <v-btn class="mt-3" depressed color="orange" dark x-large block>Instant Book</v-btn>
    </v-card-text>
    <v-divider
      class="my-4"
      style="background-color: orange"
      color="orange"
    ></v-divider>
    <v-card-text>
      <v-row class="my-2">
        <v-col sm="2">
          <v-avatar size="72">
            <img
              src="https://static.giggster.com/images/user/0ab46399-86f3-4302-a82a-daa10284dd5f/0cea5bd5-4512-4071-9819-834f18ef046b/avatar_142.jpeg"
              alt="John"
            />
          </v-avatar>
          <br>
        </v-col>
        <v-col>
            <p class="font-weight-bold">John Doe</p>
            <v-chip color="orange" small dark>SUPERHOST</v-chip>
        </v-col>
      </v-row>

      <v-btn color="success" x-large outlined block>
        <v-icon>mdi-message-outline</v-icon>
        <span class="mx-2"></span>
        <span>Message Host</span>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    startDate: "",
    endDate: "",
  }),
};
</script>

<style>
</style>