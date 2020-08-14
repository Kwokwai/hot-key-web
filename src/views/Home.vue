<template>
  <div class="home">
    <div class="home-screen">
      <div class="home-screen-name">HotKeySheet</div>
      <div class="home-screen-intro">Customize Mac Menu Keyboard Shortcuts</div>
      <div class="home-screen-download" @click="download">DownLoad</div>
    </div>
    <div class="home-intro">
      <div class="home-intro-left">
        <h3>Custom Keyboard Shortcuts</h3>
        <p v-for="(p, index) in introList" :key="index">{{p}}</p>
        <ul>
          <li v-for="(li, index) in liList" :key="index">{{li}}</li>
        </ul>
      </div>
      <div class="home-intro-right">
        <img class="home-intro-right-img" :src="introImg" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      videoSrc: "@/assets/video/demo.mp4",
      introList: [
        "Use shortcuts that are easy to reach and easy to remember. Get your work done faster.",
        "Use CustomShortcuts to add keyboard shortcuts to menu items in most Mac applications.",
        ""
      ],
      liList: [
        "Assign custom keyboard shortcuts to Mac menu items",
        "Auto-completion helps you navigate menu hierarchies",
        "It makes sure you get menu titles exactly right",
        "CustomShortcuts checks for ambiguous menu items",
        "Copy & paste shortcuts between applications"
      ],
      introImg: require("@/assets/pics/lifetimes.png")
    };
  },
  created() {},
  methods: {
    download() {
      // this.$api.get("/download/wps.dmg", null, res=>{
      //   console.log(res)
      // })
      this.$https.download().then(res=>{

      })
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  &-screen {
    min-height: 400px;
    padding: 100px;
    background: #b6c5f2;

    &-name {
      color: #dae1f9;
      font-size: 32px;
    }

    &-intro {
      color: #dae1f9;
      font-size: 32px;
    }

    &-download {
      display: block;
      position: relative;
      background: #33394d;
      color: #fff;
      width: 160px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-family: "Ubuntu", sans-serif;
      font-size: 15px;
      font-weight: bold;
      text-decoration: none;
      margin: 50px auto 0;
      border-radius: 2px;
      overflow: hidden;
      -webkit-transition: all 0.15s ease-in;
      transition: all 0.15s ease-in;

      &:hover {
        background: #33394d;

        &::before {
          width: 45px;
          left: 205px;
        }
      }

      &:before {
        content: " ";
        position: absolute;
        background: #fff;
        width: 25px;
        height: 50px;
        top: 0;
        left: -45px;
        opacity: 0.3;
        -webkit-transition: all 0.25s ease-out;
        transition: all 0.25s ease-out;
        -webkit-transform: skewX(-25deg);
        transform: skewX(-25deg);
      }
    }
  }
  &-intro {
    display: flex;
    align-items: center;
    padding: 50px;

    &-left {
      padding-right: 50px;
      text-align: left;
      p {
        font-size: 16px;
        line-height: 26px;
        font-weight: 400;
        color: #666;
      }

      ul {
        margin: 0;
        padding: 0 0 0 20px;
      }
    }

    &-right {
      &-img {
        height: 512px;
      }
    }
  }
}
</style>
