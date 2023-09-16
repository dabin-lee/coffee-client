import { axiosInstance } from "./axiosInstance"

export default class Axios {
  get() {}

  post(param) {
    const formdata = new FormData()
    axiosInstance.post(formdata.append("jsonData", JSON.stringify(param)))
  }
}
