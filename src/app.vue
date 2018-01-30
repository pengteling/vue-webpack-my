<template>
  <div id="app">   
    <aplayer></aplayer>
  </div>
</template>
<script>

import Aplayer from "./Aplayer.vue"

export default {
  components: {    
    Aplayer
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
