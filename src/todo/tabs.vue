<template>
  <div class="helper">
    <span class="left">{{leftItemsCount}} items left</span>
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
    },       
    leftItemsCount:{
      type:Number,
      required:true
    }
  },
  data(){
    return{
      states:["all","active","completed"]
    }
  },
  methods:{
    clearAllCompleted(){
      this.$emit('clearCompleted')
    },
    toggleFilter(state){
      this.$emit('troggleTabFilter',state) //传参
    }
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


