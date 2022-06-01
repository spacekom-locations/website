<template>
  <v-card flat>
    <v-row>
      <v-col>
        <p class="headline">
          Login Sessions
          <v-progress-circular
            indeterminate
            v-if="loading"
          ></v-progress-circular>
        </p>
        <p class="py-4">
          <v-btn
            color="error"
            x-large
            outlined
            @click="revokeToken('all')"
            :loading="loading"
          >
            <v-icon>mdi-logout</v-icon>
            <span class="mx-2"></span>
            <span> Logout from all devices </span>
          </v-btn>
        </p>
      </v-col>
    </v-row>
    <v-row v-for="token of tokens" :key="`__token__` + token.id">
      <v-col>
        <v-card
          :outlined="!token.isCurrentToken"
          :color="token.isCurrentToken ? 'success lighten-1' : ''"
          :dark="token.isCurrentToken"
          :loading="loading"
        >
          <v-card-title>
            {{ token.device.ip }}
            <v-spacer></v-spacer>
            <v-btn
              @click="revokeToken(token.id)"
              :color="'error'"
              :outlined="!token.isCurrentToken"
              depressed
              :text="!token.isCurrentToken"
              large
              :loading="loading"
            >
              <v-icon>mdi-logout</v-icon>
              <span class="mx-1"></span>
              <span>Logout</span>
            </v-btn>
          </v-card-title>
          <v-card-text class="pa-4">
            <p class="title">
              {{
                token.device.agent.browser.name +
                `  ` +
                token.device.agent.browser.version
              }}
              (<span class="headline">
                {{
                  token.device.agent.os.name +
                  `  ` +
                  token.device.agent.os.version
                }} </span
              >)
            </p>
            <p class="subtitle-1">Created {{ token.create_at }}</p>
            <p class="subtitle-1">Last Activity {{ token.last_used_at }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import AgentParser from "ua-parser-js";
import { getPersonalAccessTokens, logout } from "@/api/users";
import Sugar from "sugar";
export default {
  data: () => ({
    loading: false,
    tokens: [],
  }),
  created() {
    this.loadPersonalAccessTokens();
  },
  methods: {
    async loadPersonalAccessTokens() {
      this.loading = true;
      this.tokens = [];
      const tokensResponse = await getPersonalAccessTokens();
      for (let token of tokensResponse.data.tokens) {
        token.device.agent = AgentParser(token.device.agent);
        token.isCurrentToken =
          token.id ==
          this.$store.getters["User/authorizationToken"].split("|")[0];
        token.create_at = new Sugar.Date(token.created_at).full();
        token.last_used_at = new Sugar.Date(token.last_used_at).full();
        this.tokens.unshift(token);
      }
      this.loading = false;
    },
    async revokeToken(tokens) {
      tokens = tokens.toString().trim().toLowerCase();
      this.loading = true;
      try {
        await logout(tokens);
        if (
          tokens == "all" ||
          tokens == "*" ||
          tokens == "current" ||
          tokens == this.$store.getters["User/authorizationToken"].split("|")[0]
        ) {
          this.$store.dispatch("User/logout");
          this.$router.push({ name: "Home" });
        } else {
          this.loadPersonalAccessTokens();
        }
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
  },
};
</script>

<style scoped>
</style>