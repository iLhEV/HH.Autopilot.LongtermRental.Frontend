<template lang="pug">
  div#main
    div#vehicle_card
      div.row
        div#car.col-12.col-lg-6
          h1.inline
           | Долгосрочная аренда
           br
           | Kia Rio New
          h2.inline 2019
          h3 Комфорт класс
          b-carousel#carousel(controls indicators)
            b-carousel-slide(:img-src="$assets.url_prepare(vehicle.photo, $cnf.env)")
          div#about_car
            h1 Об автомобиле
            table.tbl
              tr
                td Пробег
                td {{ $assets.prepareNumber(vehicle.cd.probeg) }} км
              tr
                td Безопасность
                td
                  stars_snipet(:total="vehicle.cd.security[0]" :filled="vehicle.cd.security[1]") 
              tr
                td Вместительность
                td {{ vehicle.cd.numberofseats }} {{ $assets.getName(vehicle.cd.numberofseats, 'место', 'места', 'мест') }}
              tr
                td Комфорт
                td
                  stars_snipet(:total="vehicle.cd.comfort[0]" :filled="vehicle.cd.comfort[1]")
              tr
                td Коробка передач
                td(v-if="vehicle.cd.kpp=='АКПП'") Автоматическая
                td(v-if="vehicle.cd.kpp=='МКПП'") Механическая
              tr
                td Объём двигателя
                td {{ vehicle.cd.dvigatel }}л
            div#conditions
              h1 Условия аренды
              table.tbl
                tr
                  td Возраст водителя
                  td с 26 лет
                tr
                  td Стаж
                  td не менее 5-ти лет
                tr
                  td Залог на автомобиль
                  td от {{ vehicle.cd.deposit }} &#8381;
                tr
                  td Пробег/Перепробег
                  td 3000 км / от 3 &#8381; - 1 км
        div#col-12.col-lg-6
          cardform(:cost="vehicle.raw.base_price")
    div#benefits
      h1 Почему это так выгодно?
      div.row
        div.col-sm-6.col-lg-4
          h2.note-icon ОСАГО и КАСКО включены
        div.col-sm-12.col-lg-4
          h2.tire-icon Сезонный шиномонтаж
        div.col-sm-12.col-lg-4
          h2.free-icon Бесплатная стоянка на случай отъезда
        div.col-sm-12.col-lg-4
          h2.percent-icon Экономия до 50%
        div.col-sm-12.col-lg-4
          h2.speed-icon Гибкая система учёта пробега
        div.col-sm-12.col-lg-4
          h2.arrows-icon Возможность смены автомобиля раз в месяц
</template>

<script lang="ts">
import Vue from 'vue'
import cardform from "~/components/longtermrental/cardForm.vue";
import stars_snipet from "~/components/snipets/stars.vue";
export default Vue.extend({
  name: "longtermCardPage",
  components: {
    cardform,
    stars_snipet
  },
  data() {
    return {
      vehicle: require('@/data/longtermVehiclesCards').data[this.$route.params.slug]
    }
  }
})
</script>
<style lang="sass" scoped>
@import "~/assets/styles/variables"
@import "~/assets/styles/mixins"
@include ltrButton
.datepicker-class
  height: 60px !important
  padding: 10px 0
h1
  font-size: 3rem
  font-weight: bold
  color: #000
  @media(max-width: 1200px)
    font-size: 2.5rem
  @media(max-width: 576px)
    font-size: 2.1rem
#main
  overflow: hidden
#vehicle_card
  @include ltrButton 
  position: relative
  margin: 100px 9%
  font-weight: bold
  .text
    text-align: left
.inline
  display: inline
#car
  h2
    font-size: 1.6rem
    padding-left: 9px
    display: inline
    font-weight: normal
  h3
    font-size: 1.5rem
    font-weight: 400
#carousel
  margin-right: 20px
  max-width: 720px
#about_car
  margin-top: 31px
  .star
    width: 21px
    height: 21px
    margin-right: 2px
.tbl
  margin-top: 12px
  font-size: 1.5rem
  font-weight: 400
  line-height: 2.5rem
  font-weight: normal
  td
    padding-right: 100px
  @media(max-width: 1200px)
    font-size: 1.3rem
    line-height: 1.5rem
    td
      padding-right: 50px
      padding-bottom: 15px
  @media(max-width: 486px)
    font-size: 1.1rem
    td
      padding-right: 40px
  @media(max-width: 400px)
    font-size: 1rem
    td
      padding-right: 25px
      padding-bottom: 10px
#conditions
  margin-top: 45px
#benefits
  margin: 98px 0 90px
  padding: 80px 8.125%
  background-image: url('/images_static/benefits.png')
  background-size: cover
  h1
    color: #fff
    margin-bottom: 35px
  h2
    color: #fff
    font-size: 1.5rem
    margin: 10px 0 18px
    font-weight: normal
    min-height: 56px
    padding: 15px 60px
    @media(max-width:1200px)
      padding: 0px 80px
  .note-icon
    background-image: url('/images_static/icons/note.svg')
    background-repeat: no-repeat
  .tire-icon
    background-image: url('/images_static/icons/tire.svg')
    background-repeat: no-repeat
  .speed-icon
    background-image: url('/images_static/icons/speed.svg')
    background-repeat: no-repeat
  .percent-icon
    background-image: url('/images_static/icons/percent.svg')
    background-repeat: no-repeat
  .free-icon
    background-image: url('/images_static/icons/free.svg')
    background-repeat: no-repeat
  .arrows-icon
    background-image: url('/images_static/icons/arrows.svg')
    background-repeat: no-repeat
</style>
<style lang="sass">
#vehicle_card
  .carousel-control-prev-icon, .carousel-control-next-icon
    width: 28px
    height: 47px
  .carousel-control-prev-icon
    background-image: url('/images_static/arrows/left.svg')
  .carousel-control-next-icon
    background-image: url('/images_static/arrows/right.svg')
  .carousel-indicators
    li
      width: 17px
      height: 17px
</style>