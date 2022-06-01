<template>
  <div>
    <v-container class="mt-4">
      <v-row class="my-3">
        <v-col>
          <h1 class="headline text-center"></h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="4" md="5">
          <div class="sticky-top">
            <v-list outlined rounded class="pa-4">
              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  route
                  :to="item.route"
                >
                  <v-list-item-icon class="mx-4">
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-alert type="warning" border="left" class="mt-4" text rounded>
              Verified profiles are more trusted within our community.
            </v-alert>
          </div>
        </v-col>
        <v-col>
          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      {
        text: "Personal Information",
        icon: "mdi-account-circle-outline",
        route: { name: "Account.Settings.Personal" },
      },
      {
        text: "Additional Information",
        icon: "mdi-account-network",
        route: { name: "Account.Settings.Additional" },
      },
      {
        text: "Login & Security",
        icon: "mdi-lock-outline",
        route: { name: "Account.Settings.Security" },
      },
      {
        text: "Payments",
        icon: "mdi-cash-usd-outline",
        route: { name: "Account.Settings.Payments" },
      },
      {
        text: "Payouts",
        icon: "mdi-credit-card-outline",
        route: { name: "Account.Settings.Payouts" },
      },
      {
        text: "Notifications",
        icon: "mdi-bell-outline",
        route: { name: "Account.Settings.Notifications" },
      },
    ],
  }),
};
</script>

<style>
</style>