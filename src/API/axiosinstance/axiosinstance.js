import axios from "axios";
import { baseURL } from "../endpoints/endpoints";

export const axiosinstance = axios.create({
    baseURL,
  });

  axiosinstance.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('token')
      if (token !== null && token !== undefined) {
        config.headers['x-access-token'] = token
      }
      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )
  
  // Add a response interceptor
  axiosinstance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      return Promise.reject(error)
    }
  )