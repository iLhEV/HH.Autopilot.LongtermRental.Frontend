<template lang="pug">
  div#map_section.row
    div.col
      h2.black
        | Где нас найти
      h3.black 
        | Мы предоставляем услуги автопроката на самых популярных направлениях таких, как: Крым, Сочи, Москва, Краснодар, Санкт-Петербург, Владивосток, а также в Майами штат Флорида, делая ваш отдых, деловые поездки простыми, доступными и беззаботными.
        br
        br
        | ООО "Автопилот" ИНН/КПП 2536064257 / 253801001
      div.link-container.first
        b-link.link 8 800 444-48-48
      div.link-container
        b-link.link info@autopilot.rent
    div.map-container.col
      div.map
        GmapMap(:center="{lat:55.6722832, lng:63.6315881}" :zoom="4" style="width: 100%; height: 500px")
          GmapMarker(:key="index" v-for="(m, index) in markers" :position="m.position" :clickable="false" :draggable="false" @click="center=m.position" :title="m.title" :icon="{ url: require('~/assets/images/baloon.png')}")
</template>
<script lang="ts">
import Vue from 'vue'
import DatePicker from 'vue2-datepicker';
export default Vue.extend({
  components: {
  },
  data() {
    return {
      markers: [
        {title: 'Челябинск', position: { lng: 61.42972220, lat: 55.15444440 }},
        {title: 'Екатеринбург', position: { lng: 60.60000000, lat: 56.85000000 }},
        {title: 'Калининград', position: { lng: 20.50000000, lat: 54.71000000 }},
        {title: 'Казань', position: { lng: 49.13333330, lat: 55.75000000 }},
        {title: 'Хабаровск', position: { lng: 135.10000000, lat: 48.50000000 }},
        {title: 'Краснодар', position: { lng: 38.97694440, lat: 45.03277780 }},
        {title: 'Москва', position: { lng: 37.61555560, lat: 55.75222220 }},
        {title: 'Находка', position: { lng: 132.89472220, lat: 42.83333330 }},
        {title: 'Новосибирск', position: { lng: 82.93444440, lat: 55.04111110 }},
        {title: 'Санкт-Петербург', position: { lng: 30.26416670, lat: 59.89444440 }},
        {title: 'Сочи', position: { lng: 39.73027780, lat: 43.60000000 }},
        {title: 'Владивосток', position: { lng: 131.90000000, lat: 43.13333330 }},
        {title: 'Симферополь', position: { lng: 34.10000000, lat: 44.95000000 }}
      ]
    }

  }
})
</script>
<style lang="sass" scoped>
@import "~/assets/styles/mixins"
#map_section
  @include ltrButton  
  @include ltrHeaders
  padding: 0 0 100px 9%
  @media(max-width:1400px)
    padding-right: 9%
  @media(max-width:576px)
    padding-left: 15px
    padding-right: 15px    
  h2
    margin-top: 100px
  h3
    margin-right: 66px
    @media(max-width:576px)
      font-size: 1rem
  .link-container
    float: left
  .link
    font-size: 1.5rem
    font-weight: 700
    color: #0039A6
    white-space: nowrap
  .first
    padding-right: 54px
.map-container
  position: relative
  margin-top: 100px
  min-height: 500px
  @media(max-width:1400px)
    flex: 0 0 100%
    max-width: 100%
    margin-top: 60px
.map
  position: absolute
  z-index: 3
  width: 100%
  height: 500px
  right: 0
  top: 0
</style>