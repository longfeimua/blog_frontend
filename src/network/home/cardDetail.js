import { request } from '../request'

export function getArticleContent(articleId) {
  return request({
    url: '/blog/article/' + articleId,
    method: 'get'
  })
}
