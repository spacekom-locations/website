<template>
  <div>
    <v-row>
      <v-col>
        <span class="headline font-weight-bold">
          {{
            $t(`models.location.currencies.${location.currency_code}.symbol`)
          }}
          {{
            getRangeFromName(
              bookingDetails.selectedCrewRange
                ? bookingDetails.selectedCrewRange
                : "1 - 5"
            ).prices[
              bookingDetails.selectedActivity
                ? bookingDetails.selectedActivity
                : "EVENT"
            ]
          }} </span
        >/hr
      </v-col>
      <v-col class="text-right">
        {{ location.minimum_rental_hours }}
        hr. minimum
      </v-col>
    </v-row>
    <div
      v-for="(bookingDate, index) of bookingDetails.selectedDates"
      :key="index + bookingDate.day"
    >
      <v-row class="mt-3 pb-0">
        <v-col cols="4" class="ma-0 pa-0">
          <vc-date-picker
            mode="date"
            :min-date="new Date()"
            v-model="bookingDate.day"
            :disabled-dates="blockedDays"
            :available-dates="availableDays"
            dense
            :ref="`day-picker-${index}`"
            :popover="{ visibility: 'none' }"
          >
            <template v-slot="{ inputValue, inputEvents, togglePopover }">
              <v-card-actions class="my-0 py-0">
                <v-text-field
                  placeholder="Date"
                  :value="getMediumDate(inputValue)"
                  v-on="inputEvents"
                  :hide-details="true"
                  readonly
                  dense
                  @click="togglePopover"
                  class="cursor-pointer"
                ></v-text-field>
              </v-card-actions>
            </template>
          </vc-date-picker>
        </v-col>
        <v-col class="ma-0 pa-0">
          <v-card-actions class="my-0 py-0">
            <v-select
              :items="startDateMenu"
              v-model="bookingDate.start"
              placeholder="start date"
              append-icon="mdi-chevron-right"
              :hide-details="true"
              dense
              @change="bookingDate.end = null"
            >
            </v-select>
            <v-select
              :items="endDateMenu(bookingDate.start)"
              v-model="bookingDate.end"
              placeholder="End date"
              :append-icon="
                bookingDetails.selectedDates.length > 1 ? `mdi-close` : ''
              "
              :hide-details="true"
              :disabled="!bookingDate.start && false"
              @click:append="
                bookingDetails.selectedDates.splice(
                  bookingDetails.selectedDates.indexOf(bookingDate),
                  1
                )
              "
              dense
            >
            </v-select>
          </v-card-actions>
        </v-col>
      </v-row>
      <v-row class="mt-0 pt-0" v-if="isNextDay(bookingDate.end)">
        <v-col>
          <div class="caption orange--text">Booking ends the next day</div>
        </v-col>
      </v-row>
    </div>

    <v-row class="mt-3 pt-0">
      <v-col class="ma-0 pa-0">
        <v-card-actions>
          <p class="green--text add-day-button" text @click="addDay">Add Day</p>
          <v-spacer></v-spacer>
          <p class="grey--text">Total hours: {{ totalHours }}</p>
        </v-card-actions>
      </v-col>
    </v-row>
    <v-row
      class="mt-0 pt-0"
      v-if="totalHours > 0 && location.minimum_rental_hours > totalHours"
    >
      <v-col class="my-1 py-0">
        <v-alert
          type="warning"
          color="orange"
          text
          border="left"
          prominent
          dense
          :value="true"
          class="my-0"
        >
          <p>{{ location.minimum_rental_hours }} hr. minimum</p>
          You can't submit a request that is less than the hourly minimum.
        </v-alert>
      </v-col>
    </v-row>
    <v-row class="mt-2 pt-0">
      <v-col class="mb-2 pt-0">
        <v-select
          :items="location.pricing.ranges"
          placeholder="Cast & crew"
          v-model="bookingDetails.selectedCrewRange"
          item-value="name"
          dense
          hide-details
        >
          <template slot="selection" slot-scope="data">
            <!-- HTML that describe how select should render selected items -->
            {{
              bookingDetails.selectedActivity == "PRODUCTION"
                ? "Cast & crew"
                : "Attendees"
            }}
            : {{ data.item.name }} people
          </template>
          <template slot="item" slot-scope="data">
            <!-- HTML that describe how select should render items when the select is open -->
            {{ data.item.name }} people
            <v-spacer></v-spacer>
            {{
              $t(`models.location.currencies.${location.currency_code}.symbol`)
            }}
            {{
              data.item.prices[
                bookingDetails.selectedActivity
                  ? bookingDetails.selectedActivity
                  : "EVENT"
              ]
            }}
            /hr
          </template>
        </v-select>
      </v-col>
    </v-row>
    <v-row class="mt-0 pt-0">
      <v-col class="mb-2 pt-0">
        <v-select
          :items="locationActivities"
          placeholder="Activity Type"
          v-model="bookingDetails.selectedActivity"
          item-value="id"
          dense
          hide-details
        >
          <template slot="selection" slot-scope="data">
            <!-- HTML that describe how select should render selected items -->
            Type: {{ data.item.name }}
          </template>
          <template slot="item" slot-scope="data">
            <!-- HTML that describe how select should render items when the select is open -->
            <div>
              {{ data.item.name }}
              <p class="caption">
                {{ data.item.description }}
              </p>
            </div>
          </template>
        </v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Sugar from "sugar";

export default {
  props: {},
  data() {
    return {};
  },
  created() {},
  computed: {
    bookingDetails: {
      get() {
        return this.$store.getters["Bookings/currentBooking"].bookingDetails;
      },
      set(value) {
        if (
          JSON.stringify(
            this.$store.getters["Bookings/currentBooking"].bookingDetails
          ) != JSON.stringify(value)
        ) {
          console.log("m");
          this.$store.commit("Bookings/setCurrentBooking", {
            location: this.location,
            bookingDetails: value,
          });
        }
      },
    },
    location: {
      get() {
        return this.$store.getters["Bookings/currentBooking"].location;
      },
      set(value) {
        this.$store.commit("Bookings/setCurrentBooking", {
          location: value,
          bookingDetails: this.bookingDetails,
        });
      },
    },
    crewSelectMenu() {
      let menu = [];
      for (let range of this.location.pricing.ranges) {
        menu.push(range);
      }
      return menu;
    },
    locationActivities() {
      const activities = [
        {
          id: "PRODUCTION",
          name: this.$t("models.location.activities.PRODUCTION.name"),
          description: this.$t(
            "models.location.activities.PRODUCTION.description"
          ),
        },
        {
          id: "EVENT",
          name: this.$t("models.location.activities.EVENT.name"),
          description: this.$t("models.location.activities.EVENT.description"),
        },
        {
          id: "MEETING",
          name: this.$t("models.location.activities.MEETING.name"),
          description: this.$t(
            "models.location.activities.MEETING.description"
          ),
        },
      ];
      return activities;
    },
    startDateMenu() {
      const validTimes = [];
      for (let i = 6; i < 24; i++) {
        let time = new Sugar.Date().reset();
        time.addHours(i);
        validTimes.push(time.format("{hh}:{mm} %P").raw);
      }
      return validTimes;
    },

    blockedDays() {
      let blockedDays = [];
      if (this.location.availability_calendar.blockedWeekDays.length > 0) {
        blockedDays.push({
          weekdays: this.location.availability_calendar.blockedWeekDays,
        });
      }

      for (let dayIndex in this.location.availability_calendar
        .forcedBlockedDays) {
        blockedDays.push(
          this.location.availability_calendar.forcedBlockedDays[dayIndex]
        );
      }

      return [...blockedDays];
    },
    availableDays() {
      const availableDays = [];
      for (let dayIndex in this.location.availability_calendar
        .forcedAvailableDays) {
        if (
          !new Sugar.Date(
            this.location.availability_calendar.forcedAvailableDays[dayIndex]
          ).isPast()
        ) {
          availableDays.push(
            this.location.availability_calendar.forcedAvailableDays[dayIndex]
          );
        }
      }
      return [...availableDays];
    },
    totalHours() {
      let hours = 0;
      for (let day of this.bookingDetails.selectedDates) {
        hours += this.diffInHours(day.start, day.end);
      }
      return hours;
    },
  },
  methods: {
    endDateMenu(startDate) {
      if (!startDate) return [];
      const validTimes = [{ header: "End Time", divider: true }];
      const startDateHour = parseInt(new Sugar.Date(startDate).getHours().raw);
      for (let i = 7; i < 24; i++) {
        let time = new Sugar.Date().reset();
        time.addHours(i);

        if (startDateHour < i) {
          validTimes.push(time.format("{hh}:{mm} %P").raw);
        }
      }
      validTimes.push("11:59 pm");
      validTimes.push({ header: "Next Day", divider: true });
      for (let i = 1; i < 7; i++) {
        let time = new Sugar.Date().reset();
        time.addHours(i);
        validTimes.push(time.format("{hh}:{mm} %P").raw);
      }
      return validTimes;
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
      if (
        !name ||
        !this.location ||
        !this.location.pricing ||
        !this.location.pricing.ranges
      ) {
        return { prices: [{}] };
      }
      name = name.trim();

      for (let range of this.location.pricing.ranges) {
        if (range.name == name) return range;
      }
      return false;
    },
    getShortDate(date) {
      if (!date) return;
      return new Sugar.Date(date).format("%d/%m/%Y");
    },
    getMediumDate(date) {
      if (!date) return;
      return new Sugar.Date(date).medium();
    },
    isDayAvailable() {
      return true;
    },
    addDay() {
      const details = Object.assign({}, this.bookingDetails);
      const lastDay = details.selectedDates[details.selectedDates.length - 1];
      if (!lastDay.day) {
        this.$refs[
          `day-picker-${details.selectedDates.length - 1}`
        ][0].togglePopover();
        return;
      }
      const newDay = new Sugar.Date(lastDay.day.toString())
        .addDays(1)
        .medium().raw;

      details.selectedDates.push({
        day: newDay,
        start: lastDay.start,
        end: lastDay.end,
      });

      this.bookingDetails = Object.assign({}, details);
    },
  },
  watch: {},
};
</script>

<style scoped>
.add-day-button:hover {
  cursor: pointer;
  text-decoration: underline;
}
.cursor-pointer .v-input .v-input__slot input {
  cursor: pointer !important;
}
</style>