<template>
  <div class="home">
    <!-- <About></About> -->
    {{ todos }}
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  toRefs

  // provide,
  // onMounted,
  // getCurrentInstance,
  // defineAsyncComponent,
} from "vue";
// import { Options, Vue } from "vue-class-component";

export default defineComponent({
  name: "App",

  components: {
    // About: defineAsyncComponent(() => import("./About.vue")),
  },

  setup() {
    // 响应式的数据

    const color = ref("red");
    const state = reactive({
      todos: [
        { id: 0, name: "1" },
        { id: 1, name: "2" },
        { id: 2, name: "3" }
      ]
    });
    return {
      color,
      ...toRefs(state)
    };
  }
});
// @Options({
//   components: {
//     About: defineAsyncComponent(() => import("./About.vue")),
//   },
// })
// export default class Home extends Vue {
//   public msg: String = "Welcome to Your Vue.js + TypeScript App";
//   public initVar: String = "";

//   mounted() {
//     this.initVar = "测试";
//   }
// }
</script>
