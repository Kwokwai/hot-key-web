<template>
  <div id="app">
    <div id="nav">
      <navbar :navList="navList"></navbar>
    </div>
    <router-view class="content"/>
    <foot />
  </div>
</template>

<script>
import navbar from "@/components/navBar.vue"
import foot from "@/components/foot.vue"

export default {
  data() {
    return {
      navList: ["home", "pay"]
    };
  },
  components: {
    navbar,
    foot
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;

  .content {
    flex-grow: 1;
  }
}
</style>