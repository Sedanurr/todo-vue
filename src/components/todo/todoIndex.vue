<template>
  <div>
    <h1>Todo List</h1>
    <TodoList />
    <TodoInput />
  </div>
</template>
<script>
import TodoInput from "./TodoInput.vue";
import TodoList from "./TodoList.vue";
export default {
  components: {
    TodoInput,
    TodoList,
  },
};
</script>
