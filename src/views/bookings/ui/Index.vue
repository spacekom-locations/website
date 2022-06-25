<template>
  <v-container style="max-width: 1080px" class="mt-4">
    <v-row>
      <v-col>
        <v-tabs color="success" :loading="loading" v-model="tab">
          <v-tab
            :href="`#${tab.id}`"
            v-for="(tab, index) of tabs"
            :key="tab.id + index"
          >
            <v-badge :content="0" :value="0" color="green" inline>
              <span class="mx-2">
                {{ tab.name }}
              </span>
            </v-badge>
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="(tab, index) of tabs"
            :value="tab.id"
            :key="tab.id + index"
          >
            <div class="mt-6 pa-4">
              <v-card outlined class="pa-8 grey--text" active-class="">
                <v-card-title>
                  <v-spacer></v-spacer>
                  {{ tab.name }}
                  <v-spacer></v-spacer>
                </v-card-title>
                <v-card-title>
                  <v-spacer></v-spacer>
                  you have no locations here
                  <v-spacer></v-spacer>
                </v-card-title>
              </v-card>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    tab: "Up Coming",
    locations: [],
  }),
  computed: {
    tabs() {
      return [
        { id: "UP_COMING", name: "Up Coming" },
        { id: "COMPLETED", name: "Completed" },
        { id: "CANCELED", name: "Cancelled" },
        { id: "ALL", name: "All" },
      ];
    },
  },
  created() {
    window.alert("API error");
  },
};
</script>

<style>
</style>