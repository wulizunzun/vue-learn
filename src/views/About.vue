<template>
  <div class="about">
    <h2>name: {{ state.name }}</h2>
    <h2>age: {{ state.age }}</h2>
    <h2>wife: {{ state.wife }}</h2>
    <hr />
    <button @click="update">更新</button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  // ref,
  reactive,
  // getCurrentInstance
} from "vue";
// import { useCurrentInstance } from "@/utils/vue";

export default defineComponent({
  /* 使用vue3的composition API */
  setup() {
    /*
    定义响应式数据对象
    */
    const state = reactive({
      name: "tom",
      age: 25,
      wife: {
        name: "marry",
        age: 22,
      },
    });

    console.log(state, state.wife);

    return {
      state,
      update(): void {
        // 更新响应式数据的函数
        state.name += "--";
        state.age += 1;
        state.wife.name += "++";
        state.wife.age += 2;
      },
    };
  },
});
</script>
