import { request } from './requst'

export function loginPost (idData) {
  return request({
    url: '/login',
    methods: 'post',
    params: idData
  })
}
