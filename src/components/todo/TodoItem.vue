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
          @click="$store.dispatch('TodoModule/changeItemStatus',item.id)"
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
          @click="deleteTodo"
        >
          <i aria-hidden="true" class="material-icons">delete</i>
        </button>
        <button
          class="btn-picto"
          type="button"
          aria-label="Edit"
          title="Edit"
          @click="editTask(item)"
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

export default {

  data() {
    return {
      editTitle: "",
      editStatus: false,
    };
  },
  props: {
    item: {},
  },
  methods: {
    deleteTodo() {
      this.$modal.open({
        confirm: () => {
          this.$store.dispatch("TodoModule/deleteItem", this.item.id);
        },
        title: "Delete todo",
        content: "Are you sure delete the todo?",
        confirmText: "Delete",
      });
    },

    todoTextChange(e) {
      this.editTitle = e.target.value;
    },

    editTask(item) {
      if (!this.editStatus) {
        this.editStatus = true;
        this.editTitle = item.title;
      } else {
        item.title = this.editTitle;
        this.$modal.open({
          confirm: () => {
            this.$store.dispatch("TodoModule/updateItem", item);
            this.editStatus = false
          },
          title: "Edit Todo",
          content: "Are you sure edit the todo?",
          confirmText: "Edit",
        });
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
