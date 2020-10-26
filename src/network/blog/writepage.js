import { request } from '../request'

export function addArticle (idData) {
  return request({
    url: '/blog/add',
    method: 'post',
    data: idData
  })
}
