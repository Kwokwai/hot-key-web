<template>
  <div class="nav-bar">
    <div class="logo">
      <router-link to="/" style="color: #dae1f9 !important">HotKey</router-link>
    </div>
    <div class="bar">
      <div class="item" v-for="(nav, index) in navList" :key="index">
        <router-link :to="'/' +nav">{{nav}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {
    navList: Array
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.nav-bar {
  height: 48px;
  display: flex;
  align-items: center;
  background: #738fe6;
  //   border-bottom: 1px solid #cccccc;

  .logo {
    padding-left: 100px;
    .a {
      color: #dae1f9 !important;
    }
  }

  .bar {
    height: 48px;
    line-height: 48px;
    padding-right: 100px;
    display: flex;
    align-items: centers;
    margin-left: auto;

    .item {
      padding: 0 20px;
      width: 100px;
      .a {
        color: #dae1f9 !important;
      }
    }

    a {
      font-weight: bold;
      color: #dae1f9;

      &.router-link-exact-active {
        padding-bottom: 13px;
        color: #33394d;
        border-bottom: 3px solid #33394d;
      }
    }
  }
}
</style>