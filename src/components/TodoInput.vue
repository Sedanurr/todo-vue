<template>
  <div>
    <form @submit.prevent="addTodoI">
      <label for="newitem">Add new task!</label>
      <input type="text" v-bind:value="itemTitle" @change="titleChange"/>
      <button type="submit">Add item</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import {v1} from "uuid"

export default {
    data() {
        return {
            itemTitle: ""
        }
    },
    methods: {
        ...mapActions(["addItem"]),
        titleChange(e) {
          this.itemTitle = e.target.value
        },
        addTodoI() {
          this.addItem({
            id: v1(),
            title: this.itemTitle,
            done : false
          });
          this.itemTitle = "";
        },
      
        
    }
};
</script>

<style scoped>
form {
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
}
form label {
  min-width: 80%;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}
form input {
  flex-grow: 1;
  border: 2px solid #f5af19;
  background: white;
  font-size: initial;
}
form button {
  padding: 2px;
  border: none;
  border-radius: 8px;
  height: 30px;
  background: #f5af19;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0px 1px 0px 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: background 0.2s ease-out;
}
form button:hover {
  background: #f5af19;
}
form input,
form button {
  font-family: "Quicksand", sans-serif;
  height: 3rem;
}
</style>
