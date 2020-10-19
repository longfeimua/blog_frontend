import { request } from './request'

export function registerPost (idData) {
  return request({
    url: '/register',
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: idData
  })
}
