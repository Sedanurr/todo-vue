<template>
  <div v-if="show" class="overlay">
    <div class="dialog">
      <div class="dialog__wrapper">
        <div class="dialog__container">
          <div class="dialog__header">
            <h2>{{ modalConfig.title }}</h2>
          </div>
          <div class="dialog__body">
            <span>{{ modalConfig.content }}</span>
          </div>

          <hr />

          <div class="dialog__footer">
            <div class="ml-5">
              <button @click="cancel" class="btn btn-outline-secondary mr-2">
                {{ modalConfig.cancelText }}
              </button>
              <button @click="confirm" class="btn btn-outline-danger">
                {{ modalConfig.confirmText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "ConfirmDialog",
  props: {
    msg: String,
  },
  data() {
    return {
      show: false,
      modalConfig: {
        title: "Header",
        content: "Content",
        confirmText: "Confirm",
        cancelText: "Cancel",
      },

    };
  },
  created() {
    const modal = {
      open: this.open,
      close: this.close,
      confirm: this.confirm,
    };
    Vue.prototype.$modal = modal;
  },
  methods: {
    open({
      confirm,
      title,
      content,
      confirmText,
      cancelText,
    }) {
      this.show = true;
      this.modalConfig.title = title ?? this.modalConfig.title;
      this.modalConfig.content = content ?? this.modalConfig.content;
      this.modalConfig.confirmText =
        confirmText ?? this.modalConfig.confirmText;
      this.modalConfig.cancelText = cancelText ?? this.modalConfig.cancelText;
      this.confirmResolver = confirm;
    },
    cancel() {
      this.show = false;
    },
    confirm() {
      this.confirmResolver();
      this.show = false;
    },
    confirmResolver() {},
  },
};
</script>
