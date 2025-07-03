<template>
  <div class="technology">
    <header>
      <h2 class="technology_title">
        <span>03</span>
        SPACE LAUNCH 101
      </h2>
    </header>
    <div class="technology_flex">
      <section class="technology_img" v-if="techLandList.length > 0">
        <img :src="getImageUrl(techPortList[activeIndex])" alt="" class="tech_deskTop">
        <img :src="getImageUrl(techLandList[activeIndex])" alt="" class="tech_mobile">
      </section>
      <section class="technology_content">
        <ol>
          <li
            v-for="item in 3"
            :key="item"
            @click="activeIndex = item-1"
            :class="{active : activeIndex === item -1}"
          >{{item}}</li>
        </ol>
        <article v-if="techPortList.length > 0">
          <p class="technology_role">THE&#8205; TERMINOLOGY&#8205;…</p>
          <h3 class="technology_name">{{technologyList[activeIndex].name}}</h3>
          <p class="technology_content_p">
            {{technologyList[activeIndex].description}}
          </p>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
import { playTechnologyAnimation } from '@/utils/animations.js'
import data from '@/data/data.json'
// import axios from 'axios'
export default {
  name: 'TechnologyPage',
  data () {
    return {
      technologyList: [],
      techLandList: [],
      techPortList: [],
      activeIndex: 0
    }
  },
  methods: {
    // async getTechnoligyList () {
    //   const { data } = await axios.get('http://localhost:3000/technology')
    //   this.technologyList = data
    //   this.techLandList = data.map((item) => item.images.landscape)
    //   this.techPortList = data.map((item) => item.images.portrait)
    //   // console.log(this.technologyList)
    //   // console.log(this.techLandList)
    //   // console.log(this.techPortList)
    // },
    getTechnoligyList () {
      this.technologyList = data.technology
      this.techLandList = data.technology.map((item) => item.images.landscape)
      this.techPortList = data.technology.map((item) => item.images.portrait)
    },
    getImageUrl (path) {
      const images = require.context('@/assets/technology', false, /\.(png|jpe?g|webp)$/)
      const fileName = path.split('/').pop()
      return images(`./${fileName}`)
    }
  },
  mounted () {
    // runFancySplitAnimation('.split_tech') // 执行动画
    this.getTechnoligyList()
    this.$nextTick(() => {
      playTechnologyAnimation()
    })
  },
  watch: {
    activeIndex () {
      this.$nextTick(() => {
        playTechnologyAnimation()
      })
    }
  }
}
</script>

<style>
@import '@/styles/technology.less';
</style>
