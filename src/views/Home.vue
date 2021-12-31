<template>
  <div class="home">
    <About></About>
  </div>
</template>

<script lang="ts">
// import { defineComponent, onMounted, getCurrentInstance } from "vue";
import { defineAsyncComponent } from "vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    HelloWorld: defineAsyncComponent(
      () => import("@/components/HelloWorld.vue")
    ),
    About: defineAsyncComponent(() => import("./About.vue")),
  },
})
export default class Home extends Vue {
  public msg: String = "Welcome to Your Vue.js + TypeScript App";
  public initVar: String = "";

  mounted() {
    this.initVar = "测试";
  }
}
</script>
