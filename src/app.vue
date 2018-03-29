<template>
  <div id="app">   
    <Video></Video>
    <!-- <mplayer :opt="opt" @loadedmetadata="loadedmetadata"></mplayer> -->
  </div>
</template>
<script>

import Video from './Video.vue'
//import mplayer from 'vue-simple-player'
export default {
  components: {    
    Video,
    // mplayer
  },
  data(){
    return {
      opt:{
        url:'http://oj4t8z2d5.bkt.clouddn.com/sound-of-silence.mp3',
        autoplay:false,
        id:"m2"
      }
    }
  },
  methods:{
    loadedmetadata(time,id){
      console.log(time,id)

    }
  }
};
</script>
<style lang="scss" scoped>
#test{
  border:0
}
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
