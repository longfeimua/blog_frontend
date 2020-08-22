import { request } from './requst'

export function loginPost (idData) {
  return request({
    url: '/login',
    methods: 'post',
    // idData为数组参数{username,password}
    params: idData
  })
}
