<template lang="pug">
  div#cars_section
    #header
      h2.black
        | Доступные автомобили
      h3.black
        | Выбор под любую задачу
    div.row
      div(v-for="(vehicle) in vehicles.slice(0, current_vehicles_number)").col.card
        div.row
          div.col.params
            h4 {{ vehicle.raw.car_name }}
            h4.price от {{ $assets.prepareNumber(vehicle.raw.base_price) }} &#8381;/месяц
            ul
              li.washing-included.icon Мойка включена
              li.free-delivery.icon Бесплатная подача
              li.full-tank.icon Полный бак
              li.five-seats.icon {{ vehicle.cd.numberofseats }} {{ $assets.getName(vehicle.cd.numberofseats, 'место', 'места', 'мест') }}
              li(v-if="vehicle.cd.kpp=='АКПП'").automatic-gear.icon АКПП
              li(v-if="vehicle.cd.kpp=='МКПП'").mechanic-gear.icon МКПП
          div.col.car
            b-img.car-image(:src="$assets.url_prepare(vehicle.photo, $cnf.env)" fluid)
            div
              b-button(:href="'/longtermrental_card/' + vehicle.raw.price.car_guid + '/'").ltr-btn Подробнее


    b-link(@click="show_more" v-if="!show_more_vehicles").more Показать больше автомобилей
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "longtermVehiclesList",
  data() {
    return {
      current_vehicles_number: 2,
      max_vehicles_number: 6,
      show_more_vehicles: false,
      vehicles: require('@/data/longtermVehiclesList').data
    }
  },
  methods: {
    show_more(){
      this.current_vehicles_number = this.max_vehicles_number
      this.show_more_vehicles = true
    }
  }
})
</script>
<style lang="sass" scoped>
@import "~/assets/styles/mixins"
#cars_section
  @include ltrButton  
  @include ltrHeaders
  padding: 90px 30px 100px
  position: relative
  z-index: 10
  background: #ECF6FF
  background-image: url("/images_static/ltr-background.png")
  text-align: center
  h2
    margin-left: 9%
  h3
    margin-left: 9%
  ul
    padding: 0
    margin: 0
  .more, .more:active, .more:visited
    font-size: 1.5rem
    color: #0039A6
    text-decoration: underline
  .more:hover
    text-decoration: none
  @media (max-width: 1170px)
    padding-left: 30px
    padding-right: 30px    
#header
  text-align: left
.card
  padding: 50px 65px
  margin: 0 15px 60px
  //margin-bottom: 60px
  //max-width: 955px
  flex: 0 0 calc(50% - 30px)  
  max-width: calc(50% - 30px)
  box-sizing: border-box
  h4
    font-size: 1.75rem
    font-weight: normal
    padding: 0
  h4.price
    font-weight: 700 !important
    margin-bottom: 20px
  .params
    text-align: left
  .car
    text-align: center
    @media (max-width: 900px)
      margin-top: 100px
    @media (max-width: 700px)
      flex: 0 0 100%
      max-width: 100%
      margin-top: 0px
  .car-image
    @media (max-width: 576px)
      margin-top: 30px
  @media (max-width: 1170px)      
    flex: 0 0 100%  
    max-width: 100%
    margin-right: 0
    margin-left: 0
  @media (max-width: 700px)
    padding-left: 40px
    padding-right: 40px
    margin-right: 30px
  @media (max-width: 576px)
    padding-left: 20px
    padding-right: 20px
  .ltr-btn
    margin-top: 45px
    @media (max-width: 576px)
      width: 200px
li.icon
  font-size: 1.125rem
  padding-left: 32px
  margin: 10px 0
  list-style-type: none
li.mechanic-gear
  background: url('/images_static/icons/mechanic-gear.svg') no-repeat
li.washing-included
  background: url('/images_static/icons/washing-included.svg') no-repeat
li.free-delivery
  background: url('/images_static/icons/free-delivery.svg') no-repeat
li.full-tank
  background: url('/images_static/icons/full-tank.svg') no-repeat
li.five-seats
  background: url('/images_static/icons/five-seats.svg') no-repeat
li.automatic-gear
  background: url('/images_static/icons/automatic-gear.svg') no-repeat
</style>      
