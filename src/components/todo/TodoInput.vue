<template>
  <div class="mt-3" >
    <form @submit.prevent="addTodoI" class="d-flex flex-wrap">
      <label for="newitem" class="w-100">Add new task!</label>
      <input
        type="text"
        v-model.trim="$v.itemTitle.$model"
        @change="titleChange"
        :class="{ 'is-invalid': validationStatus($v.itemTitle) }"
        class="form-control"
      />
      <div v-if="!$v.itemTitle.required" class="invalid-feedback">
        *The title is required
      </div>
      <button type="submit" class="w-30 h-3 mt-2 ml-0">Add item</button>
    </form>
  </div>
</template>

<script>
import { v1 } from "uuid";
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      itemTitle: "",
    };
  },
  validations: {
    itemTitle: { required },
  },
  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    titleChange(e) {
      this.itemTitle = e.target.value;
    },
    addTodoI() {
      if (this.itemTitle == "") {
        this.$v.$touch();
      } else {

       this.$store.dispatch('TodoModule/addItem',{
          id: v1(),
          title: this.itemTitle,
          done: false,
        });
        this.itemTitle = "";
      }

     
    },
  },
};
</script>

<style scoped>
form label {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}
form input {
  flex-grow: 1;
  border: 2px solid #002b5b;
  background: white;
  font-size: initial;
}
form button {
  padding: 1px;
  border: none;
  border-radius: 8px;
  background: #002b5b;
  color: white;
  font-size: large;
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: background 0.2s ease-out;
  font-family: "Quicksand", sans-serif;
}
form button:hover {
  background: #002b5b;
}
</style>
