// 请求文章相关API接口
import { request1 } from '@/utils/request.js'

// 向外导出一个API函数
export const gethubAPI = function() {
  return request1.get('')
}
