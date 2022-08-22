<template>
  <main id="todolist">
    <h1>Todo List</h1>
    <TodoList />
    <TodoInput />

  </main>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoInput from "./components/TodoInput.vue";
export default {
  components: { TodoList, TodoInput },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
html,
body {
  font-size: 1.1rem;
  font-family: "Quicksand", sans-serif;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, #f5af19, #f12711);
}

#todolist {
  margin: 137px auto;
  padding: 40px 10px 10px 30px;
  max-width: 600px;
  background: #fff;
  color: #f5af19;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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

</style>
