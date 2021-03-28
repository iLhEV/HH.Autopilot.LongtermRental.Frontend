import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';
import {freeCarsRequest, dataForARentCheck, onlinePaymentData, order, longtermApplicationData} from "~/types";

export default class RESTClient{
  longtermApplication = (data:longtermApplicationData, callback:Function) => {
    this.client.post('http://rent.baikal.net.ru/longtermApplication', data).then((result)=>{
      if (result.data.status === 'success'){
        callback(true)
      }else{
        callback(false)
      }
    }).catch((err)=>{
      if (err){
        callback(false)
      }
    })
  }

  longtermVehiclesList = (callback:Function) => {
    this.client.get('http://rent.baikal.net.ru/longtermVehiclesList').then((result)=>{
      if (result.data.status === 'success'){
        callback(result.data.data, true)
      }else{
        callback('', false)
      }
    }).catch((err)=>{
      if (err){
        callback('', false)
      }
    })
    
  }
}
