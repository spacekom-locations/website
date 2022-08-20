<template>
  <div>
    <message-renter
      :show="showSendMessageDialog"
      :booking="bookingData"
      @close="showSendMessageDialog = false"
    />
    <v-snackbar
      v-model="showSuccessSnackbar"
      color="success"
      top
      center
      multi-line
    >
      {{ successSnackbarMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn dark icon v-bind="attrs" @click="showSuccessSnackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <v-card class="pa-0 mb-12" :style="`border-top: 8px solid ${cardColor}`">
      <v-card-text class="pa-0">
        <v-row>
          <v-col cols="12" md="4">
            <v-card
              flat
              :to="{
                name: 'Listing.Show',
                params: { locationId: location.id },
              }"
              style="border-radius: 0px"
            >
              <v-img
                :aspect-ratio="16 / 9"
                :src="
                  location.images[0] == null
                    ? 'https://giggster.com/images/imgEmpty2.svg'
                    : location.images[0]
                "
              />
              <div class="pa-4">
                <p class="title font-weight-bold">
                  {{ location.title ? location.title : "unTitled" }}
                </p>
                <p class="grey--text">
                  {{ location.city }}, {{ location.state }}
                </p>
              </div>
            </v-card>
          </v-col>
          <v-col>
            <v-row class="pa-4 black--text">
              <v-col>
                <router-link
                  :to="{
                    name: 'UserProfile',
                    params: { id: user.id },
                  }"
                  style="text-decoration: none; color: black"
                >
                  <user-avatar :size="72" :image="user.avatar" />
                </router-link>

                <span
                  class="font-weight-bold mx-4 my2 d-inline-block black--text"
                >
                  <router-link
                    :to="{
                      name: 'UserProfile',
                      params: { id: user.id },
                    }"
                    style="text-decoration: none; color: black"
                  >
                    <p class="title font-weight-bold py-0 my-0 user-name-route">
                      {{ user.name }}
                    </p>
                  </router-link>
                  <p class="caption">made a booking request</p>
                </span>
                <p class="my-4">{{ bookingData.project_name }}</p>
                <v-divider class="my-4"></v-divider>
                <div>
                  <v-row
                    class="py-0 my-2"
                    v-for="(date, index) of bookingData.dates"
                    :key="`date_${index}_${date.day}`"
                  >
                    <v-col class="py-0 my-0">{{
                      getMediumDate(date.day)
                    }}</v-col>
                    <v-col class="py-0 my-0"
                      >{{ date.start }} - {{ date.end }}</v-col
                    >
                  </v-row>
                  <v-row class="py-0 my-2">
                    <v-col class="py-0 my-0"> Number Of Hours </v-col>
                    <v-col class="py-0 my-0"> {{ totalHours }} Hours </v-col>
                  </v-row>
                  <v-row class="py-0 my-2">
                    <v-col class="py-0 my-0">
                      {{
                        bookingData.activity == "PRODUCTION"
                          ? "Cast & crew"
                          : "Attendees"
                      }}
                    </v-col>
                    <v-col class="py-0 my-0">
                      {{ bookingData.crew_size }} people
                    </v-col>
                  </v-row>
                  <v-row class="py-0 my-2">
                    <v-col class="py-0 my-0"> Project type </v-col>
                    <v-col class="py-0 my-0">
                      {{
                        $t(
                          `models.location.activities.${bookingData.activity}.name`
                        )
                      }}
                    </v-col>
                  </v-row>
                  <v-row class="py-0 my-2">
                    <v-col class="py-0 my-0"> Producer / Company </v-col>
                    <v-col class="py-0 my-0">
                      {{ bookingData.company_name }}
                    </v-col>
                  </v-row>
                  <v-row class="py-0 my-2">
                    <v-col class="py-0 my-0"> Price per hour </v-col>
                    <v-col class="py-0 my-0">
                      AED{{
                        getRangeFromName(bookingData.crew_size).prices[
                          bookingData.activity
                        ]
                      }}
                    </v-col>
                  </v-row>
                  <v-row
                    class="py-0 my-2"
                    v-for="(addonFee, index) of bookingData.addons"
                    :key="`addon_fee_${index}_${addonFee.amount}`"
                  >
                    <v-col class="py-0 my-0"> {{ addonFee.name }} </v-col>
                    <v-col class="py-0 my-0">
                      {{
                        'AED' + addonFee.amount.toLocaleString()
                      }}
                    </v-col>
                  </v-row>
                  <v-row
                    class="py-0 my-2"
                    v-for="(customFee, index) of bookingData.custom_fees"
                    :key="`custom_fee_${index}_${customFee.amount}`"
                  >
                    <v-col class="py-0 my-0"> {{ customFee.name }} </v-col>
                    <v-col class="py-0 my-0">
                      {{
                        'AED' + customFee.amount.toLocaleString()
                      }}
                    </v-col>
                  </v-row>
                  <v-row
                    class="py-0 my-2"
                    v-for="(systemFee, index) of bookingData.system_fees"
                    :key="`system_fee_${index}_${systemFee.amount}`"
                  >
                    <v-col class="py-0 my-0"> {{ systemFee.name }} </v-col>
                    <v-col class="py-0 my-0">
                      {{
                        'AED' + systemFee.amount.toLocaleString()
                      }}
                    </v-col>
                  </v-row>
                </div>
                <v-divider
                  class="my-4"
                  style="background-color: black"
                ></v-divider>
                <v-row class="py-0 my-2">
                  <v-col class="py-0 my-0 font-weight-bold">
                    Total price
                  </v-col>
                  <v-col class="py-0 my-0">
                    {{
                      'AED' + (totalPrice - totalSystemFees).toLocaleString()
                    }}
                  </v-col>
                </v-row>
                <v-row class="py-0 my-2" v-if='$store.getters["User/isHost"]'>
                  <v-col class="py-0 my-0 font-weight-bold">
                    Your net payout
                  </v-col>
                  <v-col class="py-0 my-0">
                    {{
                      'AED' +
                      (
                        totalPrice -
                        totalSystemFees -
                        0.15 * (totalPrice - totalSystemFees)
                      ).toLocaleString()
                    }}
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="pa-3 py-4">
        <location-agreement :show="showAgreement" @close="showAgreement = false" />
        <v-btn
          color="secondary"
          
          outlined
          :disabled="declining || approving"
          @click="showAgreement = true"
        >
          <v-icon>mdi-file-outline</v-icon>
          <span class="mx-1"></span>
          <span>View Agreement</span>
        </v-btn>
        <v-btn
          color="primary"
          
          text
          :disabled="declining || approving"
          @click="showMessages"
        >
          <v-icon>mdi-message-outline</v-icon>
          <span class="mx-1"></span>
          <span
            >Contact
            {{ $store.getters["User/isHost"] ? "Renter" : "Host" }}</span
          >
        </v-btn>
        <v-spacer></v-spacer>

          <v-btn
            color="error"
            large
            outlined
            :loading="canceling"
            :disabled="approving"
            @click="cancel"
             v-if="!$store.getters['User/isHost'] && bookingData.status =='PENDING'"
          >
            <v-icon>mdi-cancel</v-icon>
            <span class="mx-1"></span>
            <span>cancel</span>
          </v-btn>
          
        
          <v-btn
            color="error"
            large
            outlined
            :loading="declining"
            :disabled="approving"
            @click="decline"
             v-if="$store.getters['User/isHost'] && bookingData.status =='PENDING'"
          >
            <v-icon>mdi-cancel</v-icon>
            <span class="mx-1"></span>
            <span>Decline</span>
          </v-btn>
          <span class="mx-2"></span>
          <v-btn
            color="success"
            large
            depressed
            :loading="approving"
            :disabled="declining"
            @click="approve"
             v-if="$store.getters['User/isHost'] && bookingData.status =='PENDING'"
          >
            <v-icon>mdi-check</v-icon>
            <span class="mx-1"></span>
            <span>Accept</span>
          </v-btn>

          <v-btn
            color="success"
            large
            depressed
            :loading="completing"
            :disabled="declining"
            @click="complete"
             v-if="$store.getters['User/isHost'] && bookingData.status =='APPROVED'"
          >
            <v-icon>mdi-check</v-icon>
            <span class="mx-1"></span>
            <span>complete</span>
          </v-btn>
        
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import UserAvatar from "@/components/user/UserAvatar.vue";
import Sugar from "sugar";
import api from "@/api";
import MessageRenter from "./MessageRenter.vue";
import LocationAgreement from './LocationAgreement.vue';
export default {
  components: { UserAvatar, MessageRenter, LocationAgreement },
  props: {
    value: {
      required: true,
    },
  },
  data() {
    return {
      bookingData: {},
      approving: false,
      declining: false,
      completing: false,
      canceling: false,
      showSuccessSnackbar: false,
      successSnackbarMessage: "",
      showSendMessageDialog: false,
      showAgreement: false,
    };
  },
  created() {
    this.bookingData = this.value;
  },
  computed: {
    cardColor() {
      switch (this.bookingData.status.toUpperCase()) {
        case "PENDING":
          return "blue";
        case "APPROVED":
          return "#2196f3";
        case "DECLINED":
          return "#f44336";
        case "COMPLETED":
        case "PAID":
          return "green";
        case "CANCELED":
          return "red";
        default:
          return "blue";
      }
    },
    location() {
      return this.bookingData.location;
    },
    user() {
      return this.bookingData.user;
    },
    rentPrice() {
      return (
        this.getRangeFromName(
          this.bookingData.crew_size ? this.bookingData.crew_size : "1 - 5"
        ).prices[this.bookingData.activity] * this.totalHours
      );
    },
    totalPrice() {
      let price = 0;
      price += this.rentPrice;
      price += this.totalSystemFees;
      price += this.totalAddOnsFees;
      return price;
    },
    totalSystemFees() {
      let price = 0;
      for (let fee of this.bookingData.system_fees) {
        price += fee.amount;
      }
      return price;
    },
    totalAddOnsFees() {
      let price = 0;
      for (let fee of this.bookingData.addons) {
        price += fee.amount;
      }

      return price;
    },
    totalHours() {
      let hours = 0;
      for (let day of this.bookingData.dates) {
        hours += this.diffInHours(day.start, day.end);
      }
      return hours;
    },
    systemFees() {
      const fees = [
        {
          id: "PROCESSING_FEES",
          name: "Processing Fees",
          amount: 250,
          currency_code: "AED",
          type: "fixed", // type may be fixed of percentage
        },
      ];
      return fees;
    },
  },
  methods: {
    async approve() {
      this.approving = true;
      try {
        const response = await api.post(
          `bookings/${this.bookingData.id}/approve`
        );
        this.bookingData.status = "APPROVED";
        this.successSnackbarMessage = response.data.data.messages;
        this.showSuccessSnackbar;
      } catch (error) {
        console.log(error);
      }
      this.approving = false;
    },
    async decline() {
      this.declining = true;
      try {
        const response = await api.post(
          `bookings/${this.bookingData.id}/decline`
        );
        this.bookingData.status = "DECLINED";
        this.successSnackbarMessage = response.data.data.messages;
        this.showSuccessSnackbar;
      } catch (error) {
        console.log(error);
      }
      this.declining = false;
    },
    async complete() {
      this.completing = true;
      try {
        const response = await api.post(
          `bookings/${this.bookingData.id}/complete`
        );
        this.bookingData.status = "COMPLETED";
        this.successSnackbarMessage = response.data.data.messages;
        this.showSuccessSnackbar;
      } catch (error) {
        console.log(error);
      }
      this.completing = false;
    },
    async cancel() {
      this.canceling = true;
      try {
        const response = await api.post(
          `bookings/${this.bookingData.id}/cancel`
        );
        this.bookingData.status = "CANCELED";
        this.successSnackbarMessage = response.data.data.messages;
        this.showSuccessSnackbar;
      } catch (error) {
        console.log(error);
      }
      this.canceling = false;
    },
    showMessages() {
      if (this.bookingData.location.has_active_messages_thread) {
        this.$router.push({
          name: "Messages.Thread",
          params: {
            id: this.bookingData.location.thread.id,
          },
        });
        return;
      }
      this.showSendMessageDialog = true;
    },
    getMediumDate(date) {
      if (!date) return;
      return new Sugar.Date(date).medium();
    },
    diffInHours(startTime, endTime) {
      if (!startTime || !endTime) return 0;
      const startDate = new Sugar.Date(startTime);
      const endDate = new Sugar.Date(endTime);
      if (this.isNextDay(endTime)) {
        endDate.addDays(1);
      }

      return Math.ceil(Math.abs(endDate.raw - startDate.raw) / 36e5);
    },
    getRangeFromName(name) {
      name = name.trim();
      for (let range of this.location.pricing.ranges) {
        if (range.name == name) return range;
      }
      return false;
    },
    isNextDay(time) {
      if (!time) return false;
      switch (time.toString().toLowerCase()) {
        case "01:00 am":
        case "02:00 am":
        case "03:00 am":
        case "04:00 am":
        case "05:00 am":
        case "06:00 am":
          return true;
        default:
          return false;
      }
    },
  },
};
</script>

<style>
</style>