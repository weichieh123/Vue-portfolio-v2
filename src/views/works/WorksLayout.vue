<template>
  <Work
    id="works-layout"
    class="works-layout"
    :title="'Layout'"
    :works="works"
    :path="'Layout/'"
    @flip="flipCard"
    @close="closeCard"
  />
</template>

<script setup>
import { reactive } from 'vue';
import worksLayout from '@/store/works/worksLayout';
import Work from '@/components/layout/Works.vue';

const works = reactive(worksLayout);

const flipCard = (work) => {
  // eslint-disable-next-line no-param-reassign
  work.isFlip = true;
};
const closeCard = (work) => {
  // eslint-disable-next-line no-param-reassign
  work.isFlip = false;
};
</script>
