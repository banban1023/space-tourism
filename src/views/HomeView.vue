<template>
  <div class="home">
    <article class="home_msg">
      <p class="title_prev split">
        SO, YOU WANT TO TRAVEL TO
      </p>
      <h2 class="title split">SPACE</h2>
      <p class="content split">
        Let’s face it; if you want to go to space, you might as well genuinely go to
        outer space and not hover kind of on the edge of it. Well sit back, and relax
        because we’ll give you a truly out of this world experience!
      </p>
    </article>
    <section class="home_btn">
      <button @click="$router.push('/destination')">Explore
        <span class="effect-circle"></span>
      </button>
    </section>
  </div>
</template>

<script>
import { runSplitAnimation, runPulseEffect } from '@/utils/animations.js'
export default {
  name: 'HomeView',
  components: {
  },
  mounted () {
    runSplitAnimation('.split') // 执行动画
    runPulseEffect()
  }
  // watch: {
  //   $route () {
  //     runSplitAnimation('.split')
  //   }
  // }
}
</script>

<style lang="less" scoped>
@import '@/styles/home.less';
</style>
