<script lang="ts">
import Banner from './components/Banner.vue';
import Baseboard from './components/Baseboard.vue';
import MainContent from './components/MainContent.vue';

export default {
  components: { Banner, MainContent, Baseboard }
}
</script>

<template>
  <Banner/>
  <MainContent/>
  <Baseboard/>
</template>

<style scoped>

</style>