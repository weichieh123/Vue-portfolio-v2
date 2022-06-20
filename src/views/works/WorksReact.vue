<template>
  <Work
    id="works-react"
    class="works-react"
    :title="'React'"
    :works="works"
    :path="'React/'"
    @flip="flipCard" @close="closeCard"
  />
</template>

<script setup>
import { reactive } from 'vue';
import worksReact from '@/store/works/worksReact';
import Work from '@/components/layout/Works.vue';

const works = reactive(worksReact);

const flipCard = (work) => {
  // eslint-disable-next-line no-param-reassign
  work.isFlip = true;
};
const closeCard = (work) => {
  // eslint-disable-next-line no-param-reassign
  work.isFlip = false;
};
</script>
