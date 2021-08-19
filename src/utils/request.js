import axios from 'axios'
// export default request
export const request = axios.create({
  // 指定根路径
  baseURL: 'https://www.escook.cn'
})
export const request1 = axios.create({
  // 指定根路径
  baseURL: 'https://api.github.com/search/users?q=test'
})
