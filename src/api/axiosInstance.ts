import axios, { AxiosInstance, AxiosRequestConfig } from "axios"

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_HOST, // 기본 서버 주소 입력
  headers: {
    "Content-type": "application/x-www-form-urlencoded",
  },
})

export default class Axios {
  private instance: AxiosInstance

  constructor() {
    this.instance = axiosInstance
  }

  init() {
    // 토큰 실어주기
    this.instance.interceptors.request.use(
      config => {
        const token = sessionStorage.getItem("access_token")
        config.headers["Authorization"] = "Bearer " + token
        return config
      },
      error => {
        // console.log({ error })

        // 토큰이 없다면
        if (error.response.status == "401") {
        }
        return Promise.reject(error)
      },
    )

    // 토큰 만료시
    this.instance.interceptors.response.use(
      config => {
        return config
      },
      error => {
        // API 통신 오류
        if (error.response.status == "401") {
        }
        return Promise.reject(error)
      },
    )
  }
}
