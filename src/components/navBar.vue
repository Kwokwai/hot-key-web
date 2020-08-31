<template>
  <div class="nav-bar">
    <div class="logo">
      <router-link to="/" style="color: #dae1f9 !important">
        <img class="logo-icon" :src="homeIcon" />
      </router-link>
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
  data() {
    return {
      homeIcon: require('@/assets/pics/home-icon.png'),
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.nav-bar {
  height: 48px;
  display: flex;
  align-items: center;
  background: #17265a;
  //   border-bottom: 1px solid #cccccc;

  .logo {
    padding-left: 100px;
    .a {
      color: #dae1f9 !important;
    }
    &-icon {
      width: 40px;
    }
    &-title {
      line-height: 1;
      font-weight: 400;
      font-size: 26px;
      color: #e2d6b1;
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
        color: #e2d6b1;
        border-bottom: 3px solid #e2d6b1;
      }
    }
  }
}
</style>