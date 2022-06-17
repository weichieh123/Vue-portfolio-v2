<template>
    <Work
        id="works-layout" class="works-layout" :title="'Layout'" :works="works" :path="'Layout/'" @toggle="toggleIsFlip"
     />
</template>

<script setup>
import { reactive } from 'vue';
import worksLayout from '@/store/works/worksLayout';
import Work from '@/components/layout/Works.vue';

const works = reactive(worksLayout);

const toggleIsFlip = (work) => {
  // eslint-disable-next-line no-param-reassign
  work.isFlip = !work.isFlip;
};
</script>
