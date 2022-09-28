<template>
  <div>
    <div
      v-for="item in allItems"
      :key="item.id"
      :class="{ done: item.done }"
    >
      <TodoItem :item="item"/>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["allItems"]),
  },
  components: {
    TodoItem,
  },
};
</script>
<style></style>
