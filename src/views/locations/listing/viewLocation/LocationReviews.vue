<template>
  <div class="d-flex d-flex-row">
    <div >
      <user-avatar :size="42" class="d-inline-block" />
    </div>
    <div class="mx-2"></div>
    <div>
      John Doe
      <v-rating
        color="orange"
        hover
        length="5"
        size="20"
        :value="4"
        dense
        background-color="grey"
        small
        readonly
        style="display: inline-block"
      ></v-rating>
      <p class="mt-3">
        The space was perfect for our needs. As a small crew we were easily able
        to find setups that truly looked like the middle of nowhere. Richard was
        helpful and communicative. 
      </p>
    </div>
  </div>
</template>

<script>
import UserAvatar from "@/components/user/UserAvatar.vue";
export default {
  components: { UserAvatar },
};
</script>

<style>
</style>