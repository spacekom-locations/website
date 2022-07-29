<template>
  <v-container
    :class="{ 'pa-0 ma-0': threads.length > 0 }"
    fluid
    :style="threads.length == 0 ? 'max-width: 1080px' : ''"
  >
    <div v-if="loading" class="mt-12">
      <v-progress-linear
        rounded
        :indeterminate="true"
        color="success"
        height="25"
      ></v-progress-linear>
    </div>
    <v-card
      outlined
      class="pa-8 grey--text"
      v-if="threads.length == 0 && loading == false"
    >
      <v-card-title>
        <v-spacer></v-spacer>
        You have no inbox messages
        <v-spacer></v-spacer>
      </v-card-title>
    </v-card>
    <div v-if="threads.length > 0">
      <v-container
        fluid
        class="pos-main fill-height pa-0"
        style="height: calc(100vh - 70px)"
      >
        <v-row class="no-gutters flex-wrap flex-column fill-height">
          <v-col cols="auto" class="grow">
            <v-row class="fill-height pa-0 ma-0">
              <v-col
                cols="3"
                xl="2"
                class="pa-0 ma-0"
                style="border-right: 1px solid #d2d2d2 !important"
              >
                <div class="sticky-top" style="z-index: 2">
                  <v-card
                    class=""
                    height="70px"
                    style="
                      border-bottom: 1px solid #d2d2d2 !important;
                      border-radius: 0;
                    "
                    flat
                  >
                    <v-card-title> threads </v-card-title>
                  </v-card>
                </div>
                <div style="height: calc(100vh - 150px); overflow: auto">
                  <v-list three-line class="pa-0 ma-0">
                    <div
                      v-for="(thread, index) in threads"
                      :key="index"
                      @click="setSelectedThread(thread)"
                    >
                      <v-divider v-if="index > 0"></v-divider>
                      <v-list-item
                        :key="thread.title + index"
                        route
                        :to="{
                          name: 'Messages.Thread',
                          params: {
                            id: thread.id,
                          },
                        }"
                      >
                        <v-list-item-avatar size="65">
                          <user-avatar
                            :size="65"
                            :image="getThreadUser(thread).avatar"
                          />
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title
                            v-html="getThreadUser(thread).name"
                            class="font-weight-bold"
                          ></v-list-item-title>
                          <v-list-item-subtitle>
                            {{ thread.location.title }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </div>
                  </v-list>
                </div>
              </v-col>
              <v-col class="pa-0 ma-0">
                <div>
                  <router-view />
                </div>
              </v-col>
              <v-col
                cols="3"
                xl="2"
                class="pa-0 ma-0"
                style="border-left: 1px solid #d2d2d2 !important"
              >
                <div class="sticky-top" style="z-index: 2">
                  <v-card
                    class=""
                    height="70px"
                    style="
                      border-bottom: 1px solid #d2d2d2 !important;
                      border-radius: 0;
                    "
                    flat
                  >
                    <v-card-title> details </v-card-title>
                  </v-card>
                  <div
                    style="height: calc(100vh - 150px); overflow: auto"
                    class="pa-4"
                  >
                    <location-details :location="location" />
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import { loadThreads } from "@/api/messages/index";
import UserAvatar from "@/components/user/UserAvatar.vue";
import LocationDetails from "@/views/messages/ui/LocationDetails.vue";

export default {
  components: { UserAvatar, LocationDetails },
  data: () => ({
    threads: [],
    selectedThread: {},
    loading: false,
    messages: [],
    msg: null,
  }),
  computed: {
    location() {
      return this.selectedThread.location;
    },
  },
  async created() {
    await this.loadUserThreads();
    if (this.threads.length > 0) {
      this.selectedThread = this.threads[0];
      this.$router.replace({
        name: "Messages.Thread",
        params: {
          id: this.threads[0].id,
        },
      });
    }
  },

  methods: {
    setSelectedThread(thread){
      
      this.selectedThread = thread;
    },
    getThreadUser(thread) {
      if (
        thread.participants[0].user_id == this.$store.getters["User/user"].id
      ) {
        return thread.participants[1].user;
      }
      return thread.participants[0].user;
    },
    async loadUserThreads() {
      this.loading = true;
      const response = await loadThreads();
      this.threads = response.data;
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.message-input-box {
  position: -webkit-sticky !important;
  position: sticky !important;
  bottom: 0 !important;
}
</style>