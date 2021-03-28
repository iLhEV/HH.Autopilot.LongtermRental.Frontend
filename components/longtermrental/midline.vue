<template lang="pug">
  div#longterm_midline.px-1.text-center
    div#someblock
      b-container.py-5
        h2.black
          | Нужна помощь?
        h3.black
          | Закажите звонок нашего специалиста. Вам позвонят в течение 10 минут.
        b-form
          b-row.justify-content-center.align-items-center
            b-col(sm="12" md="6" lg="4").name-container
              b-input(placeholder="Ваше имя" v-model="name" @input="validate").field-text.w-100.mb-3
            b-col(sm="12" md="6" lg="4").city-container
              v-select(:options="cityOptions" label="city" :clearable="false" @input="selectCity" v-model="citySelected" autocomplete="off" placeholder="Ваш город").selector.field-text.w-100.mb-3.p-0
            b-col(sm="12" md="12" lg="4").phone-container
              vue-phone-number-input(@input="onPhoneChange" ref="phoneInput" v-model="ph" :clearable="true" :translations="{countrySelectorLabel: 'Код страны', countrySelectorError: 'Неверный выбор', phoneNumberLabel: 'Номер телефона',example: 'Пример :'}" size="lg").mb-3
            b-col(sm="12" md="12" lg="4").button-container.mb-3
              b-button(@click="callback_order").ltr-btn Заказать звонок
</template>
<script lang="ts">
import Vue from 'vue'
import {midlineStateLongterm, validationStatus, citySelectOption} from "~/types";

export default Vue.extend({
    name: "midlineLongterm",
    data(){
      let data:midlineStateLongterm = {
        ph: '',
        phone: '',
        name: '',
        citySelected: {city: 'Все города', id: 'all'},
        citySelectedId: "all",
        cityOptions: [
          {city: 'Все города', id: 'all'},
          {city: 'Сочи', id: 'sochi'},
          {city: 'Владивосток', id: 'vldk'},
          {city: 'Санкт-Петербург', id: 'spb'},
          {city: 'Симферополь (Крым)', id: 'crimea'},
          {city: 'Москва', id: 'msk'},
          {city: 'Екатеринбург', id: 'ekb'},
          {city: 'Челябинск', id: 'chlb'},
          {city: 'Краснодар', id: 'krd'},
          {city: 'Майами', id: 'mia'},
        ],
        validation: {
          status: false,
          errors: [],
        },
        sended: false
      }
      return data;
    },
    methods:{
      callback_order(){
        this.validate()
        if (!this.sended){
          if (this.validation.status){
            let message = `#ОБРАТНЫЙ_ЗВОНОК на сайте AUTOPILOT RENT\nимя пользователя - ${this.name}\nгород аренды - ${this.citySelected.city}\nтелефон пользователя - ${this.phone}`
            this.$rc.sendMessageToTelegram(message, (status:boolean)=>{
              if (!status){
                // @ts-ignore: Unreachable code error
                this.$bvToast.toast('Произошла ошибка попробуйте повторить позднее', {
                  title: 'Ошибка',
                  variant: 'danger',
                  solid: true,
                  appendToast: true
                })
              }else{
                // @ts-ignore: Unreachable code error
                this.$bvToast.toast('Заявка отправлена', {
                  title: 'Ошибка',
                  variant: 'success',
                  solid: true,
                  appendToast: true
                })
              }
            })
            this.sended = true
          }else{
            let message = [];
            if (this.validation.errors.length > 0){
              this.validation.errors.map((error) => {
                message.push(`${error}`)
              })
            }else{
              message.push('Ошибка в заполнении формы')
            }
            message.map((el:String) => {
              // @ts-ignore: Unreachable code error
              this.$bvToast.toast(el, {
                title: 'Ошибка',
                variant: 'danger',
                solid: true,
                appendToast: true
              })
            })
          }
        }else{
          // @ts-ignore: Unreachable code error
          this.$bvToast.toast('Вы уже отправляли заявку', {
            title: 'Ошибка',
            variant: 'danger',
            solid: true
          })
        }
      },
      onPhoneChange(){
        // @ts-ignore: Unreachable code error
        this.phone = this.$refs.phoneInput.phoneFormatted;
        this.validate()
      },
      validate(){
        this.validation = <validationStatus>this.$validator.validateMidlineLongterm(this.name, this.phone, this.citySelected.city)
      },
      selectCity(value: citySelectOption){
        this.citySelectedId = value.id
      }
    }
})
</script>
<style lang="sass" scoped>
@import "~/assets/styles/mixins"
#longterm_midline
  @include ltrButton  
  @include ltrHeaders
  @include drawCirclesAnimatedReversed
  position: relative
  padding: 80px 0
  .field-text
    height: 48px
    padding: 0 12px
  .ltr-btn
    width: 100% !important
</style>
<style lang="sass">
#longterm_midline
  .city-container
  .selector
    .vs__dropdown-toggle
      height: 48px
</style>