<template>
  <div class="copy">
    <p>
      <span v-for="(item, index) of state.copyLinkList" :key="index"
        ><a href="">{{ item.title }}</a></span
      >
    </p>
    <p>
      © 2022 知乎京 ICP 证 110745 号京 ICP 备 13052560 号 - 1京公网安备
      11010802020088 号出版物经营许可证互联网药品信息服务资格证书（京）-
      非经营性 - 2017 - 0067
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
  },

  data() {
    return {};
  }
});
</script>

<style langs="scss" scope></style>
