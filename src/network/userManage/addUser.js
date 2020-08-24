import { request } from '../requst'

export function addUser (data) {
  return request({
    url: '/users',
    method: 'post',
    params: data,
    headers: { Authorization: window.sessionStorage.getItem('token') }
  })
}
