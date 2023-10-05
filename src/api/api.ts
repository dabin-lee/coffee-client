import { axiosInstance } from "./axiosInstance"

export default class Axios {

  constructor(){
    #this.AXIOS = axiosInstance.getIstance()
  }
  get() {}{}

  post(param: Object): ObjectConstructor {
    const formdata = new FormData()
    axiosInstance.post(formdata.append("jsonData", JSON.stringify(param)))
  }
}
