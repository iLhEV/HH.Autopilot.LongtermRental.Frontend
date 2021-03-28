<template lang="pug">
  div#subscription_section
    div.linse
      h2
        | Подписка на автомобиль
      h3
        | Аренда автомобиля с возможностью пользования в
        br
        | любом городе!
        br
        br
        | При переезде, вам предоставят точно такой
        br
        | же автомобиль (или того же класса). Никаких проблем!
      b-button.ltr-btn.ltr-btn-reversed Оформить подписку
</template>
<style lang="sass" scoped>
@import "~/assets/styles/mixins"
#subscription_section
  @include ltrButton  
  @include ltrHeaders
  position: relative
  margin: 5.3% 0 0
  background-image: url('/images_static/subscription.png')
  background-repeat: no-repeat
  background-position: center center
  background-size: cover
  z-index: 10
  h2
    color: #fff
  h3
    color: #fff
  @media(max-width:1800px)
    h2
      font-size: 2.5rem
    h3
      font-size: 1.3rem
.linse
  min-height: 520px
  background: transparent
  width: 100%
  height: 100%
  padding: 100px 9% 100px
  @media(max-width: 1615px)
    background: rgba(0,0,0,0.4)    
  @media (max-width: 576px)
    padding: 40px 57px 60px
  @media (max-width: 400px)
    padding-left: 40px
    padding-right: 40px
</style>