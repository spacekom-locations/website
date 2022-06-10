<template>
  <div class="d-inline-block">
    <v-chip
      label
      class="pa-2"
      :input-value="true"
      outlined
      filter
      filter-icon="mdi-close"
      color="error"
      v-if="value == 'UNPUBLISHED'"
    >
      Unpublished
    </v-chip>
    <v-chip
      label
      class="pa-2"
      :input-value="true"
      filter
      filter-icon="mdi-check"
      color="success"
      v-if="value == 'PUBLISHED'"
    >
      Published
    </v-chip>
    <v-chip
      label
      class="pa-2"
      :input-value="true"
      filter
      outlined
      filter-icon="mdi-clock-outline"
      color="warning"
      v-if="value == 'IN_REVIEW'"
    >
      In Review
    </v-chip>
    <v-chip
      label
      class="pa-2"
      :input-value="true"
      filter
      filter-icon="mdi-cancel"
      color="error"
      v-if="value == 'SUSPENDED'"
    >
      Suspended
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: String,
    },
  },
};
</script>

<style>
</style>