<template>
  <main>
    <div
      style="z-index: 300"
      :class="top"
      class="fixed inset-0 w-full bg overflow-y-auto"
    >
      <div
        :class="size"
        class="w-full mx-auto bg-white rounded-lg relative light p-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          v-if="cancel"
          @click="close"
          class="w-4 h-4 cursor-pointer right-0 absolute mr-6 mt-1"
          viewBox="0 0 386.67 386.67"
        >
          <path
            d="M386.67 45.56L341.1 0 193.33 147.77 45.56 0 0 45.56l147.77 147.77L0 341.1l45.56 45.57L193.33 238.9 341.1 386.67l45.57-45.57L238.9 193.33z"
          />
        </svg>
        <main>
          <slot />
        </main>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    cancel: {
      default: true,
    },
    size: {
      default: "max-w-xl",
    },
    top: {
      default: "pt-24",
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  mounted() {
    document.body.style.setProperty("overflow", "hidden");
  },
  destroyed() {
    document.body.style.removeProperty("overflow");
  },
};
</script>

<style>
.light {
  box-shadow: 0px 0px 20px rgba(22, 120, 176, 0.12);
}
.bg {
  background: rgba(51, 51, 51, 0.13);
}
</style>
