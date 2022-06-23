<template>
  <div
    class="works"
    v-dragscroll="{ target: '.scroll-section', active: !isMobile }"
  >
    <h2>{{ title }}</h2>
    <div class="scroll-section">
      <div class="wrap">
        <el-card
          v-for="(work, i) in works"
          :key="i"
          :body-style="{ padding: '0px' }"
        >
          <div class="card-top">
            <div
              class="card"
              :class="{ isFlipped: work.isFlip }"
            >
              <img
                :src="require('@/assets/Works/' + path + work.img)"
                class="img-fullscreen card__face card__face-front mt-offset"
              />
              <div class="hover-hint" @click="emit('flip', work)">
                <span>Click me!</span>
                <span>Click me!</span>
              </div>
              <CardInfo
                class="card__face card__face-back mt-offset"
                :work="work"
                @close="closeCard"
              />
            </div>
          </div>
          <div class="card-intro mt-offset">
            <a class="intro-title" :href="work.link">{{ work.title }}</a>
            <div class="intro-icon">
              <el-button class="rwd-icon-color" :icon="Platform" circle />
              <el-button
                v-if="work.rwd"
                class="rwd-icon-color"
                :icon="Iphone"
                circle
              />
            </div>
          </div>
        </el-card>
        <!-- <div class="card" v-for="(work, i) in works" :key="i">
          <h4 class="title">
            <a :href="work.link">{{ work.title }}<el-icon class="connection"><Connection /></el-icon></a>
          </h4>
          <div class="left">
            <div class="icons">
              <el-icon><Platform /></el-icon>
              <el-icon v-if="work.rwd"><Iphone /></el-icon>
            </div>
            <div class="tags">
              <span v-for="(tag, i) in work.tags" :key="'tag' + i"
                ># {{ tag }}</span
              >
            </div>
          </div>
          <div class="right">
            <img
              :src="require('@/assets/Works/' + path + work.img)"
              :alt="work.img"
            />
            <div v-if="work.rwd" class="mobile">
              <img
                :src="require('@/assets/Works/' + path + work.mobileImg)"
                alt=""
              />
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <div class="notice">
      <small>scroll</small>
      <div class="blink">
        <el-icon><Right /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue';
import { Platform, Iphone } from '@element-plus/icons-vue';
import CardInfo from '@/components/layout/CardInfo.vue';

const props = defineProps({
  title: {
    type: String,
  },
  works: {
    type: Array,
  },
  path: {
    type: String,
  },
});
const { title, works, path } = toRefs(props);

const isMobile = computed(() => {
  const ifIsMobile = window.matchMedia('only screen and (max-width: 576px)');
  // console.log('mobile??', ifIsMobile.matches);
  return ifIsMobile.matches;
});

// eslint-disable-next-line no-undef
const emit = defineEmits(['flip', 'close']);

const closeCard = (work) => {
  emit('close', work);
};

// const calcMobile = () => {
//   const ifIsMobile = window.matchMedia('only screen and (max-width: 768px)');
//   console.log('mobile??', ifIsMobile.matches);
//   return ifIsMobile.matches;
// };
// onMounted(() => {
//   window.addEventListener('resize', () => calcMobile());
// });
</script>

<style lang="scss" scoped>
@import '@/assets/scss/works.scss';
</style>
