<template>
  <Work
    id="works-vue"
    class="works-vue"
    :title="'Vue'"
    :works="works"
    :path="'Vue/'"
    @flip="flipCard"
    @close="closeCard"
  />
</template>

<script setup>
import { reactive } from 'vue';
import worksVue from '@/store/works/worksVue';
import Work from '@/components/layout/Works.vue';

const works = reactive(worksVue);

const flipCard = (work) => {
  // eslint-disable-next-line no-param-reassign
  work.isFlip = true;
};
const closeCard = (work) => {
  // eslint-disable-next-line no-param-reassign
  work.isFlip = false;
};
</script>

<style lang="scss" scoped></style>
