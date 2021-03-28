import {validationStatus, errors, bookingUserForm} from "~/types";

export default class Validator{
  validateMidlineLongterm = (name:String, phone:String, city:String) =>{
    let status:validationStatus = {
      errors: [],
      status: true
    }
    if (!this.__name(name)){
      status.errors.push(this.___errors('name'))
    }
    if (!this.__phone(phone)){
      status.errors.push(this.___errors('phone'))
    }
    if (!this.__city(city)){
      status.errors.push(this.___errors('city'))
    }
    status.status = status.errors.length === 0
    return status
  }

  validateLongtermCardForm = (city:String, name:String, surname:String, phone:String, email:String, comment:String) =>{
    let status:validationStatus = {
      errors: [],
      status: true
    }
    if (!this.__city(city)){
      status.errors.push(this.___errors('city'))
    }
    if (!this.__name(name)){
      status.errors.push(this.___errors('name'))
    }
    if (!this.__surname(surname)){
      status.errors.push(this.___errors('surname'))
    }
    if (!this.__phone(phone)){
      status.errors.push(this.___errors('phone'))
    }
    if (!this.__email(email)){
      status.errors.push(this.___errors('email'))
    }
    if (!this.__comment(comment)){
      status.errors.push(this.___errors('comment'))
    }
    status.status = status.errors.length === 0
    return status
  }
}
