<template>
  <div class="copy">
    <p>
      <span v-for="(item, index) of state.copyLinkList" :key="index"
        ><a href="">{{ item.title }}</a></span
      >
    </p>
    <p>
      {{ state.copy }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  setup() {
    const state = inject("state");

    return {
      state
    };
  }
});
</script>

<style lang="scss" scope>
.copy {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;

  a {
    color: #fff;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
