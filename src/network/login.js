import { request } from './request'

export function loginPost (idData) {
  return request({
    url: '/login',
    method: 'post',
    data: idData
  })
}
