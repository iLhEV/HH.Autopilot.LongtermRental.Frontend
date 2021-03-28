<template lang="pug">
  div#longterm_section
    div#phys.row
      div.col
        h2.black
          | Долгосрочная аренда
          br
          | для физических лиц
        h3.black Аренда от 30 дней со скидкой до <b>50%</b>
        b-button.ltr-btn Перейти в раздел
      div.col.remove-ring
        div.ring-container
          b-img.ring-image(src="/images_static/ring_car1.png")
          div.ring.red-ring
    div#org.row
      div.col.remove-ring
        div.ring-container
          b-img.ring-image(src="/images_static/ring_car2.png")
          div.ring.blue-ring
      div.col
        h2.black
          | Долгосрочная аренда
          br
          | для организаций
        h3.black
          | Автомобили на персональных условиях с фирменным
          br
          | брендированием организации!
        b-button.ltr-btn Перейти в раздел
</template>
<style lang="sass" scoped>
@import "~/assets/styles/mixins"
@include ltrButton  
@include ltrHeaders
#phys
  position: relative
  margin: 5.3% 9%
  h2
    margin-top: 11%
  @media (max-width: 1020px)    
    margin-top: 140px
    h2
      margin-top: 2%
  @media (max-width: 576px)
    h2
      font-size: 2rem
      line-height: 2.4rem
#org
  position: relative
  margin: 5.3% 9%
  text-align: right
  h2
    margin-top: 11%
  @media (max-width: 1020px)    
    margin-top: 140px
    h2
      margin-top: 2%
  @media (max-width: 576px)
    margin-bottom: 70px
    h2
      font-size: 2rem
      line-height: 2.4rem
.ring-container
  position: relative
  width: 100%
  height: 0
  padding-bottom: 100%
.ring
  position: absolute
  width: calc(100% + 2px)
  height: calc(100% + 2px)
  display: block
  background-position: top left
  background-size: cover
  background-repeat: no-repeat
  z-index: 20
.red-ring
  background-image: url('/images_static/redring_filled.png')
.blue-ring
  background-image: url('/images_static/bluering_filled.png')
  //padding: 20px
  top: -1px
  left: -1px
  padding-right: 10px
.ring-image
  position: absolute
  width:  100%
  height: 100%
  z-index: 10  
  display: block
  padding: 0
  margin: 0
.remove-ring
  @media (max-width: 1020px)
    display: none !important
</style>