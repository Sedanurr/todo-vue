<template>
  <ul class="mt-1 ml-3">
    <li :class="{ done: item.done }">
      <span class="label" v-if="!editStatus">{{ item.title }}</span>
      <input
        type="text"
        v-bind:value="editTitle"
        @change="todoTextChange"
        v-else
        class="input"
      />
      <div class="actions">
        <button
          class="btn-picto"
          type="button"
          @click="changeItemStatus(item.id)"
        >
          <i aria-hidden="true" class="material-icons">{{
            item.done ? "check_box" : "check_box_outline_blank"
          }}</i>
        </button>
        <button
          class="btn-picto"
          type="button"
          aria-label="Delete"
          title="Delete"
          @click="showDialog(item.id)"
        >
          <i aria-hidden="true" class="material-icons">delete</i>
        </button>
        <button
          class="btn-picto"
          type="button"
          aria-label="Edit"
          title="Edit"
          @click="updateTask(item)"
        >
          <i aria-hidden="true" class="material-icons">{{
            editStatus ? "update" : "edit"
          }}</i>
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["dialog"]),
  },
  data() {
    return {
      editTitle: "",
      editStatus: false,
    };
  },
  watch: {
    "$store.state.showDialogUpdate": function (val) {
      if (val == false) {
        this.editStatus = false;
      }
    },


  },

  props: {
    item: {},
  },
  methods: {
    ...mapActions(["changeItemStatus"]),
    ...mapActions(["showDialog"]),
    ...mapActions(["updateItem"]),
    ...mapActions(["showDialogUpdate"]),

    todoTextChange(e) {
      this.editTitle = e.target.value;
    },

    updateTask(item) {
      
      if (!this.editStatus) {
        this.editStatus = true;
        this.editTitle = item.title;
      } else {
        item.title = this.editTitle;
        this.showDialogUpdate(item);
      }
    },
  },
};
</script>

<style scoped>
@keyframes strikeitem {
  to {
    width: calc(100% + 1rem);
  }
}

#todolist .todolist-move {
  transition: transform 1s;
}
#todolist .actions {
  flex-shrink: 0;
  padding-left: 2px;
}
#todolist .label {
  position: relative;
  transition: opacity 0.1s linear;
}
#todolist .input {
  flex-grow: 1;
  border: 2px solid #002b5b;
  background: white;
  font-size: initial;
}

#todolist .btn-picto {
  border: 0;
  background: #fff;
  -webkit-appearance: none;
  cursor: pointer;
  color: #002b5b;
}
#todolist li {
  display: flex;
  margin: 0 -3rem 4px;
  padding: 1.1rem 2rem;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
}
#todolist .done .label {
  opacity: 0.6;
}
#todolist .done .label:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -0.5rem;
  display: block;
  width: 0%;
  color: white;
  height: 1px;
  background: #000;
  animation: strikeitem 0.3s ease-out 0s forwards;
}
</style>
