import { request } from './requst'

export function loginPost (idData) {
  return request({
    url: '/login',
    method: 'post',
    // idData为数组参数{username,password}
    params: idData
  })
}
