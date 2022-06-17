<template>
  <Work
    id="works-react"
    class="works-react"
    :title="'React'"
    :works="works"
    :path="'React/'"
    @toggle="toggleIsFlip"
  />
</template>

<script setup>
import { reactive } from 'vue';
import worksReact from '@/store/works/worksReact';
import Work from '@/components/layout/Works.vue';

const works = reactive(worksReact);

const toggleIsFlip = (work) => {
  // eslint-disable-next-line no-param-reassign
  work.isFlip = !work.isFlip;
};
</script>
