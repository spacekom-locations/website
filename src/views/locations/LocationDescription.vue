<template>
  <div>
    <pre :class="{ 'text-truncate': showMore != true }">
      **The $50/hr rate is only applicable for small film crews 1-15 members
      ** Crew sizes of 20-30 and more it’s a flat rate of $2,000 per day. No permits are required. 
  
      Film location located 75 minutes from Los Angeles in Lancaster, CA.
  
      5-acre desert property that abounds with Succulent plants, Joshua trees, and features amazing rock formations.
  
      Feature films, TV shows, commercials, music videos, stills
      contemporary, western, period, automotive, science fiction.
  
      Internal tracks/roads for action scenes: no public vehicle permits required for automotive. 
  
      Accessible Hotels, service stations, restaurants, and support near.
  
      We've partnered with Eazy Rider Productions to deliver whatever your
      production needs. 
  
      Easy Rider has it all: 
      *Talent Trailers / Single, 2  & 3 Room
      *Bathroom trailers  2, 3 & 4 Room
      *Honeywagons  2, 4, 5, 6, 8 Room 
      *Production Trailers
      *Combo's with Make-up Wardrobe
      *Make-up Trailers  6, 7, & 8 Station 
      *Wardrobe Trailers
      *Generators 
      *Cube Trucks
      *Stakebeds
      *Shuttle Vans
      *Fuelers
      *Car Haulers
      *Gators
  
      The prices above are for use of the entire property for a small-sized production (up to 15 people). 
  
      Depending on your inquiry you might be charged one of the rates below, 
      > Production (up to 30 people): $1,000 for a  day
      > Large production (30+ people): $2,500 + for a day 
      (depends on the impact the production will have on the landscape).
  
      Please inquire for rates on larger impact jobs and include and the following details about your project. 
  
      Job Name:
      Dates Needed: 
      What The Shoot is For:
      Crew/Talent Size:
      Hours Needed:
      Areas Needed: 
      Miscellaneous Info Relevant to Your Shoot:
    </pre>
    <div class="mt-4"></div>
    <v-btn outlined color="success" text @click="showMore = true" v-if="!showMore">show more</v-btn>
    <v-btn color="success" text @click="showMore = false" v-else>show less</v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    showMore: false,
  }),
};
</script>

<style>
</style>