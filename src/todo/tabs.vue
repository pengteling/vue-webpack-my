<template>
  <div class="helper">
    <span class="left">2 items left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key = "state"
        :class="[state , filter === state?'actived':'']"
        @click="toggleFilter(state)"
      >
      {{state}}
      </span>
    </span>
    <span class="clear" @click="clearAllCompleted">ClearCompleted</span>
  </div>
</template>
<script>
export default {
  props:{
    filter:{
      type:String,
      required:true
    }
  },
  data(){
    return{
      states:["all","active","completed"]
    }
  },
  methods:{
    clearAllCompleted(){},
    toggleFilter(state){}
  }
}
</script>
<style lang="scss" scoped>
.helper{
  height:40px;
  line-height: 40px;
}

.left{
  float: left;
  margin-right: 100px;
}
.clear{
  cursor: pointer; 
  float: right;
}
.tabs span{
  padding:5px 14px;
  &.actived{    
    border:#c00 1px solid;
  }
  border-radius: 3px;
  cursor: pointer;
}
</style>


