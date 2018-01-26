<template>
  <div :class="['todo-item',todo.completed?'completed':'']">
    <input
      type="checkbox"
      class="toggle"
      v-model="todo.completed"
    >
    <label>
      {{todo.content}}
    </label>
    <button class="destory" @click="deleteTodo">x</button>
  </div>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    deleteTodoItem:{
      type:Function,
      required:true
    }
  },
  methods: {
    deleteTodo() {
      this.deleteTodoItem(this.todo)
    }
  }
};
</script>
<style lang="scss" scoped>
.todo-item {
  cursor: pointer;
  font-size: 24px;
  line-height: 36px;
  padding: 12px 0;
  border-bottom: 1px solid #ededed;
  position: relative;
  .destory {
    position: absolute;
    right: 60px;
    top: 15px;
    font-size: 9pt;
  }
  &.completed{
        color: #d9d9d9;
    text-decoration: line-through;
  }
}
</style>
