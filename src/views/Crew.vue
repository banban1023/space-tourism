<template>
  <div class="crew">
    <header>
      <h2 class="crew_title">
        <span>02</span>
        MEET YOUR CREW
      </h2>
      <section class="crew_swipe">
        <article v-if="crewList.length > 0">
          <p class="crew_role">{{ crewList[activeIndex].role }}</p>
          <h3 class="crew_name">{{ crewList[activeIndex].name }}</h3>
          <p class="crew_content">
            {{ crewList[activeIndex].bio }}
          </p>
        </article>
        <ol>
          <li
            v-for="item in 4"
            :key="item"
            @click="activeIndex = item - 1"
            :class="{active: activeIndex === item - 1}"
          >{{item}}</li>
        </ol>
      </section>
    </header>
      <section class="crew_img" v-if="crewImgList.length > 0">
        <img
          :key="crewImgList[activeIndex]"
          :src="getImageUrl(crewImgList[activeIndex])"
          :alt="crewList[activeIndex].name">
      </section>
  </div>
</template>

<script>
// import axios from 'axios'
import data from '@/data/data.json'
import { playCrewAnimation } from '@/utils/animations.js'
export default {
  name: 'CrewPage',
  data () {
    return {
      crewImgList: [],
      crewList: [],
      activeIndex: 0
    }
  },
  created () {
    this.getCrewList()
  },
  methods: {
    // async getCrewList () {
    //   const res = await axios.get(' http://localhost:3000/crew')
    //   this.crewList = res.data
    //   // console.log(this.crewList)
    //   this.crewImgList = this.crewList.map((item) => item.images.png)
    //   // console.log(this.crewImgList)
    //   this.$nextTick(() => {
    //     playCrewAnimation()
    //   })
    // },
    getCrewList () {
      this.crewList = data.crew
      this.crewImgList = this.crewList.map((item) => item.images.png)
      this.$nextTick(() => {
        playCrewAnimation()
      })
    },
    getImageUrl (path) {
      const images = require.context('@/assets/crew', false, /\.(png|jpe?g|webp)$/)
      const fileName = path.split('/').pop()
      return images(`./${fileName}`)
    }
  },
  watch: {
    activeIndex () {
      this.$nextTick(() => {
        playCrewAnimation()
      })
    }
  },
  mounted () {
    // this.$nextTick(() => {
    //   playCrewAnimation()
    // })
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/crew.less';
</style>
