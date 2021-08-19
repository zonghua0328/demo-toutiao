<template>
  <div class="home-container">
    <van-nav-bar title="纵华新讯" fixed />
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" :disabled="finished">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" success-text="加载成功">
        <ArticleInfo v-for="item in artList" :key="item.id" :title="item.title" :author="item.aut_name" :cmt-count="item.comm_count" :time="item.pubdate" :cover="item.cover"></ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticleListAPI } from '@/api/articleAPI.js'
import { gethubAPI } from '@/api/githubAPI.js'
import ArticleInfo from '@/components/Article/ArticleInfo.vue'
export default {
  name: 'Home',
  data() {
    return {
      // 请求页码值
      page: 1,
      // 每页显示多少条数据
      limit: 10,
      // 文章数组
      artList: [],
      // 当组件滚动到底部时，会触发 load 事件并将 loading 设置成 true
      loading: true,
      // 若数据已全部加载完毕，则直接将 finished 设置成 true 即可。
      finished: false,
      // 是否下拉刷新
      refreshing: false
    }
  },
  created() {
    this.initArticleList()
    this.githubList()
  },
  methods: {
    // 模拟请求github
    async githubList() {
      const { data: res1 } = await gethubAPI()
      console.log(res1)
    },
    // 封装获取文章数据方法
    async initArticleList(isRefresh) {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      // 用模板字符串对新旧数据进行拼接
      if (isRefresh) {
        // 成立是下拉刷新 新数据在前 旧数据在后
        this.artList = [...res, ...this.artList]
        this.refreshing = false
      } else {
        // 否则上滑刷 旧数据在前 新数据在后
        this.artList = [...this.artList, ...res]
        this.loading = false
      }
      // 如果请求数据全部加载完 那么把finished 改为 true
      if (res.length === 0) this.finished = true
    },
    // 上滑 只要onload被调用 发起axios请求
    onLoad() {
      // 1.让页码值加1
      this.page++
      // 2.请求数据 并拼接上原有数据
      this.initArticleList()
    },
    // 下拉刷新
    onRefresh() {
      // 1.让页码值加1
      this.page++
      // 2.请求数据 并拼接上原有数据
      this.initArticleList(true)
    }
  },
  components: {
    ArticleInfo
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 40px 0 50px 0;
}
// .van-nav-bar {
//   background-color: #007bff;
// }
// /deep/.van-nav-bar__title {
//   color: white;
// }
</style>
