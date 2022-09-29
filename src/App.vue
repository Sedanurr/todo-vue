<template>
  <main id="todolist">
    <TodoIndex />
    <Modal />
  </main>
</template>

<script>
import Modal from "./components/modal/Modal.vue";
import TodoIndex from "./components/todo/";
export default {
  components: { Modal, TodoIndex },

  data() {
    return {
      showModal: true,
    };
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
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.dialog__wrapper {
  display: table-cell;
  vertical-align: middle;
}
.dialog__container {
  width: 300px;
  margin: 0px auto;
  padding: 15px 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: #002b5b;
  transition: all 0.3s ease;
}
.dialog__body {
  margin: 20px 0;
}
</style>
