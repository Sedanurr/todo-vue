<template>
  <main id="todolist">
    <h1>Todo List</h1>
    <TodoList />
    <ConfirmDialog
      :show="dialog"
      :cancel="cancel"
      :confirm="confirm"
      title="Delete a task"
      description="Are you sure you want to delete this task?"
    />
    <ConfirmDialog
      :show="updateDialog"
      :cancel="cancelUpdate"
      :confirm="confirmUpdate"
      title="Update a task"
      description="Are you sure you want to update this task?"
    />
    <TodoInput />
  </main>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoInput from "./components/TodoInput.vue";
import ConfirmDialog from "./components/ConfirmDialog.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { TodoList, TodoInput, ConfirmDialog },
  computed: {
    ...mapGetters(["dialog"]),
    ...mapGetters(["updateDialog"]),

  },
  

  methods: {
    ...mapActions(["deleteItem", "updateItem", "changeDialog"]),
    confirm() {
      this.deleteItem(this.$store.state.selectedId);
      this.cancel()
    },
    cancel(){
      this.$store.dispatch("cancel",this.$store.state.selectedId)
    },
    confirmUpdate() {
      this.updateItem(this.$store.state.selectedItem)
      console.log(this.$store.state.items)
      this.cancelUpdate()
    },
    cancelUpdate(){
      this.$store.dispatch("cancelUpdate",this.$store.state.selectedItem)
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  background: linear-gradient(135deg, #2b4865, #002b5b);
  font-size: 1.1rem;
  font-family: "Quicksand", sans-serif;
  height: 100%;
}

#todolist {
  margin: 4rem auto;
  padding: 2rem 3rem 3rem;
  max-width: 500px;
  background: #fff;
  color: #2b4865;
}
#todolist h1 {
  /*text-align:center;*/
  font-weight: normal;
  font-size: 2.6rem;
  letter-spacing: 0.05em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
#todolist h1 span {
  display: block;
  font-size: 0.8rem;
  margin-bottom: 0.7rem;
  margin-left: 3px;
  margin-top: 0.2rem;
}
.dialog {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  border-radius: 0.75rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.5rem;
  max-width: 100%;
  width: 24rem;
}
.dialog__content {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.dialog__title {
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 0.5rem;
  --tw-text-opacity: 1;
  color: rgba(17, 24, 39, var(--tw-text-opacity));
}
.dialog__description {
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-bottom: 1rem;
  --tw-text-opacity: 1;
  color: rgba(107, 114, 128, var(--tw-text-opacity));
}
.dialog__footer {
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.dialog__cancel {
  border-radius: 0.75rem;
  font-weight: 500;
  margin-right: 1rem;
}
.dialog__cancel:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.dialog__cancel {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.dialog__cancel:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
    var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
    calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
    var(--tw-shadow, 0 0 #0000);
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(75, 85, 99, var(--tw-ring-opacity));
  --tw-ring-opacity: 0.5;
}
.dialog__cancel {
  --tw-text-opacity: 1;
  color: rgba(17, 24, 39, var(--tw-text-opacity));
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.dialog__cancel:hover {
  --tw-text-opacity: 1;
  color: rgba(55, 65, 81, var(--tw-text-opacity));
}
.dialog__confirm {
  --tw-bg-opacity: 1;
  background-color: rgba(254, 226, 226, var(--tw-bg-opacity));
  border-radius: 0.75rem;
  font-weight: 500;
  margin-right: 1rem;
}
.dialog__confirm:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.dialog__confirm {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.dialog__confirm:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
    var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
    calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
    var(--tw-shadow, 0 0 #0000);
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(220, 38, 38, var(--tw-ring-opacity));
  --tw-ring-opacity: 0.5;
}
.dialog__confirm {
  --tw-text-opacity: 1;
  color: rgba(220, 38, 38, var(--tw-text-opacity));
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.dialog__confirm:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(252, 165, 165, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(153, 27, 27, var(--tw-text-opacity));
}
</style>
