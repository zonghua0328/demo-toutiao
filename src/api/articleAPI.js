// 请求文章相关API接口
import { request } from '@/utils/request.js'

// 向外导出一个API函数
export const getArticleListAPI = function(_page, _limit) {
  return request.get('/articles', {
    // 请求参数
    params: {
      _page,
      _limit
    }
  })
}
