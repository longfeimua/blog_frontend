import { request } from '../request'

export function getArticle () {
  return request({
    url: '/blog',
    method: 'get'
  })
}
