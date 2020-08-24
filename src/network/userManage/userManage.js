import { request } from '../requst'

export function getUsers (data) {
  return request({
    url: '/users',
    method: 'get',
    params: data,
    headers: { Authorization: window.sessionStorage.getItem('token') }
  })
}
