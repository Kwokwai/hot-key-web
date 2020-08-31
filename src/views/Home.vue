<template>
  <div class="home">
    <div class="home-screen">
      <div class="home-screen-name">热键录</div>
      <div class="home-screen-intro">一款小而精简的快捷键查询工具</div>
      <div class="home-screen-download" @click="download">DownLoad</div>
    </div>
    <div class="home-intro" :style="{backgroundImage:'url('+backgroundImg+')'}">
      <div class="home-intro-left">
        <h3>热键录</h3>
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
        "使用易于访问且易于记忆的快捷方式。更快地完成工作。",
        "使用热键录查询热门Mac应用程序中的快捷键。",
        ""
      ],
      liList: [
        "将自定义键盘快捷键分配给Mac菜单项",
        "自动补全功能可帮助您导航菜单层次结构",
        "确保您获得正确的菜单标题",
        "热键录检查模棱两可的菜单项",
      ],
      introImg: require("@/assets/pics/demo.png"),
      backgroundImg: require('@/assets/pics/background.jpg')
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
    justify-content: space-around;
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
        filter: drop-shadow(2px 2px 10px rgba(0,0,0,.6));
        height: 512px;
      }
    }
  }
}
</style>
