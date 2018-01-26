<template>
  <section class="real-app">
    <input type="text" 
      class="add-input" 
      autofocus="autofocus" 
      placeholder="接下去要做什么？" 
      @keyup.enter="addTodo"
    >
    <!-- <Item :todo="todo"></Item> -->
    <Item 
      :todo="todo" 
      v-for="todo in todosView" 
      :key="todo.id" 
      @deleteTodoItem="deleteTodoItem(todo)"
    />
    <Tabs 
      :filter="filter" 
      :leftItemsCount = "leftItemsCount"
      @troggleTabFilter ="troggleTabFilter" 
      @clearCompleted ="clearCompleted"  
    />    
  </section>
</template>

<script>
import Item from "./item.vue";
import Tabs from "./tabs.vue";
let id = 0;
export default {
  data() {
    return {
      // todo:{
      //   id:0,
      //   content:"test",
      //   completed:false
      // },
      todos: [],
      filter: "all"
    };
  },
  components: {
    Item,
    Tabs
  },
  computed: {
    todosView() {
      if (this.filter === "all") {
        return this.todos;
      } 
      else if (this.filter === "active") {
        return this.todos.filter(v => {
          return v.completed == false;
        });
      }
      else{
        return this.todos.filter(v => {
          return v.completed == true;
        });
      }
    },
    leftItemsCount(){
      return this.todos.filter(v => {
          return v.completed == false;
        }).length
    }
  },  
  methods: {
    addTodo(e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
      e.target.value = "";
    },
    deleteTodoItem(todo) {
      this.todos = this.todos.filter(v => v !== todo);
    },
    troggleTabFilter(filter) {
      console.log("troggleTabFilter")
      this.filter = filter;
    },
    clearCompleted(){
      this.todos = this.todos.filter(v => v.completed == false);
    }
  }
};
</script>

<style lang="scss" scoped>
.real-app {
  width: 640px;
  margin: 0 auto;
  box-shadow: 0 0 5px rgba(#666, 0.1);
  input {
    width: 100%;
    font-size: 24px;
    line-height: 1.4em;
    border: 0;
    outline: none;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    font-smoothing: antialiased;
    padding: 16px 16px 16px 60px;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.1);
  }
}
</style>
