<template>
  <pageCopy></pageCopy>
  <pageForm></pageForm>
</template>

<script lang="ts">
import { defineComponent, provide, reactive, defineAsyncComponent } from "vue";

export default defineComponent({
  components: {
    pageCopy: defineAsyncComponent(
      () => import("./components/page-copy/index.vue")
    ),
    pageForm: defineAsyncComponent(
      () => import("./components/page-form/index.vue")
    )
  },

  setup() {
    // /*
    // 定义响应式数据对象
    // */

    // const inputRef = ref<HTMLElement | null>(null);

    // onMounted(() => {
    //   inputRef.value && inputRef.value.focus();
    // });

    const state = reactive({
      copyLinkList: [
        { title: "知乎专栏" },
        { title: "圆桌" },
        { title: "发现" },
        { title: "移动应用" },
        { title: "联系我们" },
        { title: "来知乎工作" },
        { title: "注册机构号" },
        { title: "Investor Relations" }
      ]
    });

    provide("state", state);

    return {
      state,

      remove(): void {
        state.copyLinkList.splice(0, 1);
      }
    };
  }
});
</script>

<style langs="scss">
/* .login {
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
} */
</style>
