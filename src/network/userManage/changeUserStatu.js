import { request } from '../requst'

export function changeUserStatu (data) {
  return request({
    url: '/users/:uId/state/:type',
    method: 'put',
    params: data,
    headers: { Authorization: window.sessionStorage.getItem('token') }
  })
}
