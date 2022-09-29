<template>
  <div>
    <div v-for="item in $store.state.TodoModule.items" :key="item.id" :class="{ done: item.done }">
      <TodoItem :item="item" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
};
</script>
<style></style>
