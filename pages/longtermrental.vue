<template lang="pug">
  div#page
    div#s1
      div.linse
        h2 Поездка, которая
          br
          | точно запомнится.
        h3 Арендуйте автомобиль на выгоднейших условиях
        b-button.ltr-btn(@click="$scrollToElement('cars_section')") Выбрать автомобиль
    longterm_component
    subscription_component
    midline_component        
    vehicles_component
    map_component
</template>

<script lang="ts">
import Vue from 'vue'
import map_component from "~/components/longtermrental/map.vue"
import vehicles_component from "~/components/longtermrental/vehicles.vue"
import subscription_component from "~/components/longtermrental/subscription.vue"
import longterm_component from "~/components/longtermrental/longterm.vue"
import midline_component from "~/components/longtermrental/midline.vue";

export default Vue.extend({
  head () {
    return {
      title: 'Прокат авто в Сочи, Крыму, Москве, СПб и других городах России и мира',
      meta: [
        {hid: 'description', name: 'description', content: 'Сеть автопрокатов "Автопилот" работает в Сочи, Крыму, Москве, СПб и других городах России и мира уже 25 лет. Мы готовы предложить вам лучшее качество услуг и сервиса по выгодным ценам.'}
      ]
    }
  },
  components: {
    map_component,
    vehicles_component,
    subscription_component,
    longterm_component,
    midline_component
  },
  data() {
    return {
      slide: 0,
      sliding: false,
      scrolling_speed: 80
    }
  },
  methods: {
    onSlideStart(slide:any) {
      this.sliding = true
    },
    onSlideEnd(slide:any) {
      this.sliding = false
    }
  }
})
</script>

<style lang="sass" scoped>
@import "../assets/styles/variables"
@import "../assets/styles/mixins"
#page
  @include ltrHeaders
  @include ltrButton 
  overflow: hidden
  
#s1
  background-image: url("/images_static/slides/longtermrent.png")
  position: relative
  background-position: center center
  background-size: cover
  height: 500px
  color: #fff
  z-index: 10
  .ltr-btn
    margin-top: 0
  .linse
    background: transparent
    width: 100%
    height: 100%
    padding: 106px 9%
    @media(max-width: 1639px)
      background: rgba(0,0,0,0.4)    
    @media (max-width: 576px)
      padding: 40px 57px 60px
</style>
