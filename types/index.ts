export interface longtermApplicationForm{
  time: Array<Date>
  date_start: string,
  date_end: string,
  citySelected: citySelectOption,
  citySelectedId: String,
  cityOptions: Array<citySelectOption>,
  return_same_place: Boolean,
  name: String,
  surname: String,
  ph: String,
  phone: String,
  email: String,
  comment: String,
  validation:validationStatus,
  sended:boolean,
}

export interface longtermApplicationData{
  date_start: String,
  date_end: String,
  city: citySelectOption,
  return_same_place: Boolean,
  client: longtermApplicationClient,
  comment: String
}

export interface longtermApplicationClient{
  name: String,
  surname: String,
  phone: String,
  email: String
}

export interface longtermVehicle{
  probeg: Number
}