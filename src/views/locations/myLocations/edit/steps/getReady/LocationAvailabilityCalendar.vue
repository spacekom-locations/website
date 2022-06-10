<template>
  <v-row>
    <v-col lg="8" sm="12" xs="12">
      <v-card max-width="800px" flat>
        <p class="display-1 font-weight-bold mb-8">Availability calendar</p>
        <div class="my-8">
          <vc-date-picker
            v-model="range"
            mode="date"
            :masks="masks"
            is-range
            :min-date="new Date()"
            :attributes="blockedDaysAttributes"
          >
            <template v-slot="{ inputValue, inputEvents }">
              <v-row>
                <v-col>
                  <v-card-title> Select Dates </v-card-title>
                  <v-card outlined max-width="350">
                    <v-card-actions class="px-2 py-2">
                      <v-btn v-on="inputEvents.start" text>
                        <v-icon>mdi-calendar-outline</v-icon>
                        {{ inputValue.start }}
                      </v-btn>
                      <v-spacer></v-spacer>
                      <span>
                        <v-icon>mdi-arrow-expand mdi-rotate-45</v-icon>
                      </span>
                      <v-spacer></v-spacer>
                      <v-btn v-on="inputEvents.end" text>
                        <v-icon>mdi-calendar-outline</v-icon>
                        {{ inputValue.end }}
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card-title> Availability </v-card-title>
                  <v-card
                    flat
                    class="d-inline-block py-0"
                    :disabled="!range.start || !range.end"
                  >
                    <v-card-actions text class="px-2 py-0 my-0">
                      <v-btn-toggle value="none" class="my-0 py-0">
                        <v-btn
                          x-large
                          width="135"
                          depressed
                          outlined
                          color="success"
                          @click="addAvailableDays"
                        >
                          <span>Available</span>
                        </v-btn>
                        <v-btn
                          x-large
                          width="135"
                          depressed
                          outlined
                          color="secondary"
                          text
                          @click="addBlockedDays"
                        >
                          <span>Block</span>
                        </v-btn>
                      </v-btn-toggle>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </template>
          </vc-date-picker>
        </div>

        <div class="my-8">
          <v-btn
            v-if="!showAdvanceOptions"
            color="success"
            text
            large
            @click="showAdvanceOptions = true"
          >
            <v-icon>mdi-dots-horizontal</v-icon>
            <span class="mx-2"> Advance Options </span>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
          <div v-if="showAdvanceOptions">
            <v-card outlined class="pa-4">
              <v-btn
                class="mb-8"
                v-if="showAdvanceOptions"
                color="secondary"
                text
                outlined
                large
                @click="showAdvanceOptions = false"
              >
                <v-icon>mdi-dots-horizontal</v-icon>
                <span class="mx-2"> Hide Advance Options </span>
                <v-icon>mdi-chevron-up</v-icon>
              </v-btn>
              <v-card flat class="pa-4" color="#CCC2">
                <h3 class="subtitle-1 font-weight-bold">Block week days</h3>
                <v-chip
                  :input-value="true"
                  large
                  filter
                  :filter-icon="
                    location.availability_calendar.blockedWeekDays.includes(
                      day.id
                    )
                      ? 'mdi-close'
                      : 'mdi-check'
                  "
                  :color="
                    location.availability_calendar.blockedWeekDays.includes(
                      day.id
                    )
                      ? 'grey'
                      : 'success'
                  "
                  @click="toggleWeekDayBlok(day.id)"
                  outlined
                  label
                  class="ma-2"
                  v-for="day of weekDays"
                  :key="'__week_day_' + day.id"
                >
                  {{ day.name }}
                </v-chip>
              </v-card>
            </v-card>
          </div>
        </div>
        <div class="my-8 text-center">
          <vc-date-picker
            class="pa-4"
            mode="date"
            is-expanded
            :min-date="new Date()"
            :columns="$screens({ default: 1, lg: 2 })"
            :attributes="blockedDaysAttributes"
            is-range
            v-model="range"
          />
        </div>
        <div class="my-16 py-16"></div>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined class="pa-6">
        <div>
          <v-img
            src="https://giggster.com/images/become-host-steps/calendar.png"
          />
        </div>
        <p class="subtitle-1 font-weight-bold mt-4">
          Keep your availability up to date
        </p>
        <p class="caption mt-4 grey--text">
          Production teams will see your availability and will request to book
          events only when your space is free. Make sure this is accurate to
          avoid miscommunications and cancellations due to scheduling errors.
        </p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Sugar from "sugar";

export default {
  props: {
    value: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  data() {
    return {
      showAdvanceOptions: false,
      weekDays: [
        { id: 1, name: "Sunday" },
        { id: 2, name: "Monday" },
        { id: 3, name: "Tuesday" },
        { id: 4, name: "Wednesday" },
        { id: 5, name: "Thursday" },
        { id: 6, name: "Friday" },
        { id: 7, name: "Saturday" },
      ],

      range: {
        start: "",
        end: "",
      },
      masks: {
        input: "YYYY-MM-DD",
      },
    };
  },
  computed: {
    blockedDaysAttributes() {
      const canceledDaysHighlight = {
        color: "gray",
        fillMode: "light",
        contentClass: "calender-blocked-date",
      };
      let blockedDays = [];
      if (this.location.availability_calendar.blockedWeekDays.length > 0) {
        blockedDays.push({
          key: "WEEK_END_BLOCKED_DAYS",
          highlight: canceledDaysHighlight,
          dates: {
            weekdays: this.location.availability_calendar.blockedWeekDays,
          },
        });
      }

      for (let dayIndex in this.location.availability_calendar
        .forcedBlockedDays) {
        blockedDays.push({
          key: "FORCED_BLOCKED_DAY_" + dayIndex,
          highlight: canceledDaysHighlight,
          dates:
            this.location.availability_calendar.forcedBlockedDays[dayIndex],
        });
      }
      const availableDays = [];
      for (let dayIndex in this.location.availability_calendar
        .forcedAvailableDays) {
        availableDays.push({
          key: "FORCED_AVAILABLE_DAY_" + dayIndex,
          highlight: {
            style: {
              backgroundColor: "white",
              borderRadius: "0px",
            },
          },
          dates:
            this.location.availability_calendar.forcedAvailableDays[dayIndex],
        });
      }
      return [...blockedDays, ...availableDays];
    },
  },
  methods: {
    toggleWeekDayBlok(id) {
      let dayName;
      let date;
      for (dayName of this.location.availability_calendar.forcedAvailableDays) {
        date = new Date(dayName);
        if (this.isBlockedByWeekDayBlock(date)) {
          this.removeAvailableDate(date);
        }
      }

      for (dayName of this.location.availability_calendar.forcedBlockedDays) {
        date = new Date(dayName);
        if (this.isBlockedByWeekDayBlock(date)) {
          this.removeBlockedDate(date);
        }
      }
      if (this.location.availability_calendar.blockedWeekDays.includes(id)) {
        const index =
          this.location.availability_calendar.blockedWeekDays.indexOf(id);
        this.location.availability_calendar.blockedWeekDays.splice(index, 1);
      } else {
        this.location.availability_calendar.blockedWeekDays.push(id);
      }
    },
    getDatesInRange(startDate, endDate) {
      const date = new Date(startDate.getTime());

      const dates = [];

      while (date <= endDate) {
        dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }

      return dates;
    },
    addAvailableDays() {
      const rangeDates = this.getDatesInRange(this.range.start, this.range.end);
      for (let date of rangeDates) {
        this.removeBlockedDate(date);

        if (this.isBlockedByWeekDayBlock(date)) {
          const dateString = date.toDateString();
          if (
            !this.location.availability_calendar.forcedAvailableDays.includes(
              dateString
            )
          ) {
            this.location.availability_calendar.forcedAvailableDays.push(
              dateString
            );
          }
        }
      }
      this.resetRange();
    },
    addBlockedDays() {
      const rangeDates = this.getDatesInRange(this.range.start, this.range.end);
      for (let date of rangeDates) {
        this.removeAvailableDate(date);

        if (!this.isBlockedByWeekDayBlock(date)) {
          const dateString = date.toDateString();
          if (
            !this.location.availability_calendar.forcedBlockedDays.includes(
              dateString
            )
          ) {
            this.location.availability_calendar.forcedBlockedDays.push(
              dateString
            );
          }
        }
      }
      this.resetRange();
    },
    removeAvailableDate(date) {
      const index =
        this.location.availability_calendar.forcedAvailableDays.indexOf(
          date.toDateString()
        );
      if (index >= 0) {
        this.location.availability_calendar.forcedAvailableDays.splice(
          index,
          1
        );
      }
    },
    removeBlockedDate(date) {
      const index =
        this.location.availability_calendar.forcedBlockedDays.indexOf(
          date.toDateString()
        );
      if (index >= 0) {
        this.location.availability_calendar.forcedBlockedDays.splice(index, 1);
      }
    },
    isBlockedByWeekDayBlock(date) {
      const dayName = Sugar.Date(date).format("%A").raw.trim().toUpperCase();

      for (let day of this.weekDays) {
        if (day.name.trim().toUpperCase() == dayName) {
          return this.location.availability_calendar.blockedWeekDays.includes(
            day.id
          );
        }
      }
      return false;
    },

    resetRange() {
      this.range.start = null;
      this.range.end = null;
    },
  },
  watch: {
    value(new_value) {
      if (JSON.stringify(this.location) != JSON.stringify(new_value)) {
        this.location = new_value;
      }
    },

    location: {
      handler(val) {
        this.$emit("input", Object.assign({}, val));
      },
      deep: true,
    },
  },
  created() {
    this.location = this.value;
  },
};
</script>


<style>
.calender-blocked-date {
  position: relative;
}

.calender-blocked-date:before {
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRih2sHFBcoLFEbPtoL-gAEc-3sTDrlsW8gUg&usqp=CAU");
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: contain;
}
</style>