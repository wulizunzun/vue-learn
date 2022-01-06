<template>
  <div class="login">
    <div class="copy">
      <p>
        <span v-for="(item, index) of linkList" :key="index"
          ><a href="">{{ item.title }}</a></span
        >
      </p>
    </div>
  </div>
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
  },

  data() {
    return {
      linkList: [
        { title: "知乎专栏" },
        { title: "圆桌" },
        { title: "发现" },
        { title: "移动应用" },
        { title: "联系我们" },
        { title: "来知乎工作" },
        { title: "注册机构号" },
        { title: "Investor Relations" }
      ]
    };
  }
});
</script>

<style langs="scss" scope></style>
