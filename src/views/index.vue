<template>
  <div class="index">
    <header>
      <h1 class="logo">
        <router-link to="/home">space-tourism</router-link>
      </h1>
      <van-cell @click="showPopup" class="index_mobile_nav">展示弹出层</van-cell>
      <van-popup v-model="show" position="right" closeable class="van-popup">
        <router-link
          v-for="(item, index) in routerList"
          :key="index"
          :to="item.router"
          :class="{
            active: $route.path === item.router,
            // split: show  // 当弹出层显示时，添加.split类
          }"
          @click.native="show = false"
        ><span>{{item.number}}</span>{{item.name}}</router-link>
      </van-popup>
      <div class="line"></div>
      <nav class="index_desktop_nav">
        <router-link
          v-for="(item, index) in routerList"
          :key="item.router"
          :to="item.router"
          @click="activeIndex = index"
          :class="{active: activeIndex === index}"
        ><span>{{item.number}}</span>{{item.name}}</router-link>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
// import { runSplitAnimation } from '@/utils/animations'
export default {
  name: 'IndexPage',
  data () {
    return {
      show: false,
      routerList: [
        { router: '/home', number: '00', name: 'HOME' },
        { router: '/destination', number: '01', name: 'DESTINATION' },
        { router: '/crew', number: '02', name: 'CREW' },
        { router: '/technology', number: '03', name: 'TECHNOLOGY' }
      ],
      activeIndex: 0
    }
  },
  methods: {
    showPopup () {
      this.show = true
    }
  },
  watch: {
    '$route' (to) {
      this.activeIndex = this.routerList.findIndex(
        item => item.router === to.path
      )
    }
  },
  mounted () {
    this.activeIndex = this.routerList.findIndex(
      item => item.router === this.$route.path
    )
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/index.less';
</style>
