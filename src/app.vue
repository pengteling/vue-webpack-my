<template>
  <div id="app">   
    <Video></Video>
  </div>
</template>
<script>

import Video from './Video.vue'

export default {
  components: {    
    Video
  }
};
</script>
<style>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
