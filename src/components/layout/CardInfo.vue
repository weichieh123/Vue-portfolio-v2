<template>
  <div class="card-info">
    <h4>Accomplishment</h4>
    <ul v-for="(item, index) in work.accomplishment" :key="index">
      <li>{{item}}</li>
    </ul>
    <p>{{work.content}}</p>
    <el-icon @click="emit('close', work)" class="close-btn"><Close /></el-icon>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const props = defineProps({
  work: {
    type: Object,
  },
});

const { work } = reactive(props);
// eslint-disable-next-line no-undef
const emit = defineEmits(['close']);

</script>

<style lang="scss" scoped>
@import '@/assets/scss/cardInfo.scss';
</style>
