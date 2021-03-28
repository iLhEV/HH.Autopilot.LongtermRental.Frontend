<template lang="pug">
  b-form#longterm_form
    div#rent_data
      h1 Данные аренды
      div
        h2.fieldname Дата с - Дата по:
        date-picker.field(
            type="datetime"
            v-model="time"
            input-class="form-control datapicker"
            :lang="{formatLocale: {firstDayOfWeek: 1,},monthBeforeYear: false}"
            format="YYYY-MM-DD HH:mm"
            range
            :show-second="false"
            :time-picker-options="{start: '00:00', step:'00:30' , end: '23:30', format: 'HH:mm' }"
            :disabled-date="notBeforeToday"
            :clearable="false"
            ).w-100.p-0
      h2.fieldname Место
      v-select(:options="cityOptions" label="city" :clearable="false" @input="selectCity" v-model="citySelected" autocomplete="off").selector.p-0
      input(type="checkbox" v-model="return_same_place").checkbox
      h2.fieldname.checkbox-name Возврат в то же место
    div#yours_data
      h1 Ваши данные
      div.row
        div.col-12.col-md-6
          h2.fieldname Имя
          b-form-input(placeholder="Ваше имя" v-model="name").field
        div.col-12.col-md-6
          h2.fieldname Фамилия
          b-form-input(placeholder="Ваша фамилия" v-model="surname").field
      div.row
        div.col-12
          h2.fieldname Телефон
          vue-phone-number-input(@input="onPhoneChange" ref="phoneInput" v-model="ph" :clearable="true" :translations="{countrySelectorLabel: 'Код страны', countrySelectorError: 'Неверный выбор', phoneNumberLabel: 'Номер телефона',example: 'Пример :'}" size="lg").field.p-0
          br
        div.col-12
          h2.fieldname E-mail
          b-form-input(placeholder="Ваш e-mail" v-model="email").field
      div.row
        div.col-12.col-md-12
          h2.fieldname Комментарий
          b-form-textarea(placeholder="Ваш комментарий" v-model="comment").field
    div#costs
      h2 Стоимость: <b>{{ cost }} &#8381;</b>
    b-button(@click="submit_application").ltr-btn Забронировать
</template>
<script lang="ts">
import Vue from 'vue'
import {longtermApplicationForm, longtermApplicationData, validationStatus, citySelectOption} from '@/types'
import DatePicker from 'vue2-datepicker';
import { Datetime } from 'vue-datetime';
export default Vue.extend({
  name: "longtermCardForm",
  components: {
    DatePicker,
    Datetime
  },
  props: {
    cost: Number
  },
  data() {
    let data:longtermApplicationForm = {
      time: [
        new Date(this.$assets.genNowSpec(2)),
        new Date(this.$assets.genNowSpec(32))
      ],
      date_start: this.$assets.genNowSpec(2),
      date_end: this.$assets.genNowSpec(32),
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
      return_same_place: false,
      name: '',
      surname: '',
      ph: '',
      phone: '',
      email: '',
      comment: '',
      validation: {
        status: false,
        errors: [],
      },
      sended: false
    }
    return data    
  },
  watch:{
    time(val){
      let minimal_start_data = new Date(this.$assets.genNowSpec(2))
      let currentStartDate = new Date(this.$assets.genNowSpecFromDate(new Date(this.time[0]), 0))
      if (minimal_start_data >currentStartDate){
        this.time = [
          new Date(this.$assets.genNowSpec(2)),
          new Date(this.$assets.genNowSpec(32))
        ]
        this.date_start = this.$assets.genNowSpec(2);
        this.date_end = this.$assets.genNowSpec(32);
      }else{
        this.date_start = this.$assets.genNowSpecFromDate(new Date(this.time[0]), 0);
        this.date_end = this.$assets.genNowSpecFromDate(new Date(this.time[1]), 0);
      }
    }
  },
  methods: {
    submit_application(){
      this.validate()
      if (!this.sended){
        if (this.validation.status){
          let data:longtermApplicationData = {
            date_start: this.date_start,
            date_end: this.date_end,
            city: this.citySelected,
            return_same_place: this.return_same_place,
            client: {name: this.name, surname: this.surname, phone: this.phone, email: this.email},
            comment: this.comment
          }
          this.$rc.longtermApplication(data, (status:Boolean)=>{
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
    notBeforeToday(date:Date){
      return date < new Date(new Date(this.$assets.genNowSpec(2)).setHours(0, 0, 0, 0));
    },
    onPhoneChange(){
      // @ts-ignore: Unreachable code error
      this.phone = this.$refs.phoneInput.phoneFormatted;
      this.validate()
    },
    validate(){
      this.validation = <validationStatus>this.$validator.validateLongtermCardForm(this.citySelected.city, this.name, this.surname, this.phone, this.email, this.comment)
    },
    selectCity(value: citySelectOption){
      this.citySelectedId = value.id
    }
  }
})
</script>
<style lang="sass" scoped>
@import "~/assets/styles/mixins"
@include ltrButton
#longterm_form
  padding: 97px 66px 83px
  background: #ECF6FF
  text-align: left
  @media(max-width: 1200px)
    padding: 60px 45px 75px
  @media(max-width: 992px)
    margin-top: 80px
  @media(max-width: 992px)
    padding: 60px 30px 75px
  h1
    margin-bottom: 0
    font-size: 3rem
    font-weight: bold
    color: #000
    @media(max-width: 410px)
      font-size: 1.7rem
    @media(max-width: 1200px)
      font-size: 2.5rem
    @media(max-width: 576px)
      font-size: 2.1rem

  .fieldname
    padding-top: 23px
    font-size: 1.5rem
    color: #666
    font-weight: 400
    @media(max-width: 1200px)
      font-size: 1.3rem
  .field
    font-size: 1.5rem
    font-weight: 400
    color: #000
    margin-top: 4px
    padding: 0 15px
  .checkbox-name
    position: relative
    top: -2px
    font-size: 1.5rem
    display: inline
    padding-left: 10px
    color: #000

  
  #yours_data
    padding-top: 30px
    textarea
      padding: 10px 15px
  #costs
    margin: 30px 0
    h2
      font-size: 2rem
      font-weight: 400
      margin-left: 0
      pading-left: 0
    @media(max-width: 410px)
      font-size: 1.7rem
    b
      color: #000
      white-space: nowrap
  .ltr-btn
    @media(max-width: 410px)
      padding-left: 35px
      padding-right: 35px
      width: auto
  .checkbox
    margin-top: 15px
    border-radius: 0
    display: inline-block
    box-sizing: border-box
    height: 23px
    width: 23px
</style>
<style lang="sass">
#longterm_form
  .datapicker
    font-weight: normal
    font-size: 1.2rem
    height: 48px
  .selector
    background: #fff
    font-weight: normal
    font-size: 1.2rem
    .vs__dropdown-toggle
      height: 48px
    .vs__search
</style>