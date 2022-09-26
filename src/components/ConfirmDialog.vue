<template>
  <div v-if="show" class="overlay">
    <div class="dialog">
      <div class="dialog__content">
        <h2 class="dialog__title" v-text="title"></h2>
        <p class="dialog__description" v-text="description" />
      </div>

      <hr />

      <div class="dialog__footer">
        <button @click="cancel" class="dialog__cancel">Cancel</button>
        <button @click="confirm" class="dialog__confirm">{{updateDialog ? 'Yes,Update it' : 'Yes, Delete it'}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["show", "title", "description", "cancel", "confirm"],
   computed: {
    ...mapGetters(["updateDialog"]),
  },
};
</script>
