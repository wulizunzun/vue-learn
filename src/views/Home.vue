<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "Home",
  components: {
    HelloWorld: defineAsyncComponent(() =>
      import("../components/HelloWorld.vue")
    ),
  },

  created() {
    // const num = 123;
    // console.log(num === 123);
  },
};
</script>
