import axios from 'axios'

export function request(config) {
  // 创建aioxs实例
  const instance = axios.create({
    baseURL: 'http://192.168.102.135:3000/api/v1/',
    timeout: 5000
  })

  // 拦截器
  // 1请求拦截
  instance.interceptors.request.use(config => {
    // 设置请求参数
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
  }, err => {
    console.log(err)
  })

  // 2响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  // 发送真正的网络请求
  return instance(config)
}
