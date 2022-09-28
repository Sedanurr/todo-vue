<template>
  <div v-if="show" class="overlay">
    <div class="dialog">
      <div class="dialog__content">
        <div>
          <h2>{{ modalConfig.title }}</h2>
        </div>
        <div>
          <span v-if="!component">{{ modalConfig.content }}</span>
          <component :is="component" v-bind="modalConfig.props"></component>

        </div>
      </div>

      <hr />

      <div class="dialog__footer" v-if="!component">
        <button @click="cancel" class="dialog__cancel">
          {{ modalConfig.cancelText }}
        </button>
        <button @click="confirm" class="dialog__confirm">
          {{ modalConfig.confirmText }}
        </button>
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
        props: {},
      },
      component: () => {},
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
      component,
      props,
    }) {
      this.show = true;
      this.modalConfig.title = title ?? this.modalConfig.title;
      this.modalConfig.content = content ?? this.modalConfig.content;
      this.modalConfig.confirmText =
        confirmText ?? this.modalConfig.confirmText;
      this.modalConfig.cancelText = cancelText ?? this.modalConfig.cancelText;
      this.component = component;
      this.modalConfig.props = props;
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
