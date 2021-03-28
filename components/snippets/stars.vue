<template lang="pug">
  span(v-if="check")
    img.star(src="/images_static/stars/blue_star.svg" v-for="star in whole_filled")
    img.star(src="/images_static/stars/blue_star_half.svg" v-for="star_half in half_filled")
    img.star(src="/images_static/stars/blue_star_empty.svg" v-for="star_empty in empty_filled")
</template>
<script lang="ts">
import Vue from 'vue'
import cardform from "~/components/longtermrental/cardForm.vue";
import stars_snipet from "~/components/snipets/stars.vue";
export default Vue.extend({
  name: "starsSnipet",
  data(){
    return {
      whole_filled: 0,
      half_filled: 0,
      empty_filled: 0,
      check: false
    }
  },
  props: {
    total: Number,
    filled: Number
  },
  mounted(){
    if(this.total >= this.filled && this.total > 0){
      this.check = true
      this.whole_filled = Math.floor(this.filled)
      this.half_filled = this.filled - this.whole_filled ? 1 : 0
      this.empty_filled = this.total - this.whole_filled - this.half_filled
      console.log("check is ok")
      console.log(this.whole_filled)
      console.log(this.half_filled)
      console.log(this.empty_filled)
    }
  }
})
</script>