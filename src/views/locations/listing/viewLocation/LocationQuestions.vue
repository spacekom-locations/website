<template>
  <div>
    <h2 class="headline my-4">Questions</h2>
    <div v-for="(q, index) of questions" :key="index" class="my-4">
      <h3 class="font-weight-bold">
        <span class="grey--text mx-2">Q:</span>
        <span>{{ q.question }}</span>
      </h3>
      <h3 class="font-weight-regular">
        <span class="grey--text mx-2">A:</span>
        <span> {{ q.answer }} </span>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    location: {
      required: true,
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    questions() {
      let questions = [];

      questions.push(this.attendeesCountQuestion);

      questions.push(this.activitiesQuestion);

      questions.push(this.sizeQuestion);

      return questions;
    },
    attendeesCountQuestion() {
      return {
        question: "What's the maximum attendees I can have at this location?",
        answer: `Renter allows ${this.location.maximum_attendees_number} attendees on location `,
      };
    },
    activitiesQuestion() {
      let activities_str = "";
      for (let activityIndex in this.location.allowed_activities) {
        if (
          activityIndex == this.location.allowed_activities.length - 1 &&
          this.location.allowed_activities.length > 1
        ) {
          activities_str += " and ";
        } else if (activityIndex > 0) {
          activities_str += ", ";
        }
        activities_str += this.$t(
          "models.location.activities." +
            this.location.allowed_activities[activityIndex] +
            ".name"
        );
      }
      return {
        question: "What types of activities are allowed at this location?",
        answer: `Renter allows ${activities_str}`,
      };
    },
    sizeQuestion() {
      return {
        question: "How many square feet is the location?",
        answer: `This location is ${this.location.size} sq/ft `,
      };
    },
  },
};
</script>

<style>
</style>