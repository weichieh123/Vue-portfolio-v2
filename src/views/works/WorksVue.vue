<template>
  <Work id="works-vue" class="works-vue" :title="'Vue'" :works="works" :path="'Vue/'" @toggle="toggleIsFlip" />
</template>

<script setup>
import { reactive } from 'vue';
import worksVue from '@/store/works/worksVue';
import Work from '@/components/layout/Works.vue';

const works = reactive(worksVue);

const toggleIsFlip = (work) => {
  // eslint-disable-next-line no-param-reassign
  work.isFlip = !work.isFlip;
};
</script>

<style lang="scss" scoped>
</style>
