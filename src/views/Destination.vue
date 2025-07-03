<template>
  <div class="destination">
    <section class="destination_img">
      <p class="page_title">
        <span>01</span>
        PICK YOUR DESTINATION
      </p>
      <div class="destination_tabs_img" v-if="destinationsList.length">
        <img
          :src="getImageUrl(destinationsList[active]?.images?.png)"
          alt=""
          :key="destinationsList[active]?.images?.png"
        >
      </div>
    </section>
    <section class="destination_msg">
      <van-tabs v-model="active">
        <van-tab
          v-for="(item, index) in destinationsList"
          :key="index"
          :title="item.name.toUpperCase()"
        >
          <h2>{{item.name.toUpperCase()}}</h2>
          <p class="msg_content">
            {{item.description}}
          </p>
          <div class="line"></div>
          <div class="count">
            <div class="count_box">
              <p class="distance">
                AVG. DISTANCE
              </p>
              <span class="distance_num">{{item.distance}}</span>
            </div>
            <div class="count_box">
              <p class="time">
                EST. TRAVEL TIME
              </p>
              <span class="time_num">{{item.travel}}</span>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </section>
  </div>
</template>

<script>
// import axios from 'axios'
import data from '@/data/data.json'
import { playDestinationAnimation } from '@/utils/animations.js'
export default {
  name: 'DestinationPage',
  data () {
    return {
      destinationsList: [],
      active: 0
    }
  },
  created () {
    this.getDestinations()
  },
  watch: {
    active () {
      this.$nextTick(() => {
        playDestinationAnimation()
      })
    }
  },
  methods: {
    // async getDestinations () {
    //   const res = await axios.get('http://localhost:3000/destinations')
    //   this.destinationsList = res.data
    //   // console.log(this.destinationsList)
    //   this.$nextTick(() => {
    //     playDestinationAnimation()
    //   })
    // },
    getDestinations () {
      this.destinationsList = data.destinations
      this.$nextTick(() => {
        playDestinationAnimation()
      })
    },
    getImageUrl (path) {
      const images = require.context('@/assets/destination', false, /\.(png|jpe?g|webp)$/)
      const fileName = path.split('/').pop()
      return images(`./${fileName}`)
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/destination.less';
</style>
