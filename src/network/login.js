import { request } from './request'

export function loginPost (idData) {
  return request({
    url: '/login',
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: idData
  })
}
