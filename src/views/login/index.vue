<template>
  <div class="login">登录页</div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  // inject,
  onMounted
} from "vue";

export default defineComponent({
  setup() {
    /*
    定义响应式数据对象
    */
    const state = reactive({
      name: "tom",
      age: 25,
      wife: {
        name: "marry",
        age: 22
      }
    });

    const inputRef = ref<HTMLElement | null>(null);

    onMounted(() => {
      inputRef.value && inputRef.value.focus();
    });

    // const color = inject("color");

    return {
      state,
      inputRef,
      // color,
      update(): void {
        // 更新响应式数据的函数
        state.name += "--";
        state.age += 1;
        state.wife.name += "++";
        state.wife.age += 2;
      }
    };
  }
});
</script>
