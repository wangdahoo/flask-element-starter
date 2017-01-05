import axios from 'axios'
import qs from 'qs'

import { Message } from 'element-ui';

axios.defaults.baseURL = '/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

let api = axios.create({
  baseURL: '/api',
  timeout: 1000
})

api.interceptors.request
  .use((config) => {
    if (config.method.toLowerCase() == 'post' && config.data) {
      config.data = qs.stringify(config.data)
    }
    return config
  }
  // , (err) => {
  //   // TODO:
  //   // return Promise.reject(err)
  // }
  )

api.interceptors.response
  .use((response) => {
    // Do Nothing
    return response;
  }, (err) => {
    // Process error:
    let res = err.response
    if (res.status == 400 || res.status == 403) {
      Message({
        message: res.data && res.data.message || '错误的请求'
      })
    } else {
      // TODO:

    }

    return Promise.reject('')
  })

export default api
